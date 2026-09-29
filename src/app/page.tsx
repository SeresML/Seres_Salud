import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesGrid from '@/components/ServicesGrid';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Bloque 2: Hero Section */}
      <Hero />

      {/* Bloque 3: Soluciones en Salud Ocupacional (About Us) */}
      <About />

      {/* Bloque 4: Grilla de Servicios (Bento / Cards) */}
      <ServicesGrid />

      {/* Bloque 5: Formulario de Contacto Integral */}
      <ContactForm />
    </>
  );
}
