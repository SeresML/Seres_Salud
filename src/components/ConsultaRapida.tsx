'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { enviarConsulta, DESTINO } from '@/lib/enviarConsulta';

// Formulario corto "Complete el Formulario" de las páginas de cada servicio
export default function ConsultaRapida({ servicio }: { servicio: string }) {
  const router = useRouter();
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
      `Consulta Seres Salud (${servicio}) — ${campo('nombre')}`,
      {
        'Contacto / Empresa': campo('nombre'),
        'Teléfono': campo('telefono'),
        email: campo('email'),
        'Servicio': servicio,
        'Consulta': campo('mensaje'),
      },
      campo('web'),
      { email: campo('email'), telefono: campo('telefono') }
    );
    setEnviando(false);
    if (ok) {
      form.reset();
      router.push('/gracias');
    } else {
      setEstado('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Contacto/Empresa"
          className="w-full border-2 border-gray-300 rounded-lg px-3.5 py-2 sm:py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-2 focus:ring-[#0A5229]/20 transition-all"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono/Móvil"
          className="w-full border-2 border-gray-300 rounded-lg px-3.5 py-2 sm:py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-2 focus:ring-[#0A5229]/20 transition-all"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full border-2 border-gray-300 rounded-lg px-3.5 py-2 sm:py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-2 focus:ring-[#0A5229]/20 transition-all"
          required
        />
      </div>
      <div>
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Consulta"
          className="w-full border-2 border-gray-300 rounded-lg px-3.5 py-2 sm:py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] focus:ring-2 focus:ring-[#0A5229]/20 transition-all resize-none"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={enviando}
          className="bg-[#006E32] hover:bg-[#005426] text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-60"
        >
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
        {estado === 'error' && (
          <p className="mt-3 text-sm text-red-600">No pudimos enviar su consulta. Intente nuevamente o escríbanos a {DESTINO}.</p>
        )}
      </div>
    </form>
  );
}
