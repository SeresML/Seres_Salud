import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto y Presupuestos | Seres Salud Medicina Laboral',
  description: 'Póngase en contacto con nuestro departamento de Medicina Laboral en Avellaneda. Teléfonos +54 9 11 6604-8055 / 4222-1597.',
};

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Full-Width Banner Header matching Infraestructura */}
      <div className="relative w-full h-44 sm:h-56 bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-wide drop-shadow-md text-center px-4">
          Contacto
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12">
        
        {/* Intro text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
            Canales de Atención Directa y Cotizaciones
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Estamos a su disposición para responder consultas sobre contrataciones de Medicina Laboral, Turnos Preocupacionales y servicio de Médicos en Planta.
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-card flex items-start gap-4 border-t-4 border-t-[#0A5229]">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-gray-900">Líneas Telefónicas</h3>
              <div className="text-sm font-semibold text-[#0A5229] mt-1">
                <a href="tel:+5491166048055" className="hover:underline">+54 9 11 6604-8055</a>
              </div>
              <div className="text-sm font-semibold text-[#0A5229]">
                <a href="tel:42221597" className="hover:underline">4222-1597</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-card flex items-start gap-4 border-t-4 border-t-[#0A5229]">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-gray-900">Correo Electrónico</h3>
              <a href="mailto:comercial@seressalud.com.ar" className="text-sm font-semibold text-[#0A5229] hover:underline mt-1 block break-all">
                comercial@seressalud.com.ar
              </a>
              <span className="text-xs text-gray-500">Respuesta en menos de 2 horas hábiles.</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-card flex items-start gap-4 border-t-4 border-t-[#0A5229]">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-gray-900">Centro Médico</h3>
              <span className="text-sm font-semibold text-gray-800 block mt-1">Gral. Paz 130</span>
              <span className="text-xs text-gray-500">Avellaneda, Prov. de Buenos Aires</span>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-card space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#0A5229]" />
                <h3 className="text-lg font-bold font-heading text-gray-900">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 font-sans border-t border-gray-100 pt-3">
                <div className="flex justify-between">
                  <span>Atención en Clínica:</span>
                  <span className="font-semibold text-gray-900">Lunes a Viernes 07:00 a 16:00 hs</span>
                </div>
                <div className="flex justify-between">
                  <span>Guardia Telefónica ART:</span>
                  <span className="font-semibold text-[#0A5229]">24 horas / 365 días</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-card space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#0A5229]" />
                <h3 className="text-lg font-bold font-heading text-gray-900">Ubicación Geográfica</h3>
              </div>
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-inner border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.397637174627!2d-58.36868512347318!3d-34.66986297293077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333423714b62f%3A0xb24d081f215d24d!2sGral.%20Paz%20130%2C%20B1870%20Avellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seres Salud Ubicacion Google Maps"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
