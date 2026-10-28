import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

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
    <div className="bg-emerald-50/40 min-h-[calc(100dvh-8rem)] flex items-center justify-center py-4 sm:py-6 px-4 sm:px-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl border-2 border-emerald-100 text-center space-y-4 sm:space-y-5 border-t-8 border-t-[#0A5229]">
        {/* Success Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-[#006E32] flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Text Details */}
        <div className="space-y-2 sm:space-y-2.5">
          <span className="inline-block bg-emerald-100/70 text-[#0A5229] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            ¡Muchas Gracias!
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-gray-900 leading-tight">
            Hemos Recibido su Consulta
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto">
            Muchas gracias por comunicarse con <span className="font-bold text-[#0A5229]">Seres Salud</span>. A la brevedad nuestro equipo se pondrá en contacto con usted.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
