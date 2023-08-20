'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
	const router = useRouter();

	const toAdminHomePage = () => {
		router.push('/admin/post');
	};

	return (
		<div className='grid gap-4 '>
			<b>Admin Login</b>
			<div>This page will have text field for:</div>
			<ul>
				<li>Username</li>
				<li>password</li>
			</ul>
			<Button onClick={toAdminHomePage}>To Admin Page</Button>
			{/* <Skeleton className='w-[300px] h-[40px] rounded-full ' /> */}
		</div>
	);
}
