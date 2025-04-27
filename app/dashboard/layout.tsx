'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	LayoutDashboard,
	Calendar,
	BarChart,
	Settings,
	HelpCircle,
	Linkedin,
	Twitter,
	Instagram,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeItem, setActiveItem] = useState('dashboard');

	// Close mobile menu when window is resized to desktop size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const navItems = [
		{
			id: 'dashboard',
			label: 'Dashboard',
			icon: <LayoutDashboard className='h-5 w-5' />,
			href: '/dashboard',
		},
		{
			id: 'schedulers',
			label: 'Schedulers',
			icon: <Calendar className='h-5 w-5' />,
			href: '/dashboard/schedulers',
			badge: '3',
		},
		{
			id: 'analytics',
			label: 'Analytics',
			icon: <BarChart className='h-5 w-5' />,
			href: '/dashboard/analytics',
		},
		{
			id: 'settings',
			label: 'Settings',
			icon: <Settings className='h-5 w-5' />,
			href: '/dashboard/settings',
		},
		{
			id: 'help',
			label: 'Help & Support',
			icon: <HelpCircle className='h-5 w-5' />,
			href: '/dashboard/help',
		},
	];

	const platforms = [
		{
			id: 'linkedin',
			name: 'LinkedIn',
			icon: <Linkedin className='h-5 w-5 text-blue-500' />,
			connected: true,
		},
		{
			id: 'twitter',
			name: 'Twitter',
			icon: <Twitter className='h-5 w-5 text-blue-400' />,
			connected: true,
		},
		{
			id: 'instagram',
			name: 'Instagram',
			icon: <Instagram className='h-5 w-5 text-pink-500' />,
			connected: false,
		},
	];

	return <></>;
}
