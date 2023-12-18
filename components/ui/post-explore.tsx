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

type PostExplore = {
	data: postType;
	editable: boolean;
	openModal: ({ mode, id, data }: { mode?: string; id?: string; data?: postType }) => void;
	deleteHandle: ({ id }: { id: string }) => void;
};

function PostExplore({ data, openModal, editable, deleteHandle }: PostExplore) {
	const { toast } = useToast();

	const [popup, setPopup] = useState({ open: false });

	const togglePopup = (status: boolean) => {
		setPopup((prev) => ({ ...prev, open: status }));
	};

	return (
		<div className='group aspect-square relative overflow-hidden bg-slate-100 dark:bg-slate-700 rounded-md'>
			<Image width={200} height={200} className='object-contain w-full h-full' src={data?.source} alt='' />
			<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
				<div className='bg-black bg-opacity-50 p-4 rounded-md w-full h-full flex justify-center items-center'>
					<p className='text-white cursor-pointer'>{data?.caption}</p>
				</div>
			</div>
			{editable && (
				<div className='absolute z-20 top-4 right-4 '>
					{/* <Button className='bg-white p-2'>h</Button> */}
					<DropdownMenu open={popup?.open} onOpenChange={(value) => togglePopup(value)}>
						<DropdownMenuTrigger>
							<Button variant='outline' className='w-8 px-1 h-8'>
								<MoreVertical />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-12'>
							<DropdownMenuGroup>
								<DropdownMenuItem
									className='ps-4'
									onClick={() => {
										openModal({ mode: 'edit', id: data?._id, data });
									}}>
									<PenIcon size={16} className='text-blue-500 me-3' />
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem
									className='ps-4'
									onClick={() => {
										// deleteHandle({ id: data?._id });
										toast({
											title: `Delete Image`,
											description: 'Once image is deleted you wont be able reverse',
											action: <Button onClick={() => deleteHandle({ id: data?._id })}>Delete</Button>,
										});
									}}>
									<Trash size={16} className='text-destructive me-3' />
									Delete
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			)}
		</div>
	);
}

export default PostExplore;
