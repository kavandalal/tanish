'use client';

import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feed() {
	const { toast } = useToast();

	const [eventRef, setEventRef] = useState('');
	const [eventList, setEventList] = useState([]);
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		getEventList();
	}, []);

	const getEventList = async () => {
		try {
			const packet = await axios.get('/api/event');

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}
			setEventList(packet?.data?.packet?.list);
			setEventRef(packet?.data?.packet?.default);
			// toast({ description: 'Successfully logged out' });
			getPostFromEvent(packet?.data?.packet?.default);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	const getPostFromEvent = async (eventRef: string) => {
		try {
			if (!eventRef) return false;

			const packet = await axios.get(`/api/post/${eventRef}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			const { list, total, page, limit } = packet?.data?.packet;
			setPostList(list);

			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	return (
		<div className='grid gap-4 '>
			<div className='flex justify-between'></div>
			<b>Feed</b>
			<div>This page will have : </div>
			<ul>
				<li>filter to see all the events</li>
				<li>filter of newest/top liked photos in Ascending/Descending</li>
			</ul>
			<div>
				Each post will have download, like, comment, the name of the person who uploaded the photo, the person can write
				caption while uploading the photo, timestamp
			</div>
		</div>
	);
}
