'use client';

import PostFeed from '@/components/ui/post-feed';
import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import postType from '@/model/post.types';
import userType from '@/model/user.types';
import axios from 'axios';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Feed() {
	const { toast } = useToast();
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [currentState, setCurrentState] = useState('false');
	const [callApi, setCallApi] = useState(false);

	const [eventRef, setEventRef] = useState('');
	const [eventList, setEventList] = useState([]);
	const [postList, setPostList] = useState<(postType & { createdBy: userType })[]>();
	const [pagination, setPagination] = useState({ total: 0, page: 1, limit: 8 });

	const getEventList = useCallback(async () => {
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

			const current = searchParams.get('selected');
			setEventRef(current || 'all' || packet?.data?.packet?.default);
			// toast({ description: 'Successfully logged out' });
			// getPostFromEvent(packet?.data?.packet?.default);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	}, []);

	const getPostFromEvent = useCallback(
		async (eventRef: string) => {
			try {
				if (!eventRef) return false;
				if (pagination.page !== 1 && postList && postList?.length > pagination.total) return true;

				const packet = await axios.get(`/api/post/event/${eventRef}?page=${pagination.page}&limit=${pagination.limit}`);

				if (!packet?.data?.ok) {
					toast({
						variant: 'destructive',
						title: packet?.data?.errors?.[0]?.message,
					});
					return false;
				}

				const { list, total, page, limit } = packet?.data?.packet;
				setPostList((prev) => (pagination.page === 1 ? list : [...(prev ? prev : []), ...list]));
				setPagination({ total, page, limit });

				return true;
			} catch (err: any) {
				const errMsg = err?.response?.data?.errors?.[0]?.message;
				console.error(errMsg);
				toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
				return false;
			}
		},
		[pagination.page]
	);

	useEffect(() => {
		getEventList();
	}, [getEventList, callApi]);

	useEffect(() => {
		if (eventRef) {
			getPostFromEvent(eventRef);
		}
	}, [eventRef, getPostFromEvent, callApi]);

	const onSelect = (event: any) => {
		// now you got a read/write object
		const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

		// update as necessary
		const value = event.target.value.trim();
		setEventRef(value);

		if (!value) {
			current.delete('selected');
		} else {
			current.set('selected', value);
		}

		// cast to string
		const search = current.toString();
		// or const query = `${'?'.repeat(search.length && 1)}${search}`;
		const query = search ? `?${search}` : '';

		router.push(`${pathname}${query}`);
	};

	return (
		<div className='grid  '>
			<div className='container'>
				<div className='my-6 flex justify-between'>
					<h4 className='font-bold text-2xl'>Feed </h4>
					<div>
						<select onChange={onSelect} value={eventRef}>
							<option value={'all'}> All </option>
							{eventList?.map((event: eventType) => (
								<option value={event?._id as ''} key={event?._id as ''}>
									{event?.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 md:gap-2 '>
				{Array.isArray(postList) &&
					postList?.map((post: postType & { createdBy: userType }) => (
						<PostFeed data={post} key={post?._id} setCallApi={setCallApi} />
					))}
			</div>
			<div className='flex justify-center items-center'>
				{postList && postList?.length < pagination?.total && (
					<button
						disabled={currentState === 'loading'}
						type='button'
						onClick={() => setPagination((prev) => ({ ...prev, page: prev.page + 1 }))}
						className='w-56 py-2 mb-3 text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
						Show More
					</button>
				)}
			</div>
		</div>
	);
}
