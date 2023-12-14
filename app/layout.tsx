import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'Tanish',
		template: '%s | Tanish',
	},
	description: 'Website made for marriage of Tanay Dalal and Isha Patil, Developer - Kavan Dalal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Toaster />

					{children}
					{/* <Toaster /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
