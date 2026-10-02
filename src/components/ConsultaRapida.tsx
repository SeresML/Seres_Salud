'use client';

import React, { useState } from 'react';
import { enviarConsulta, COPIA } from '@/lib/enviarConsulta';

// Formulario corto "Envíe su Consulta" de las páginas de cada servicio
export default function ConsultaRapida({ servicio }: { servicio: string }) {
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
      campo('web')
    );
    setEnviando(false);
    setEstado(ok ? 'ok' : 'error');
    if (ok) form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Contacto/Empresa"
          className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229]"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229]"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229]"
          required
        />
      </div>
      <div>
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Consulta"
          className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A5229] resize-none"
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
        {estado === 'ok' && (
          <p className="mt-3 text-sm text-[#0A5229]">¡Gracias! Recibimos su consulta y lo contactaremos a la brevedad.</p>
        )}
        {estado === 'error' && (
          <p className="mt-3 text-sm text-red-600">No pudimos enviar su consulta. Intente nuevamente o escríbanos a {COPIA}.</p>
        )}
      </div>
    </form>
  );
}
