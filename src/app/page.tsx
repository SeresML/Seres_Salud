import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesGrid from '@/components/ServicesGrid';
import InfrastructureBlock from '@/components/InfrastructureBlock';
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

      {/* Bloque 5: Infraestructura / Ubicación (Avellaneda) */}
      <InfrastructureBlock />

      {/* Bloque 6: Formulario de Contacto Integral */}
      <ContactForm />
    </>
  );
}
