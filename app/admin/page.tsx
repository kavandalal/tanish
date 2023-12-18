'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function AdminDashboard() {
	const router = useRouter();

	const toAdminHomePage = useCallback(() => {
		router.push('/admin/post');
	}, []);

	useEffect(() => {
		toAdminHomePage();
	}, [toAdminHomePage]);
}
