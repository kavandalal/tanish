import React from 'react';
import { ToggleButton } from '@/components/ui/toggle-theme';

export default function Header() {
	return (
		<div
			className='justify-between w-full flex items-center sticky top-0 bg-[hsl(var(--background))]'
			style={{ boxShadow: '0 -10px 16px hsl(var(--foreground))' }}>
			<div className='container justify-between w-full flex items-center   '>
				<div>Logo</div>
				<ToggleButton />
			</div>
		</div>
	);
}
