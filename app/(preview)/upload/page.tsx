'use client';

import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { defaultError, inputStyle, labelStyle } from '@/components/constant';
import event from '@/model/event.types';
import { blobToPreview, previewToBlob } from '@/lib/client-helper';
import { TImageObj, imageObj } from '@/components/image-upload/types.image';
import { Crop, MoreVertical, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CropDialog from '@/components/image-upload/crop-dialog';
import Image from 'next/image';
import { Popover } from '@/components/ui/popover';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import DropZone from '@/components/image-upload/drop-zone';
import useUploadImageToS3 from '@/lib/hooks/useUploadImg';
import { Progress } from '@/components/ui/progress';

const filter = {
	multiple: true,
	size: 5,
	aspect: 0,
	accept: ['png', 'jpeg'],
};

export default function Upload() {
	const { toast } = useToast();
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
		reset,
	} = useForm();

	const { uploadImageToS3 } = useUploadImageToS3();

	const [currentState, setCurrentState] = useState('true');
	const [eventRef, setEventRef] = useState('');
	const [eventList, setEventList] = useState([]);
	const [imagesHere, setImageHere] = useState<TImageObj[]>([] as TImageObj[]);
	const [editImg, setEditImg] = useState<TImageObj>({
		index: undefined,
		display: '',
		blob: new Blob(),
		name: '',
		size: 0,
		type: '',
	});
	const [progress, setProgress] = useState ( 0)

	const getEventList = useCallback(async () => {
		try {
			setCurrentState('loading');

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
		} finally {
			setCurrentState('true');
		}
	}, []);

	useEffect(() => {
		getEventList();
	}, [getEventList]);

	const formSubmit = async (data: any) => {
		setCurrentState('loading');

		let errMsg = '';
		if (!data.source) errMsg = 'Image is requried';
		if (!data.caption) errMsg = 'Caption is requried';
		if (!data.eventRef) errMsg = 'Event is requried';

		if (errMsg) {
			toast({ variant: 'destructive', title: errMsg });
			return false;
		}

		toast({ description: errMsg, variant: 'destructive' });
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
		} finally {
			setCurrentState('true');
		}
	};

	const onCloseImage = useCallback((dataArr: TImageObj[]) => {
		if (!dataArr) return false;

		if (filter.multiple) {
			setImageHere((prev) => [...prev, ...dataArr]);
		} else {
			setImageHere(dataArr);
		}

		if (!filter.multiple && dataArr.length > 0) {
			setEditImg({ index: 0, ...dataArr[0] });
		}
		return true;
	}, []);

	const editHandle = async (index: number = 0) => {
		const editThis = imagesHere[index];
		if (editThis?.blob) {
			setEditImg({ ...editThis, index });
		} else if (editThis?.display) {
			const blob = await previewToBlob(editThis.display);
			if (!blob) return;
			setEditImg({ ...editThis, index, blob, size: blob.size });
		}
	};

	const closeSingleEdit = useCallback(
		async (blob: Blob, name: string) => {
			const changeIndex = editImg.index || 0;
			if (changeIndex < 0) return;

			if (!blob) {
				setEditImg({ index: undefined, ...imageObj });
				return;
			}
			const preview = await blobToPreview(blob);
			const updateFields = { display: preview, blob, size: blob.size, name };

			setImageHere((prev) =>
				prev.map((i, index) => {
					if (index !== changeIndex) {
						return i;
					}
					return { ...i, ...updateFields } as TImageObj;
				})
			);

			setEditImg({ index: undefined, ...imageObj });
		},
		[editImg.index]
	);

	const clearImage = (index?: number) => {
		if (index !== undefined && index > -1) {
			setImageHere((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
			return true;
		}

		setImageHere([]);
		return true;
	};

	const executeUpload = async () => {
		try {
			if( !getValues('caption') ||  !getValues('eventRef')) { 
				toast({ variant: 'destructive', title: 'Caption and event are required' });
				return 
			}
			const totalLength = imagesHere.length
			for (let [ index, img] of Object.entries(imagesHere)) {
				const imgSrc = await getPresigned(img);
				await formSubmit({ source: imgSrc, caption: getValues('caption'), eventRef: getValues('eventRef') });
				setProgress( ( (Number(index) + 1) / totalLength ) * 100 )
			}
			reset();
			clearImage();
		} catch (err: any) {
			toast({ variant: 'destructive', title: err?.message || defaultError });
		} finally {
			setProgress( 0 )
			
		}
	};

	const getPresigned = async (img: TImageObj): Promise<string> => {
		const imgData = img;
		const imgSrc: string = await uploadImageToS3({
			url: '/api/post/action/presigned-url',
			sendData: {
				currentFileName: imgData?.name?.split('/')?.pop() || '',
				ext: imgData?.type.split('/')[1],
				type: 'post',
			},
			body: imgData?.blob,
			headers: { 'Content-Type': imgData.blob.type },
		});

		return imgSrc;

		// const sendData = { ext: 'png', type: 'post' };
		// try {
		// 	const packet = await axios.post('/api/post/action/presigned-url', sendData);

		// 	if (!packet?.data?.ok) {
		// 		toast({ variant: 'destructive', title: packet?.data?.errors?.[0]?.message });
		// 		return false;
		// 	}

		// 	// 	"packet": {
		// 	//     "s3Data": {
		// 	//         "url": "https://tanish-app.s3.ap-south-1.amazonaws.com/post/qZwaUFdLI2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYPKAVF2HRZE4JQPX%2F20231228%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231228T054259Z&X-Amz-Expires=300&X-Amz-Signature=e93174aff69510e9c7570cbac9e9e459bd4b944054776bf8746d17a6ccd275ab&X-Amz-SignedHeaders=host&x-id=PutObject",
		// 	//         "source": "post/qZwaUFdLI2.png"
		// 	//     }
		// 	// }

		// 	return packet?.data?.s3Data;
		// } catch (err: any) {
		// 	const errMsg = err?.response?.data?.errors?.[0]?.message;
		// 	console.error(errMsg);
		// 	toast({ variant: 'destructive', title: errMsg });
		// 	return false;
		// }
	};

	return (
		<div className='grid gap-4 '>
			{/* <b>Upload</b>
			<div>This will be the page where the user will be redirected once they scan the qrcode</div>
			<div>They have to upload photo in 16/9 or square aspect ratio</div>
			<div>They can crop, rotate the image </div>
			<div>They can add caption for the photo</div>
			<div>They have to select from which event the photo is.</div> */}
			<div className='container'>
				<div className='flex justify-between my-6'>
					<h4 className='font-bold text-2xl'>Upload</h4>
				</div>
				<form className='grid gap-10'>
					<div className='relative'>
						{/* <input {...register('source', { required: true })} placeholder='Source' className={inputStyle} />
						<label className={labelStyle}>Source</label>
						{errors.name && <p className='text-destructive'>Source is required.</p>} */}
						<DropZone
							multiple={filter.multiple}
							onClose={onCloseImage}
							propSize={filter.size}
							acceptType={filter.accept as []}
							propAspect={filter.aspect}
						/>

						<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
							{imagesHere.length !== 0 &&
								imagesHere.map((item, index) => (
									<div key={index} className='mb-3 border bg-secondary rounded-xl shadow-md relative overflow-hidden'>
										<div className='p-3'>
											<div className='pe-8'>
												<b>Name</b> {item.name}
											</div>
											<div>
												<b>Type</b> {item.type}
											</div>
											<div>
												<b>Size</b> {item.size} ({(item.size / 1024).toFixed(1)} kb)
											</div>
										</div>
										<Image src={item.display} alt={item.name} width={80} height={50} className='w-full' />

										<Popover>
											<PopoverTrigger className='absolute top-2 right-2 p-2 shadow-md bg-[hsl(var(--background))] rounded-lg'>
												<MoreVertical />
											</PopoverTrigger>
											<PopoverContent className='duration-500 animate-in text-[hsl(var(--foreground))]'>
												<div className='flex flex-col'>
													<Button
														variant='outline'
														type='button'
														disabled={currentState === 'loading'}
														onClick={() => editHandle(index)}
														className='flex justify-between w-[110px] bg-[hsl(var(--background))]'>
														<Crop color='blue' />
														<span className=''>Crop </span>
													</Button>

													<Button
														disabled={currentState === 'loading'}
														variant={'outline'}
														type='button'
														onClick={() => clearImage(index)}
														className='flex justify-between w-[110px] bg-[hsl(var(--background))]'>
														<Trash2 color='red' />
														<span className=''>Delete </span>
													</Button>
												</div>
											</PopoverContent>
										</Popover>
									</div>
								))}
						</div>
					</div>

					<div className='relative'>
						<input
							{...register('caption', { required: true })}
							type='textarea'
							placeholder='Caption'
							className={inputStyle}
						/>
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
					<div className='flex justify-center items-center flex-col'>
						{ progress!== 0 &&   <Progress value={progress}  className='mb-2'/>  } 
						<button
							disabled={currentState === 'loading'}
							type='button'
							onClick={executeUpload}
							className='w-56  py-2 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none'>
							Upload
						</button>
					</div>
				</form>
			</div>

			{editImg.index !== null && typeof editImg.index === 'number' && editImg?.index > -1 && (
				<CropDialog
					previousImgSrc={editImg?.blob}
					prevName={editImg.name?.split('.')[0]}
					autoOpen
					propSize={filter.size}
					propAspect={Number(filter.aspect)}
					onClose={closeSingleEdit}
				/>
			)}
		</div>
	);
}
