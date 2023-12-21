'use client';

import React from 'react';
import { ToggleButton } from '@/components/ui/toggle-theme';
import LogoutButton from '@/components/ui/logout';

export default function Header() {
	return (
		<div
			className='justify-between w-full flex items-center sticky top-0 bg-[hsl(var(--background))] z-50'
			style={{ boxShadow: '0 -10px 16px hsl(var(--foreground))' }}>
			<div className='container justify-between w-full flex items-center   '>
				<div className='gradient-text font-bold'>#TheTanishWedding</div>
				<div>
					<ToggleButton />
					<LogoutButton />
				</div>
			</div>
		</div>
	);
}
