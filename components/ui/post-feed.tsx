'use client';

import postType from '@/model/post.types';
import { MoreVertical, PenIcon, Trash } from 'lucide-react';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu';
import { useState } from 'react';
import { useToast } from './use-toast';
import Image from 'next/image';
import userType from '@/model/user.types';
import Link from 'next/link';
import { Types } from 'mongoose';

type PostFeed = {
	data: postType & { createdBy: userType } & { likes?: [userType] | [Types.ObjectId] };
};

function PostFeed({ data }: PostFeed) {
	return (
		<div className='group flex flex-col relative overflow-hidden mb-4  border-opacity-5 rounded-2xl z-10 post-shadow'>
			<div className='p-4 capitalize font-semibold'>
				<Link target='_self' href={`/profile/${data?.createdBy?._id}`}>
					{data?.createdBy && data?.createdBy?.name}
				</Link>
			</div>
			<Link target='_self' href={`/feed/${data?._id}`}>
				<div className='flex justify-center items-center flex-grow'>
					<Image
						width={200}
						height={200}
						className='object-contain w-full h-100'
						style={{ maxHeight: '500px' }}
						src={data?.source}
						alt=''
						priority
					/>
				</div>
			</Link>

			{data?.caption && (
				<div className='p-4 rounded-md flex items-center text-[hsl(var(--foreground))] text-sm'>{data?.caption}</div>
			)}

			{data?.likes?.length > 0 && typeof data?.likes[0] !== 'string' && (
				<div className='my-3'>
					<div>Liked By</div>
					<div>
						{data?.likes?.map((user: any) => (
							<div className='capitalize' key={user?._id}>
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
