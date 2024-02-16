
import type { Metadata } from 'next'; 
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import  StoreProvider  from '../store/StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bluepoint',
  description: 'Nous créons bien plus que des sites ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
	  <>
      <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <Link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
      </Head>
      
      <html lang="en">
      < StoreProvider >
      <body className={inter.className}>
        {children}
      </body>
      </ StoreProvider >
    </html>
    
	</>
  )
}
