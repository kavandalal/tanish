'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { CalendarCheck2, CalendarDays, Globe, Home, Scroll, Upload, User2, Users2 } from 'lucide-react';

export interface routeType {
	slug: IconName;
	url: string;
	name?: string;
	icon?: React.ComponentType<any>;
}

const Footer = ({ routes }: { routes: routeType[] }) => {
	return (
		<nav
			className='w-full justify-between items-center grid h-full sticky bottom-0 z-50'
			style={{
				gridTemplateColumns: `repeat(${routes.length} , 1fr)`,
				boxShadow: '0 10px 16px hsl(var(--foreground))',
			}}>
			{routes.map((i) => (
				<NavItem item={i} key={i.slug} />
			))}
		</nav>
	);
};
export default Footer;

export const NavItem = ({ item }: { item: routeType }) => {
	const iconSize = '25px';

	const pathname = usePathname();
	const { slug, url, name } = item;

	const isActive = pathname?.includes(url);
	const Icon = getIcon({ name: slug });

	return (
		<Link
			// onClick={onClick}
			href={url}
			className={clsx(
				'h-full w-full rounded-none cursor-pointer bg-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] ',
				{
					'text-[hsl(var(--muted-foreground))] ': !isActive,
					'text-blue-800': isActive,
				}
			)}>
			<div className='h-full w-full flex justify-center items-center'>
				<span className='hidden sr-only'>{item.name}</span>
				{Icon && <Icon height={iconSize} width={iconSize} />}
			</div>
		</Link>
	);
};

type IconName = 'feed' | 'explore' | 'upload' | 'timeline' | 'profile' | 'post' | 'user' | 'event';

const getIcon = ({ name }: { name: IconName }): React.ComponentType<any> => {
	const allIcons: Record<IconName, React.ComponentType<any>> = {
		feed: Home,
		explore: Globe,
		upload: Upload,
		timeline: CalendarDays,
		profile: User2,
		post: Scroll,
		user: Users2,
		event: CalendarCheck2,
	};
	return allIcons[name];
};
