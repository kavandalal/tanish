import Footer, { NavItem, routeType } from '@/components/footer';
import Header from '@/components/header';

// export const metadata = {
// 	title: 'Tanish',
// };

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const routes: routeType[] = [
		{
			slug: 'feed',
			url: '/feed',
			// icon: Home,
			name: 'Feed',
		},
		{
			slug: 'explore',
			url: '/explore',
			// icon: Globe,
			name: 'Explore',
		},
		{
			slug: 'upload',
			url: '/upload',
			// icon: Upload,
			name: 'upload',
		},
		{
			slug: 'timeline',
			url: '/timeline',
			// icon: CalendarDays,
			name: 'Timeline',
		},
		{
			slug: 'profile',
			url: '/profile',
			// icon: User2,
			name: 'profile',
		},
	];
	return (
		<main className='flex justify-center items-center h-[100vh]'>
			<div className='grid h-full w-full' style={{ gridTemplateRows: '60px auto 60px' }}>
				<Header />
				<div className='flex-grow'>{children}</div>
				<Footer routes={routes} />
				{/* <div>
					{routes.map((i) => (
						<NavItem item={i} key={i.slug} />
					))}
				</div> */}
			</div>
		</main>
	);
}
