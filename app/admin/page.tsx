'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboard() {
	const router = useRouter();

	useEffect(() => {
		toAdminHomePage();
	}, []);

	const toAdminHomePage = () => {
		router.push('/admin/post');
	};
}
