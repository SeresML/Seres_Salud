import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Etiquetas de Google calcadas del seressalud.com.ar de WordPress (Site Kit):
// etiqueta de Google (GA4 G-Z2YPRCWN7K) + Google Ads + Tag Manager
const ETIQUETA_GOOGLE = 'GT-NNZGB8W5';
const GOOGLE_ADS = 'AW-1012107997';
const GTM = 'GTM-MNTXZS9';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seres Salud - Medicina Laboral y Salud Ocupacional',
  description:
    'Líderes en Medicina Laboral con más de 25 años de trayectoria. Exámenes preocupacionales, servicio médico en planta, unidades móviles, higiene y seguridad, control de ausentismo y atención por ART.',
  keywords: [
    'Medicina Laboral',
    'Salud Ocupacional',
    'Exámenes Preocupacionales',
    'Médico en Planta',
    'Control de Ausentismo',
    'ART',
    'Higiene y Seguridad',
    'Avellaneda',
    'Seres Salud',
  ],
  authors: [{ name: 'Seres Salud S.A.' }],
  openGraph: {
    title: 'Seres Salud - Medicina del Trabajo y Salud Ocupacional',
    description: 'Más de 25 años cuidando la salud de las empresas y sus trabajadores en Argentina.',
    url: 'https://seressalud.com.ar',
    siteName: 'Seres Salud',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630, alt: 'Seres Salud Medicina Laboral' }],
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-brand-lightbg font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ETIQUETA_GOOGLE}`} strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["seressalud.com.ar"]});
gtag("js", new Date());
gtag("config", "${ETIQUETA_GOOGLE}");
gtag("config", "${GOOGLE_ADS}");`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM}');`}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
