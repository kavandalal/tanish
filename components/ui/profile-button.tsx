'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { PersonIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ProfileButton() {
	const router = useRouter();

	const gotoProfile = () => {
		router.push('/profile');
	};

	return (
		<Button size='icon' onClick={gotoProfile}>
			<PersonIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ' />
			<span className='sr-only'>Profile Page</span>
		</Button>
	);
}
