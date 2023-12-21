'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useToast } from '@/components/ui/use-toast';
import eventType from '@/model/event.types';
import axios from 'axios';
import { CircleDot, MapPin } from 'lucide-react';
import moment from 'moment-timezone';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// import dynamic from 'next/dynamic';
// const { VerticalTimeline , VerticalTimelineElement}  = dynamic(() => import('react-vertical-timeline-component'), { ssr: false });

export default function Timeline() {
	const { toast } = useToast();
	const [eventList, setEventList] = useState([]);

	useEffect(() => {
		getEventList();
	}, []);

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

	return (
		<div className='grid gap-4 '>
			{/* <b>Timeline</b>
			<div>This page will have the list of all the events with: </div>
			<ul>
				<li>start time</li>
				<li>location(which will take them to google maps)</li>
				<li>details about the event</li>
			</ul> */}
			<div className='container'>
				<div className='flex justify-between my-6'>
					<h4 className='font-bold text-2xl'>Timeline</h4>
				</div>
				<div>
					<VerticalTimeline layout='1-column-left'>
						{eventList?.length > 0 &&
							eventList?.map((event: eventType, index) => (
								<VerticalTimelineElement
									key={index}
									className='vertical-timeline-element--work text-black'
									// contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
									contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
									date={`${moment.tz(event?.start, 'Asia/Kolkata')?.format('lll')}${
										event?.end ? '-' + moment.tz(event?.end, 'Asia/Kolkata')?.format('hh:mm A') : ''
									}`}
									iconStyle={{
										background: 'rgb(33, 150, 243)',
										color: '#fff',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									icon={
										<CircleDot
											size={12}
											style={{ width: '20px', height: '20px', left: 0, top: 0, marginLeft: 0, marginTop: 0 }}
										/>
									}>
									<h3 className='vertical-timeline-element-title font-bold'>{event?.name}</h3>
									<h4 className='vertical-timeline-element-subtitle '>{event?.venue}</h4>
									{event?.address && <p>{event?.address}</p>}
									{event?.description && <p>{event?.description}</p>}
									{event?.map && (
										<p className='flex justify-start '>
											<Link
												href={event?.map as string}
												target='_blank'
												className='flex bg-blue-100 p-2 rounded-lg border border-black bottom-2 text-sm'>
												<MapPin size={20} className='me-3' /> Google Map
											</Link>
										</p>
									)}
								</VerticalTimelineElement>
							))}
					</VerticalTimeline>
				</div>
			</div>
		</div>
	);
}
