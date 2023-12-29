'use client';

import PostExplore from '@/components/ui/post-explore';
import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import postType from '@/model/post.types';
import userType from '@/model/user.types';
import axios from 'axios';
import { CircleDot, ExternalLink, MapPin } from 'lucide-react';
import moment from 'moment-timezone';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Profile() {
	const { toast } = useToast();
	const pathname = usePathname();

	const [currentState, setCurrentState] = useState('false');

	const [profileData, setProfileData] = useState<{ data: userType | null; isOwner: boolean }>({
		data: null,
		isOwner: false,
	});
	const [postList, setPostList] = useState<[postType]>();

	useEffect(() => {
		getInitData();
	}, [pathname]);

	const getInitData = async () => {
		if (!pathname) return false;
		const list = typeof pathname === 'string' ? pathname?.split('/') : [];
		const profileID = list?.length > 0 && list?.[list.length - 1];
		if (profileID) {
			const PostList = getPostList({ profileID });
			const ProfileData = getProfileData({ profileID });
			setCurrentState('loading');
			await Promise.all([PostList, ProfileData]);
			setCurrentState('true');
		}
	};

	const getProfileData = async ({ profileID }: { profileID: string }) => {
		try {
			const packet = await axios.get(`/api/user/${profileID}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			setProfileData(packet?.data?.packet);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	const getPostList = async ({ profileID }: { profileID: string }) => {
		try {
			const packet = await axios.get(`/api/post/user/${profileID}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			setPostList(packet?.data?.packet?.list);
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
			<div className='container'>
				<div className='my-6'>
					<div className='flex justify-between'>
						<h4 className='font-bold text-2xl'>Profile</h4>
						<div>
							<Link
								href='https://portfolio-kavan.vercel.app/contact/'
								className='text-sm bg-[hsl(var(--foreground))] text-[hsl(var(--background))] p-2 py-1 rounded flex'
								target='_blank'>
								Contact Developer
								<ExternalLink className='ms-2' size={18} />
							</Link>
						</div>
					</div>
					<h5 className='font-bold text-xl'>
						{currentState === 'true' && (
							<span>
								<span className='text-blue-500 capitalize'>{profileData?.data?.name}</span>
								<span className='text-blue-500 capitalize'> ({profileData?.data?.side} Side) </span>
							</span>
						)}
					</h5>
				</div>
				<div>
					<div>Post Created</div>
					<div className='grid grid-cols-3 gap-1'>
						{postList?.map((post: postType) => (
							<Link href={`/feed/${post?._id}`} target='_self'>
								<PostExplore data={post} key={post?._id} editable={false} />
							</Link>
						))}
					</div>
				</div>
				{/* <b>Profile</b>
			<div>This page will have all the photos the user has uploaded</div>
			<div>They can edit the caption</div>
			<div>They can delete the photo</div>
			<div>They cannot edit the image</div>
			<div>They cannot edit the event Type</div> */}
			</div>
		</div>
	);
}
