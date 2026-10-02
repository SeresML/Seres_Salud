'use client';

import React, { useState } from 'react';
import { enviarConsulta, DESTINO } from '@/lib/enviarConsulta';

export default function ContactForm() {
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<'ok' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    const campo = (nombre: string) => String(datos.get(nombre) ?? '').trim();

    setEnviando(true);
    setEstado(null);

    const ok = await enviarConsulta(
      `Consulta Seres Salud — ${campo('nombre')}`,
      {
        'Contacto / Empresa': campo('nombre'),
        'Teléfono': campo('telefono'),
        'E-mail': campo('email'),
        'Consulta': campo('mensaje'),
      },
      campo('web'),
      { email: campo('email'), telefono: campo('telefono') }
    );

    setEnviando(false);
    setEstado(ok ? 'ok' : 'error');
    if (ok) form.reset();
  };

  return (
    <div className="bg-[#0A5229] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl border border-emerald-950/20 w-full flex items-center justify-center">
      {/* Background Dot Pattern matching screenshot */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:18px_18px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full">
        {/* White Card matching screenshot */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-gray-800 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6">
            Envíe su Consulta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Contacto/Empresa"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-1 focus:ring-[#0A5229] transition-all"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-1 focus:ring-[#0A5229] transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-1 focus:ring-[#0A5229] transition-all"
                required
              />
            </div>

            <div>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Consulta"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-1 focus:ring-[#0A5229] transition-all resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={enviando}
                className="bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm px-7 py-2.5 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-60"
              >
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
            </div>

            {estado === 'ok' && (
              <p className="mt-3 text-sm font-semibold text-[#0A5229]">
                ¡Gracias! Recibimos su consulta y lo contactaremos a la brevedad.
              </p>
            )}
            {estado === 'error' && (
              <p className="mt-3 text-sm font-semibold text-red-600">
                No pudimos enviar su consulta. Intente nuevamente o escríbanos a {DESTINO}.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
