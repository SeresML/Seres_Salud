import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ArrowLeft, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '¡Gracias por su Consulta! | Seres Salud',
  description: 'Hemos recibido su mensaje correctamente. Nuestro equipo de Medicina Laboral se pondrá en contacto a la brevedad.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasPage() {
  return (
    <div className="bg-white min-h-[75vh] flex flex-col justify-between pb-20 font-sans">
      {/* Full-Width Banner Header */}
      <div className="relative w-full h-36 sm:h-48 bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <h1 className="relative z-10 text-3xl sm:text-5xl font-bold font-heading text-white tracking-wide drop-shadow-md text-center px-4">
          ¡Muchas Gracias!
        </h1>
      </div>

      {/* Main Confirmation Card */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border-2 border-emerald-100 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-[#006E32] flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-11 h-11" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
              Hemos Recibido su Consulta
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
              Muchas gracias por comunicarse con <span className="font-semibold text-[#0A5229]">Seres Salud</span>. A la brevedad nuestro equipo comercial y médico se pondrá en contacto con usted.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <a
              href="tel:+5491166048055"
              className="inline-flex items-center gap-2 font-semibold text-[#0A5229] hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>+54 9 11 6604-8055</span>
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="mailto:consultas@seressalud.com.ar"
              className="inline-flex items-center gap-2 font-semibold text-[#0A5229] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>consultas@seressalud.com.ar</span>
            </a>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Link>
            <a
              href="https://wa.link/wsa6r5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-50 hover:bg-emerald-100 text-[#0A5229] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl border border-emerald-200 transition-all active:scale-95"
            >
              CONTACTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
