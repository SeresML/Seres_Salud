import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ArrowLeft, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '¡Muchas Gracias por su Consulta! | Seres Salud',
  description: 'Hemos recibido su mensaje correctamente. Nuestro equipo de Medicina Laboral se pondrá en contacto a la brevedad.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasPage() {
  return (
    <div className="bg-emerald-50/40 min-h-[calc(100dvh-7rem)] flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-14 shadow-xl border-2 border-emerald-100 text-center space-y-7 border-t-8 border-t-[#0A5229]">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 text-[#006E32] flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14" />
        </div>

        <div className="space-y-4">
          <span className="inline-block bg-emerald-100/70 text-[#0A5229] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            ¡Muchas Gracias!
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-gray-900 leading-tight">
            Hemos Recibido su Consulta
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            Muchas gracias por comunicarse con <span className="font-bold text-[#0A5229]">Seres Salud</span>. A la brevedad nuestro equipo se pondrá en contacto con usted.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600">
          <a
            href="tel:+5491166048055"
            className="inline-flex items-center gap-2 font-semibold text-[#0A5229] hover:underline"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-moss" />
            <span>+54 9 11 6604-8055</span>
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="mailto:consultas@seressalud.com.ar"
            className="inline-flex items-center gap-2 font-semibold text-[#0A5229] hover:underline"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-moss" />
            <span>consultas@seressalud.com.ar</span>
          </a>
        </div>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-9 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
