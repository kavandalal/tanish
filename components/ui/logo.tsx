import Image from 'next/image';

function Logo({}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div>
			<Image src='assets/random.svg' alt='LOGO' />
		</div>
	);
}

export { Logo };
