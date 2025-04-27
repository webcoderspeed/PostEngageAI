"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

interface HeroSceneProps {
  scrollY: number
}

export function HeroScene({ scrollY }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const composerRef = useRef<EffectComposer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 20
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Post-processing
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.8, 0.3, 0.1)
    composer.addPass(bloomPass)
    composerRef.current = composer

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)

    // Create particles in a sphere-like distribution
    for (let i = 0; i < particlesCount; i++) {
      // Random spherical coordinates
      const radius = 15 * Math.pow(Math.random(), 1 / 3)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i * 3 + 2] = radius * Math.cos(phi)

      // Random scale for each particle
      scaleArray[i] = Math.random() * 2 + 0.5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    // Create particle material with custom shader
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float scale;
        varying vec3 vPosition;
        
        void main() {
          vPosition = position;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        
        void main() {
          // Create a circular particle
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          // Create a gradient based on position
          vec3 color1 = vec3(0.95, 0.3, 0.7); // Pink
          vec3 color2 = vec3(0.6, 0.3, 0.9);  // Purple
          vec3 color3 = vec3(0.3, 0.4, 0.9);  // Indigo
          
          // Normalize position for color mixing
          vec3 normPos = normalize(vPosition);
          float mixFactor1 = (normPos.x + 1.0) / 2.0;
          float mixFactor2 = (normPos.y + 1.0) / 2.0;
          
          vec3 finalColor = mix(
            mix(color1, color2, mixFactor1),
            color3,
            mixFactor2
          );
          
          // Add glow effect
          float glow = 0.5 * (1.0 - r * 2.0);
          gl_FragColor = vec4(finalColor, glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer || !composer) return

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      composer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX
      mouseY = event.clientY - windowHalfY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth follow for mouse movement
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.01 * (targetY - particlesRef.current.rotation.x)
        particlesRef.current.rotation.y += 0.01 * (targetX - particlesRef.current.rotation.y)
        particlesRef.current.rotation.z = elapsedTime * 0.05
      }

      // Render
      if (composerRef.current) {
        composerRef.current.render()
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      if (particlesRef.current) {
        particlesRef.current.geometry.dispose()
        ;(particlesRef.current.material as THREE.Material).dispose()
      }
    }
  }, [])

  useEffect(() => {
    // Parallax effect based on scroll
    if (cameraRef.current && particlesRef.current) {
      cameraRef.current.position.y = -scrollY * 0.005
      particlesRef.current.rotation.y = scrollY * 0.001
    }
  }, [scrollY])

  return (
    <div className="absolute inset-0 z-0" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70"></div>
    </div>
  )
}
