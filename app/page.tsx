'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

const inputStyle =
	'peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600';
const labelStyle =
	'absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-purple-600 peer-focus:text-sm';

export default function Home() {
	const { toast } = useToast();

	const router = useRouter();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const toHomePage = () => {
		router.push('/feed');
	};
	const toAdminHomePage = () => {
		router.push('/admin/');
	};

	const formSubmit = async (data: any) => {
		console.log(data);
		const sendData = {
			...data,
			name: data?.name
				?.split(' ')
				?.map((i: string) => `${i.charAt(0)}${i.slice(1)}`)
				.join(' '),
		};
		try {
			const packet: any = await axios.post('/api/auth/register', sendData);

			console.log('---', packet?.data);
			if (!packet?.data?.ok) {
				toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
				return false;
			}

			toast({ description: 'Successfully updated data' });
			toHomePage();
			return true;
		} catch (err: any) {
			const errMsg = err?.response?.data?.errors?.[0]?.message;
			console.error(errMsg);
			toast({ variant: 'destructive', title: errMsg });
			return false;
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
									fill-opacity='1'
									d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
							</svg>
						</div>
						<div className='px-10 pt-4 pb-8 rounded-3xl shadow-xl'>
							<div className='mx-auto text-center'>
								<h1 className='text-3xl text-gray-800 h-20'>Basic Info</h1>
							</div>

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
									className='w-full mt-6 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
									Enter
								</button>
							</form>
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
