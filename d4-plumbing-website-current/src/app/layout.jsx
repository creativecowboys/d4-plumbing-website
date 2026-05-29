import { Montserrat, Open_Sans } from 'next/font/google';
import '@/index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://d4plumbing.com'),
  title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
  description: 'Family-owned plumbing company with 35+ years of experience serving Temple, Villa Rica, Carrollton, Douglasville & West Metro Atlanta. Free estimates. Call (770) 562-0406.',
  keywords: 'plumber West Metro Atlanta, plumbing Temple GA, D4 Plumbing, DeFoor Plumbing, water heater installation, drain cleaning, plumbing repair',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'D4 Plumbing',
    title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
    description: 'Family-owned plumbing company with 35+ years of experience. Serving Temple, Villa Rica, Carrollton & West Metro Atlanta. Free estimates.',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
    description: 'Family-owned plumbing company with 35+ years of experience. Serving West Metro Atlanta. Free estimates. Call (770) 562-0406.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/d4-favicon.png" />
        <link rel="apple-touch-icon" href="/d4-favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased min-h-screen bg-[#F7F7F7] pt-9">
        <ClientProviders>
          <Header />
          <main className="pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
        </ClientProviders>
        
        {/* LeadConnector Chat Widget */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="699cbb6811d187620cb424ce"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
