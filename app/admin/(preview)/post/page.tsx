'use client';

import { inputStyle, labelStyle } from '@/components/constant';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PostExplore from '@/components/ui/post-explore';
import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import postType from '@/model/post.types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AdminDashboard() {
	const { toast } = useToast();
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	const [editModal, setEditModal] = useState({
		open: false,
		mode: 'add',
		id: '',
		data: { name: '', email: '', phone: '', side: '', role: '' },
	});

	const [callApi, setCallApi] = useState(false);
	const [postData, setPostData] = useState({ list: [], total: 0, page: 1, limit: 15 });
	const [eventList, setEventList] = useState([]);
	const [eventRef, setEventRef] = useState('');

	const getEventList = useCallback(async () => {
		try {
			const packet = await axios.get('/api/event?isPrivate=true');

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}
			setEventList(packet?.data?.packet?.list);
			setEventRef(packet?.data?.packet?.list?.[0]?._id);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	}, []);
	const getPostList = useCallback(async ({ eventRef, page }: { eventRef: string; page?: number }) => {
		try {
			const res = await axios.get(`/api/post/${eventRef}?page=${page || 1}`);

			if (!res?.data?.ok) {
				toast({
					variant: 'destructive',
					title: res?.data?.errors?.[0]?.message,
				});
				return false;
			}
			const { packet } = res?.data;

			setPostData((prev) => ({
				...prev,
				list: !page || page === 1 ? packet?.list : [...prev.list, packet?.list],
				total: packet?.total,
				page: packet?.page,
				limit: packet?.limit,
			}));

			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	}, []);

	useEffect(() => {
		if (eventRef) {
			getPostList({ eventRef });
		}
	}, [callApi, eventRef, getPostList]);

	useEffect(() => {
		getEventList();
	}, [getEventList]);

	const openModal = useCallback(
		({ mode = 'add', id = '', data }: { mode?: string; id?: string; data?: postType } = {}) => {
			setEditModal((prev) => ({ ...prev, open: true, mode, id }));

			if (mode === 'edit') {
				// console.log(data?.start);
				setValue('caption', data?.caption);
				setValue('eventRef', data?.eventRef);
			}
		},
		[setValue]
	);

	const closeModal = ({ status = false }: { status: boolean }) => {
		if (status) {
			setCallApi((prev) => !prev);
		}
		setEditModal((prev) => ({ ...prev, open: false }));
	};

	const formSubmit = async (data: any) => {
		const sendData = data;

		try {
			const packet = await axios.patch(`/api/post/action/${editModal?.id}`, sendData);

			if (!packet?.data?.ok) {
				toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
				return false;
			}

			toast({ description: `Successfully Updated Post` });
			closeModal({ status: true });
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}
	};

	const deleteModal = useCallback(async ({ id }: { id: String }) => {
		try {
			const packet = await axios.delete(`/api/post/action/${id}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			toast({ description: 'Successfully deleted post' });
			setCallApi((prev) => !prev);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}
	}, []);

	return (
		<div className='grid gap-4 '>
			<Dialog
				open={editModal.open}
				onOpenChange={(data) =>
					data ? setEditModal((prev) => ({ ...prev, open: data })) : closeModal({ status: false })
				}>
				<DialogContent
					className='md:max-w-[555px]'
					onPointerDownOutside={(e) => {
						e.preventDefault();
					}}>
					<DialogHeader>
						<DialogTitle>{editModal.mode === 'add' ? 'Add' : 'Edit'} Event</DialogTitle>
					</DialogHeader>
					<form>
						<div className='grid gap-10 overflow-auto px-4 mb-4 pt-8'>
							<div className='relative'>
								<input {...register('caption')} placeholder='Caption' className={inputStyle} />
								<label className={labelStyle}>Caption</label>
							</div>

							<div className='relative'>
								<select {...register('eventRef')} className={inputStyle} placeholder='Photo belong to event'>
									<option value={''}>Select</option>

									{eventList?.length > 0 &&
										eventList?.map((i: eventType) => (
											<option key={i?._id as ''} value={i?._id as ''}>
												{i?.name}
											</option>
										))}
								</select>
								<label className={labelStyle}>Post belong to event</label>
							</div>
						</div>
						<DialogFooter>
							<Button type='submit' onClick={handleSubmit(formSubmit)}>
								{editModal.mode === 'add' ? 'Add' : 'Update'} Post
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>

			<div className='container'>
				<div className='flex justify-between my-6'>
					<h4 className='font-bold text-2xl'>Post</h4>
					<div>
						{/* <select name='' id='' defaultValue={eventRef}>
							{eventList?.map((event: eventType) => (
								<option value={event?._id as ''} key={event?._id as ''}>
									{event?.name}
								</option>
							))}
						</select> */}
					</div>
				</div>
				<div className='flex justify-center md:w-2/3 mx-auto'>
					<div className='grid grid-cols-3 gap-1'>
						{postData?.list?.length > 0 &&
							postData?.list?.map((post: postType) => (
								<PostExplore data={post} openModal={openModal} key={post?._id} editable deleteHandle={deleteModal} />
							))}
						{/* {postData?.list?.length > 0 &&
							postData?.list?.map((post: postType) => <PostExplore data={post} openModal={openModal} key={2} />)}
						{postData?.list?.length > 0 &&
							postData?.list?.map((post: postType) => <PostExplore data={post} openModal={openModal} key={3} />)}
						{postData?.list?.length > 0 &&
							postData?.list?.map((post: postType) => <PostExplore data={post} openModal={openModal} key={4} />)}
						{postData?.list?.length > 0 &&
							postData?.list?.map((post: postType) => <PostExplore data={post} openModal={openModal} key={5} />)} */}
					</div>
				</div>
			</div>
		</div>
	);
}
