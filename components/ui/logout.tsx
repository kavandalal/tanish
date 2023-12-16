'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { useToast } from './use-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LogOutIcon } from 'lucide-react';
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

export default function LogoutButton() {
	const { toast } = useToast();
	const router = useRouter();

	const toLoginPage = () => {
		router.push('/');
	};

	const logoutCall = async () => {
		try {
			const packet = await axios.get('/api/auth/logout');

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			toast({ description: 'Successfully logged out' });
			toLoginPage();
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}
	};

	return (
		<Button variant='link' size='icon' onClick={logoutCall}>
			<LogOutIcon className='h-[1.2rem] w-[1.2rem]' />
			<span className='sr-only'>Logout</span>
		</Button>
	);
}
