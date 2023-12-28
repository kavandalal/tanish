'use client';

import PostExplore from '@/components/ui/post-explore';
import PostFeed from '@/components/ui/post-feed';
import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import postType from '@/model/post.types';
import userType from '@/model/user.types';
import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

export default function Explore() {
	const { toast } = useToast();

	const [postList, setPostList] = useState<[postType]>();
	const [pagination,setPagination ] = useState({ total : 0, page : 1 , limit: 15 }) 


	const getPost = useCallback(async () => {
		try {

			if (pagination.page !== 1 && postList && postList?.length >= pagination.total) return true

			const packet = await axios.get(`/api/post?page=${pagination.page}&limit=${pagination.limit}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			const { list, total, page, limit } = packet?.data?.packet;
			setPostList(prev => pagination.page === 1  ?  list : [ ...(prev  ? prev : []) , ...list ]);
			setPagination({ total , page ,limit })

			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	}, [pagination.page]);

	useEffect(() => {
		getPost();
	}, [getPost]);

	return (
		<div className='grid  '>
			{/* <b>Explore</b>
			<div>This page will have all the events top photos (Most Liked First from all the events)</div>
			<div>Each row will have a square block and each row will have 3 photos</div> */}
			<div className='container'>
				<div className='my-6'>
					<h4 className='font-bold text-2xl'>Explore </h4>
				</div>
			</div>
			<div className='grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 '>
				{Array.isArray(postList) &&
					postList?.map((post: postType) => (
						<Link href={`/feed/${post?._id}`} target='_self'>
							<PostExplore editable={false} data={post} />
						</Link>
					))}
			</div>
			<div className='flex justify-center items-center'>
				{ postList && postList?.length < pagination?.total &&  <button
							// disabled={currentState === 'loading'}
							type='button'
							onClick={() => setPagination(prev => ({ ...prev ,page: prev.page +1  }) ) }
							className='w-56 py-2 my-3 text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
							Show More
						</button>} 
			</div>
		</div>
	);
}
