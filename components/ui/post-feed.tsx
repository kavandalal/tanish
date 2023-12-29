'use client';

import postType from '@/model/post.types';
import { ArrowDownToLine, Heart, MoreVertical, PenIcon, Trash, Trash2 } from 'lucide-react';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useToast } from './use-toast';
import Image from 'next/image';
import userType from '@/model/user.types';
import Link from 'next/link';
import { Types } from 'mongoose';
import axios from 'axios';
import { Popover } from './popover';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { S3BucketBaseUrl } from '../constant';
import { downloadImage } from '@/lib/client-helper';

type PostFeed = {
	data: postType & { createdBy: userType } & { likes?: [userType] | [Types.ObjectId] };
	setCallApi?: Dispatch<SetStateAction<boolean>>;
};

function PostFeed({ data, setCallApi }: PostFeed) {
	const { toast } = useToast();

	const [likes, setLikes] = useState<any>();
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const userID = localStorage.getItem('userID');

	useEffect(() => {
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

	const clearImage = async (postRef: string) => {
		try {
			const result = await axios.delete(`/api/post/action/${postRef}`);
			if (!result?.data?.ok) {
				toast({
					variant: 'destructive',
					title: result?.data?.errors?.[0]?.message,
				});
				return false;
			}

			if (setCallApi) {
				setCallApi((prev: boolean) => !prev);
			}
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	const incrementCounterAPI = async (postRef: string) => {
		try {
			const result = await axios.get(`/api/post/action/download/${postRef}`);
			if (!result?.data?.ok) {
				toast({
					variant: 'destructive',
					title: result?.data?.errors?.[0]?.message,
				});
				return false;
			}
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	return (
		<div className='group flex flex-col relative overflow-hidden mb-4 border-opacity-5 rounded-2xl z-10 post-shadow'>
			<div className='p-4 capitalize font-semibold text-lg'>
				<Link target='_self' href={`/profile/${data?.createdBy?._id}`}>
					{data?.createdBy && data?.createdBy?.name}
				</Link>
			</div>
			<Popover>
				<PopoverTrigger className='absolute top-2 right-2 p-2 shadow-md bg-[hsl(var(--background))] rounded-lg'>
					<MoreVertical />
				</PopoverTrigger>
				<PopoverContent className='duration-500 max-w-fit animate-in text-[hsl(var(--foreground))]'>
					<div className='flex flex-col '>
						<Button
							variant={'outline'}
							type='button'
							onClick={() => {
								downloadImage({ source: data?.source, caption: data?.caption });
								incrementCounterAPI(data?._id);
							}}
							className='flex justify-between w-[140px] bg-[hsl(var(--background))]'>
							<ArrowDownToLine color='green' />
							<span className=''>Download </span>
						</Button>
						{userID === data?.createdBy?._id && (
							<Button
								variant={'outline'}
								type='button'
								onClick={() => clearImage(data?._id)}
								className='flex justify-between w-[140px] bg-[hsl(var(--background))]'>
								<Trash2 color='red' />
								<span className=''>Delete </span>
							</Button>
						)}
					</div>
				</PopoverContent>
			</Popover>

			<Link target='_self' href={`/feed/${data?._id}`} className='flex justify-center items-center flex-grow'>
				<Image
					width={200}
					height={200}
					className='object-contain w-full h-100'
					style={{ maxHeight: '400px' }}
					src={`${S3BucketBaseUrl}${data?.source}`}
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
