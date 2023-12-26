'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { inputStyle, labelStyle } from '@/components/constant';

export default function Home() {
	const { toast } = useToast();
	const router = useRouter();
	const searchParams = useSearchParams();

	const [currentState, setCurrentState] = useState('true');
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const [step, setStep] = useState(1);

	useEffect(() => {
		setStep(1);
	}, []);

	const toHomePage = () => {
		const redirect = searchParams.get('redirect');
		router.push(redirect || '/feed');
	};

	const toAdminHomePage = () => {
		router.push('/admin/');
	};

	const formSubmit = async (data: any, e: any) => {
		e?.preventDefault();
		setCurrentState('loading');
		console.log('form getting triggered');

		const sendData = {
			...data,
			name: data?.name
				?.split(' ')
				?.map((i: string) => `${i.charAt(0)}${i.slice(1)}`)
				.join(' '),
		};
		try {
			let packet: any;
			if (step === 1) {
				packet = await axios.post('/api/auth/register/check', sendData);
			} else {
				packet = await axios.post('/api/auth/register', sendData);
			}

			if (!packet?.data?.ok) {
				toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
				return false;
			}
			if (packet?.data?.packet?.next) {
				setStep(2);
				setValue('email', sendData.email);
				setValue('phone', sendData.phone);
				toast({ description: 'Some more basic info' });
				return;
			}

			toast({ description: 'Successfully loggedin' });
			localStorage.setItem('userID', packet?.data?.packet?.user?._id);

			toHomePage();
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
		} finally {
			setCurrentState('true');
		}
	};

	return (
		<div className=''>
			<div className='relative min-h-screen bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0'>
				<div className='p-4 sm:p-8 flex-1 '>
					<div className='max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto'>
						<div className='relative h-auto'>
							<svg className='absolute -top-20' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
								<path
									fill='#fff'
									fillOpacity='1'
									d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
							</svg>
						</div>
						<div className='px-10 pt-4 pb-8 rounded-3xl shadow-xl'>
							<div className='mx-auto text-center'>
								<h1 className='text-3xl text-gray-800 h-20'>Basic Info</h1>
							</div>

							{step === 1 && (
								<form onSubmit={handleSubmit(formSubmit)} className='grid gap-10'>
									<div className='relative'>
										<input
											type='email'
											{...register('email', {
												validate: (email) => {
													const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
													return emailRegex.test(email);
												},
											})}
											placeholder='Email'
											className={inputStyle}
										/>
										<label className={labelStyle}>Email</label>
									</div>
									{/* <div className='flex justify-center text-foreground'>
										<span>OR</span>
									</div>

									<div className='relative'>
										<input
											type='tel'
											{...register('phone', { valueAsNumber: true })}
											placeholder='Phone Number'
											className={inputStyle}
										/>
										<label className={labelStyle}>Phone Number</label>
										{errors.phone && <p className='text-estructive'>Phone Number is required.</p>}
									</div> */}

									<button
										type='submit'
										disabled={currentState === 'loading'}
										className='w-full mt-6 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
										Enter
									</button>
								</form>
							)}

							{step === 2 && (
								<form onSubmit={handleSubmit(formSubmit)} className='grid gap-10'>
									<div className='relative'>
										<input {...register('name', { required: true })} placeholder='Full Name' className={inputStyle} />
										<label className={labelStyle}>Full Name</label>
										{errors.name && <p className='text-destructive'>Name is required.</p>}
									</div>

									<div className='relative'>
										<input
											type='email'
											{...register('email', {
												required: true,
												validate: (email) => {
													const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
													return emailRegex.test(email);
												},
											})}
											placeholder='Email'
											className={inputStyle}
										/>
										<label className={labelStyle}>Email</label>
										{errors.email && <p className='text-destructive'>Email address is required.</p>}
									</div>

									<div className='relative'>
										<input
											type='tel'
											{...register('phone', { valueAsNumber: true })}
											placeholder='Phone Number'
											className={inputStyle}
										/>
										<label className={labelStyle}>Phone Number</label>
										{errors.phone && <p className='text-estructive'>Phone Number is required.</p>}
									</div>

									<div className='relative'>
										<select {...register('side')} className={inputStyle}>
											<option value='bride'>Ladkiwale (Bride)</option>
											<option value='groom'>Ladkewale (Groom)</option>
										</select>
										<label className={labelStyle}>You belong from</label>
									</div>

									{/* <input
								className='btn mx-auto w-56 text-lg hover:cursor-pointer rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '
								
								value='Enter Event'
							/> */}
									<button
										type='submit'
										disabled={currentState === 'loading'}
										className='w-full mt-6 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
										Enter
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* <Button onClick={toHomePage}>To Home Page</Button>
			<Button onClick={toAdminHomePage}>To Admin Login Page</Button> */}
			{/* <Skeleton className='w-[300px] h-[40px] rounded-full ' /> */}
		</div>
	);
}
