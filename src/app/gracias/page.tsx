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
    <div className="bg-emerald-50/30 min-h-[calc(100dvh-7rem)] flex items-center justify-center py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-xl w-full bg-white rounded-3xl p-6 sm:p-10 shadow-card border-2 border-emerald-100 text-center space-y-5 border-t-8 border-t-[#0A5229]">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-[#006E32] flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>

        <div className="space-y-2.5">
          <span className="inline-block bg-emerald-50 text-[#0A5229] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            ¡Muchas Gracias!
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
            Hemos Recibido su Consulta
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto">
            Muchas gracias por comunicarse con <span className="font-semibold text-[#0A5229]">Seres Salud</span>. A la brevedad nuestro equipo se pondrá en contacto con usted.
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <a
            href="tel:+5491166048055"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0A5229] hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>+54 9 11 6604-8055</span>
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="mailto:consultas@seressalud.com.ar"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0A5229] hover:underline"
          >
            <Mail className="w-4 h-4" />
            <span>consultas@seressalud.com.ar</span>
          </a>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm px-7 py-3 rounded-xl shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
          <a
            href="https://wa.link/wsa6r5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-50 hover:bg-emerald-100 text-[#0A5229] font-bold text-sm px-7 py-3 rounded-xl border border-emerald-200 transition-all active:scale-95"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
