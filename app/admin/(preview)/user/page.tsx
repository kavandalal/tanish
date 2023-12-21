'use client';

import { inputStyle, labelStyle } from '@/components/constant';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import userType from '@/model/user.types';
import axios from 'axios';
import { PenIcon, Trash, User } from 'lucide-react';
import Link from 'next/link';
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
		reset,
	} = useForm();

	const [editModal, setEditModal] = useState({
		open: false,
		mode: 'add',
		id: '',
		data: { name: '', email: '', phone: '', side: '', role: '' },
	});

	const [callApi, setCallApi] = useState(false);
	const [userList, setUserList] = useState([]);

	const getUserList = useCallback(async () => {
		try {
			const packet = await axios.get('/api/user');

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			setUserList(packet?.data?.packet);
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg || 'Something went wrong' });
			return false;
		}
	}, []);

	useEffect(() => {
		getUserList();
	}, [callApi, getUserList]);

	const openModal = ({ mode = 'add', id = '', data }: { mode?: string; id?: string; data?: userType } = {}) => {
		setEditModal((prev) => ({ ...prev, open: true, mode, id }));

		if (mode === 'edit') {
			// console.log(data?.start);
			setValue('name', data?.name);
			setValue('email', data?.email);
			setValue('phone', data?.phone);
			setValue('side', data?.side);
			setValue('role', data?.role);
		}
	};

	const closeModal = ({ status = false }: { status: boolean }) => {
		if (status) {
			setCallApi((prev) => !prev);
		}
		setEditModal((prev) => ({ ...prev, open: false }));
		reset();
	};

	const formSubmit = async (data: any) => {
		const sendData = { ...data, userRef: editModal?.id };

		try {
			const packet = await axios.patch('/api/user', sendData);

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
			const packet = await axios.delete(`/api/admin/user/${id}`);

			if (!packet?.data?.ok) {
				toast({
					variant: 'destructive',
					title: packet?.data?.errors?.[0]?.message,
				});
				return false;
			}

			toast({ description: 'Successfully deleted user' });
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
				onOpenChange={(data: boolean) =>
					data ? setEditModal((prev) => ({ ...prev, open: data })) : closeModal({ status: false })
				}>
				<DialogContent
					className='md:max-w-[555px]'
					onPointerDownOutside={(e) => {
						e.preventDefault();
					}}>
					<DialogHeader>
						<DialogTitle>{editModal.mode === 'add' ? 'Add' : 'Edit'} User</DialogTitle>
					</DialogHeader>
					<form>
						<div className='grid gap-10 h-96 overflow-auto px-4 mb-4 pt-8'>
							<div className='relative'>
								<input {...register('name', { required: true })} placeholder='Full Name*' className={inputStyle} />
								<label className={labelStyle}>Name*</label>
								{errors.name && <p className='text-destructive'>Name is required.</p>}
							</div>
							<div className='relative'>
								<input
									type='email'
									{...register('email', { required: true })}
									placeholder='Email*'
									className={inputStyle}
								/>
								<label className={labelStyle}>Email*</label>
								{errors.email && <p className='text-destructive'>Email is required.</p>}
							</div>

							<div className='relative'>
								<input {...register('phone', { required: true })} placeholder='Phone' className={inputStyle} />
								<label className={labelStyle}>Phone</label>
								{errors.phone && <p className='text-destructive'>Phone is required.</p>}
							</div>

							<div className='relative'>
								<select {...register('side')} className={inputStyle}>
									<option value='bride'>Ladkiwale (Bride)</option>
									<option value='groom'>Ladkewale (Groom)</option>
								</select>
								<label className={labelStyle}>You belong from</label>
							</div>

							<div className='relative'>
								<select {...register('role')} className={inputStyle}>
									<option value='user'>User</option>
									<option value='admin'>Admin</option>
								</select>
								<label className={labelStyle}>Role</label>
							</div>
						</div>
						<DialogFooter>
							<Button type='submit' onClick={handleSubmit(formSubmit)}>
								{editModal.mode === 'add' ? 'Add' : 'Update'} User
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
			<div className='container'>
				<div className='flex justify-between my-6'>
					<h4 className='font-bold text-2xl'>Admin &gt; Users</h4>
					<div>{/* <Button >Add user</Button> */}</div>
				</div>
				<div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>Index</TableHead>
								<TableHead>Profile</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Phone</TableHead>
								<TableHead>Side</TableHead>
								<TableHead>Role</TableHead>
								<TableHead className='text-right'>Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{userList?.length > 0 &&
								userList?.map((row: userType, index) => (
									<TableRow key={row?._id}>
										<TableCell>{index + 1} </TableCell>
										<TableCell>
											<Link href={`/profile/${row?._id}` as string} target='_blank'>
												<User />
											</Link>
										</TableCell>
										<TableCell>{row?.name}</TableCell>
										<TableCell>{row?.email || ''}</TableCell>
										<TableCell>{row?.phone || ''}</TableCell>
										<TableCell className='capitalize'>{row?.side || ''}</TableCell>
										<TableCell className='capitalize'>{row?.role || ''}</TableCell>
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
															title: `Delete user ${row?.name}`,
															description: 'Once user is deleted you wont be able to get the data again',
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
