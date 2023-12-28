'use client';

import PostFeed from '@/components/ui/post-feed';
import { useToast } from '@/components/ui/use-toast';
import userType from '@/model/user.types';
import postType from '@/model/post.types';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Feed() {
	const { toast } = useToast();
	const pathname = usePathname();

	const [callApi, setCallApi] = useState(false);
	const [currentState, setCurrentState] = useState('false');

	const [postData, setPostData] = useState<postType & { createdBy: userType } & { likes?: [userType] }>();

	useEffect(() => {
		getInitData();
	}, [callApi]);

	const getInitData = async () => {
		if (!pathname) return false;
		const list = typeof pathname === 'string' ? pathname?.split('/') : [];
		const postID = list?.length > 0 && list?.[list.length - 1];
		if (postID) {
			setCurrentState('loading');
			await getPostData(postID);
			setCurrentState('true');
		}
	};

	const getPostData = async (postRef: string) => {
		try {
			if (!postRef) return false;

			const result = await axios.get(`/api/post/${postRef}`);

			if (!result?.data?.ok) {
				toast({
					variant: 'destructive',
					title: result?.data?.errors?.[0]?.message,
				});
				return false;
			}

			const packet = result?.data?.packet;
			setPostData(packet);

			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	return (
		<div className='grid container '>
			<div className='my-6 flex justify-between'>
				<h4 className='font-bold text-2xl'>Post </h4>
			</div>
			<div>{postData && <PostFeed data={postData} setCallApi={setCallApi} />}</div>
		</div>
	);
}
