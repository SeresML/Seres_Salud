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

      {/* Bloque 5: Formulario de Contacto */}
      <section className="py-16 sm:py-20 bg-emerald-50/40" id="contacto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
