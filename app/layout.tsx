import '@/app/globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = localFont({ src: './fonts/GeistVF.woff', variable: '--font-geist-sans', weight: '100 900' });
const geistMono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-geist-mono', weight: '100 900' });

export const metadata: Metadata = {
	title: { template: '%s | Snack Machine', absolute: 'Home | Snack Machine' },
	description: 'A Simple Vending Machine Implementation',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
