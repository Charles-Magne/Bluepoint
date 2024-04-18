
import type { Metadata } from 'next'; 
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import  StoreProvider  from '../store/StoreProvider';
//import logo from './favicon.ico';
import logo from './Blue Point favicon transp.ico';
import Script from 'next/script'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*FontAwesome */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
      <meta charSet="utf-8" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <Link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
      <link rel="shortcut icon" type='image/ico' href={logo.src} />
      <title>Bluepoint, votre agence de développement numérique basée au coeur de l&apos;Occitanie.</title>
      </Head>
      
      {/* Google Tag Manager */}
    {/*} <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
     {/* <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
        {/* End Google Tag Manager */}
      
      <html lang="en">
      < StoreProvider >
      <body className={inter.className}>
      {/*<!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QNHQJRD"
              height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
{/*<!-- End Google Tag Manager (noscript) -->*/}
        {children}
      </body>
      </ StoreProvider >
    </html>
    
	</>
  )
}
