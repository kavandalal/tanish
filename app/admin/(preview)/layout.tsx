import Footer, { routeType } from '@/components/footer';
import Header from '@/components/header';
// import { CalendarCheck2, Scroll, User2 } from 'lucide-react';

export const metadata = {
	title: { default: 'Admin', template: 'Admin - %s | Tanish' },
	description: 'This page is only for admin and moderators, Developer - Kavan Dalal',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const routes: routeType[] = [
		{
			slug: 'post',
			url: '/admin/post',
			// icon: Scroll,
			name: 'Post',
		},
		{
			slug: 'user',
			url: '/admin/user',
			// icon: User2,
			name: 'User',
		},
		{
			slug: 'event',
			url: '/admin/event',
			// icon: CalendarCheck2,
			name: 'Events',
		},
	];
	return (
		<main className='flex justify-center items-center h-[100vh]'>
			<div className='grid h-full w-full' style={{ gridTemplateRows: '60px auto 60px' }}>
				<Header />
				<div className='flex-grow'>{children}</div>
				<Footer routes={routes} />
			</div>
		</main>
	);
}
