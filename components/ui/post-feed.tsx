'use client';

import postType from '@/model/post.types';
import { Heart, MoreVertical, PenIcon, Trash } from 'lucide-react';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu';
import { useEffect, useState } from 'react';
import { useToast } from './use-toast';
import Image from 'next/image';
import userType from '@/model/user.types';
import Link from 'next/link';
import { Types } from 'mongoose';
import axios from 'axios';

type PostFeed = {
	data: postType & { createdBy: userType } & { likes?: [userType] | [Types.ObjectId] };
};

function PostFeed({ data }: PostFeed) {
	const { toast } = useToast();

	const [likes, setLikes] = useState<any>();
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const userID = localStorage.getItem('userID');

	useEffect(() => {
		console.log(data?.likes);
		const updatedList = typeof data?.likes?.[0] === 'string' ? data?.likes : data?.likes?.map((i: any) => i?._id);
		setLikes(updatedList);
		if (updatedList?.includes(userID)) {
			setIsLiked(true);
		}
	}, []);

	const callLike = async () => {
		try {
			const index = likes?.indexOf(userID);
			const sendData = { mode: index !== -1 ? 'delete' : 'add' };
			const result = await axios.patch(`/api/post/action/like/${data?._id}`, sendData);

			if (!result?.data?.ok) {
				toast({
					variant: 'destructive',
					title: result?.data?.errors?.[0]?.message,
				});
				return false;
			}
			if (sendData?.mode === 'add') {
				setLikes((prev: any) => [...prev, result?.data?.packet?.updated]);
				setIsLiked(true);
			} else {
				setLikes((prev: any) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
				setIsLiked(false);
			}

			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	return (
		<div className='group flex flex-col relative overflow-hidden mb-4  border-opacity-5 rounded-2xl z-10 post-shadow'>
			<div className='p-4 capitalize font-semibold text-lg'>
				<Link target='_self' href={`/profile/${data?.createdBy?._id}`}>
					{data?.createdBy && data?.createdBy?.name}
				</Link>
			</div>
			<Link target='_self' href={`/feed/${data?._id}`} className='flex justify-center items-center flex-grow'>
				<Image
					width={200}
					height={200}
					className='object-contain w-full h-100'
					style={{ maxHeight: '500px' }}
					src={data?.source}
					alt=''
					priority
				/>
			</Link>

			<div className='flex justify-between'>
				<div className='p-4 rounded-md flex items-center text-[hsl(var(--foreground))] '>{data?.caption}</div>
				<div className='flex justify-start items-center my-3 me-3 flex-col'>
					<Button
						size={'sm'}
						className={`bg-background ${!isLiked ? 'text-foreground' : 'text-destructive'}  hover:text-background`}
						onClick={callLike}>
						<Heart fill={isLiked ? 'red' : 'none'} />
					</Button>
					<div className='text-foreground w-full text-center text-xs opacity-80'>
						{likes?.length > 0 && `${likes?.length} like`}{' '}
					</div>
				</div>
			</div>

			{data?.likes?.length > 0 && typeof data?.likes[0] !== 'string' && (
				<div className='my-3 px-4 text-sm'>
					<div className='opacity-70'>Liked By</div>
					<div>
						{data?.likes?.map((user: any) => (
							<div className='capitalize ' key={user?._id}>
								{user?.name}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default PostFeed;
