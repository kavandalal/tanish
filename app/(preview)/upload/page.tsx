'use client';

import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { inputStyle, labelStyle } from '@/components/constant';
import event from '@/model/event.types';

export default function Upload() {
	const { toast } = useToast();
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	const [eventRef, setEventRef] = useState('');
	const [eventList, setEventList] = useState([]);

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
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	const formSubmit = async (data: any) => {
		const sendData = data;
		try {
			const packet = await axios.post('/api/post', sendData);

			if (!packet?.data?.ok) {
				toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
				return false;
			}

			toast({ description: 'Successfully uploaded the photo' });
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}
	};

	return (
		<div className='grid gap-4 '>
			<b>Upload</b>
			<div>This will be the page where the user will be redirected once they scan the qrcode</div>
			<div>They have to upload photo in 16/9 or square aspect ratio</div>
			<div>They can crop, rotate the image </div>
			<div>They can add caption for the photo</div>
			<div>They have to select from which event the photo is.</div>
			<div className='container'>
				<form onSubmit={handleSubmit(formSubmit)} className='grid gap-10'>
					<div className='relative'>
						<input {...register('source', { required: true })} placeholder='Source' className={inputStyle} />
						<label className={labelStyle}>Source</label>
						{errors.name && <p className='text-destructive'>Source is required.</p>}
					</div>

					<div className='relative'>
						<input {...register('caption', { required: true })} placeholder='Caption' className={inputStyle} />
						<label className={labelStyle}>Caption</label>
						{errors.name && <p className='text-destructive'>Caption is required.</p>}
					</div>

					<div className='relative'>
						<select {...register('eventRef')} className={inputStyle} placeholder='Photo belong to event'>
							<option value={''}>Select</option>

							{eventList?.length > 0 &&
								eventList?.map((i: event) => (
									<option key={i?._id as ''} value={i?._id as ''}>
										{i?.name}
									</option>
								))}
						</select>
						<label className={labelStyle}>Photo belong to event</label>
					</div>

					{/* <input
								className='btn mx-auto w-56 text-lg hover:cursor-pointer rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '
								
								value='Enter Event'
							/> */}
					<div className='flex justify-center'>
						<button
							type='submit'
							className='w-56  py-2 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
