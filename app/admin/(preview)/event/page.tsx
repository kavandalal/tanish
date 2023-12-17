'use client';

import { inputStyle, labelStyle } from '@/components/constant';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import axios from 'axios';
import { MapPin, PenIcon, Trash } from 'lucide-react';
import moment from 'moment-timezone';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AdminDashboard() {
	const { toast } = useToast();
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
		reset,
	} = useForm();

	const [editModal, setEditModal] = useState({
		open: false,
		mode: 'add',
		id: '',
		data: { name: '', start: '', end: '', venue: '', address: '', description: '', map: '', isPrivate: false },
	});

	const [callApi, setCallApi] = useState(false);
	const [eventList, setEventList] = useState([]);

	useEffect(() => {
		getEventList();
	}, [callApi]);

	const getEventList = async () => {
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
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	};

	const openModal = ({ mode = 'add', id = '', data }: { mode?: string; id?: string; data?: eventType } = {}) => {
		setEditModal((prev) => ({ ...prev, open: true, mode, id }));
		const start = moment.tz(data?.start, 'Asia/Kolkata');
		const n = start.format('YYYY-MM-DD');

		console.log(n, typeof n);
		if (mode === 'edit') {
			// console.log(data?.start);
			setValue('name', data?.name);
			setValue('map', data?.map);
			setValue('isPrivate', data?.isPrivate);

			const startObj = moment.tz(data?.start, 'Asia/Kolkata');
			setValue('startDate', startObj.format('YYYY-MM-DD'));
			setValue('startTime', startObj.format('HH:mm'));

			const endObj = moment.tz(data?.end, 'Asia/Kolkata');
			setValue('endDate', endObj.format('YYYY-MM-DD'));
			setValue('endTime', endObj.format('HH:mm'));

			setValue('venue', data?.venue);
			setValue('address', data?.address);
			setValue('description', data?.description);
		}
	};

	const closeModal = ({ status = false }: { status?: boolean }) => {
		if (status) {
			setCallApi((prev) => !prev);
		}
		setEditModal((prev) => ({ ...prev, open: false }));
		reset();
	};

	const formSubmit = async (data: any) => {
		const sendData = {
			...data,
			start: null,
			end: null,
		};

		let start, end;
		if (sendData?.startDate) {
			start = moment.tz(`${moment(data?.startDate).format('Y-MM-DD')} ${data?.startTime}`, 'Asia/Kolkata');
			// convertToUTC(`${formatDateToYYYYMMDD(data?.startDate)}T${data?.startTime || '00:00'}`);
			// start = start && new Date(Date.parse(start));
			sendData.start = start;
		}
		if (sendData?.endDate) {
			end = moment.tz(`${moment(data?.endDate).format('Y-MM-DD')} ${data?.endTime}`, 'Asia/Kolkata');
			// end = convertToUTC(`${formatDateToYYYYMMDD(data?.endDate)}T${data?.endTime || '00:00'}`);
			// end = end && new Date(Date.parse(end));
			sendData.end = end;
		}

		try {
			let method: 'post' | 'patch';
			if (editModal?.mode === 'edit') {
				method = 'patch';
				sendData.eventRef = editModal?.id;
			} else {
				method = 'post';
			}
			// console.log('start = ', convertToUTC(`${formatDateToYYYYMMDD(data?.startDate)}T${data?.startTime}`));
			const packet = await axios[method]('/api/admin/event', sendData);

			if (!packet?.data?.ok) {
				toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
				return false;
			}

			toast({ description: `Successfully Updated Data` });
			closeModal({ status: true });
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}
	};

	const deleteModal = async ({ id }: { id: String }) => {
		try {
			const packet = await axios.delete(`/api/admin/event/${id}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			toast({ description: 'Successfully deleted event' });
			setCallApi((prev) => !prev);
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
						<div className='grid gap-10 h-96 overflow-auto px-4 mb-4 pt-8'>
							<div className='relative'>
								<input {...register('name', { required: true })} placeholder='Event Name*' className={inputStyle} />
								<label className={labelStyle}>Event Name*</label>
								{errors.name && <p className='text-destructive'>Event Name is required.</p>}
							</div>
							<div className='relative'>
								<input
									type='textarea'
									{...register('map', { required: true })}
									placeholder='Map Location*'
									className={inputStyle}
								/>
								<label className={labelStyle}>Map Location*</label>
							</div>
							<div className='relative'>
								<span className='my-auto h-100 me-4' style={{ verticalAlign: 'super' }}>
									Hide Event
								</span>
								<input
									type='checkbox'
									{...register('isPrivate')}
									placeholder='Hide Event'
									className={inputStyle}
									style={{ width: '20px' }}
								/>
							</div>
							<div className='grid md:grid-cols-2 gap-8 md:gap-4'>
								<div className='relative '>
									<input
										type='date'
										id='start'
										{...register('startDate', { valueAsDate: true })}
										placeholder='Start Date'
										className={inputStyle}
									/>
									<label className={labelStyle}>Start Date</label>
								</div>
								<div className='relative'>
									<input type='time' {...register('startTime')} placeholder='Start Time' className={inputStyle} />
									<label className={labelStyle}>Start Time</label>
								</div>
							</div>
							<div className='grid md:grid-cols-2 gap-8 md:gap-4'>
								<div className='relative '>
									<input
										type='date'
										{...register('endDate', { valueAsDate: true })}
										placeholder='End Date'
										className={inputStyle}
									/>
									<label className={labelStyle}>End Date</label>
								</div>
								<div className='relative'>
									<input type='time' {...register('endTime')} placeholder='End Date' className={inputStyle} />
									<label className={labelStyle}>End Time</label>
								</div>
							</div>
							<div className='relative'>
								<input {...register('venue', { required: true })} placeholder='Venue*' className={inputStyle} />
								<label className={labelStyle}>Venue*</label>
								{errors.venue && <p className='text-destructive'>Venue is required.</p>}
							</div>
							<div className='relative'>
								<input {...register('address')} placeholder='Address' className={inputStyle} />
								<label className={labelStyle}>Address</label>
							</div>
							<div className='relative'>
								<input type='textarea' {...register('description')} placeholder='Description' className={inputStyle} />
								<label className={labelStyle}>Description</label>
							</div>
						</div>
						<DialogFooter>
							<Button type='submit' onClick={handleSubmit(formSubmit)}>
								{editModal.mode === 'add' ? 'Add' : 'Update'} Event
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>

			<div className='container'>
				<div className='flex justify-between my-6'>
					<h4 className='font-bold text-2xl'>Events</h4>
					<div>
						<Button onClick={() => openModal()}>Add Event</Button>
					</div>
				</div>
				<div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>Index</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Map</TableHead>
								<TableHead>Hidden</TableHead>
								<TableHead>Venue</TableHead>
								<TableHead>Start</TableHead>
								<TableHead>End</TableHead>
								<TableHead className='text-right'>Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{eventList?.length > 0 &&
								eventList?.map((row: eventType, index) => (
									<TableRow key={row?._id}>
										<TableCell>{index + 1} </TableCell>
										<TableCell>{row?.name}</TableCell>
										<TableCell>
											<Link href={row?.map as string} target='_blank'>
												<MapPin />
											</Link>
										</TableCell>
										<TableCell>{row?.isPrivate ? 'Yes' : 'No'}</TableCell>
										<TableCell>{row?.venue}</TableCell>
										<TableCell>{moment(row?.start).format('lll')}</TableCell>
										<TableCell>{row?.end ? moment(row?.end).format('lll') : '-'}</TableCell>
										<TableCell className='text-right'>
											<div className=''>
												<Button
													variant={'outline'}
													size='sm'
													className='me-2 '
													onClick={() => openModal({ mode: 'edit', id: row?._id, data: row })}>
													<PenIcon size={16} className='text-blue-500' />
												</Button>
												<Button
													variant={'outline'}
													size='sm'
													onClick={() => {
														toast({
															title: `Delete Event ${row?.name}`,
															description: 'Once event is deleted you wont be able to get the data again',
															action: <Button onClick={() => deleteModal({ id: row?._id })}>Delete</Button>,
														});
													}}>
													<Trash size={16} className='text-destructive' />
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
