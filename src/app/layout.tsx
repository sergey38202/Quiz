import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const interMedium = localFont({
  src: './fonts/Inter_18pt-Medium.ttf',
  variable: '--font-inter-medium',
  weight: '500',
});
const interRegular = localFont({
  src: './fonts/Inter_18pt-Regular.ttf',
  variable: '--font-inter-regular',
  weight: '400',
});
const interSemiBold = localFont({
  src: './fonts/Inter_18pt-SemiBold.ttf',
  variable: '--font-inter-semibold',
  weight: '600',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const fonts = `
  ${geistSans.variable} 
  ${geistMono.variable} 
  ${interMedium.variable} 
  ${interRegular.variable} 
  ${interSemiBold.variable}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        {children}
      </body>
    </html>
  );
}
