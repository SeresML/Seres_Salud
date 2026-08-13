import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
