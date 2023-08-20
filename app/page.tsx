'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	const toHomePage = () => {
		router.push('/feed');
	};
	const toAdminHomePage = () => {
		router.push('/admin/');
	};

	return (
		<div className='grid gap-4 '>
			<b>LOGIN page</b>
			<div>This page will have text field for:</div>
			<ul>
				<li>First Name *</li>
				<li>Last Name *</li>
				<li>Email or Phone Number(one of them will be required) </li>
				<li>From which side they (Bride/Groom)</li>
			</ul>
			<Button onClick={toHomePage}>To Home Page</Button>
			<Button onClick={toAdminHomePage}>To Admin Login Page</Button>
			{/* <Skeleton className='w-[300px] h-[40px] rounded-full ' /> */}
		</div>
	);
}
