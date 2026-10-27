'use client';

import React from 'react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.link/wsa6r5";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      {/* Halo de fondo que titila sutilmente cada ~2.5 segundos */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-halo pointer-events-none"
        aria-hidden="true"
      />

      {/* Botón circular principal */}
      <span className="relative flex items-center justify-center w-full h-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-colors duration-300">
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.068 0-12.8 5.732-12.8 12.8 0 2.257.59 4.46 1.71 6.404L3.2 28.8l6.565-1.722a12.748 12.748 0 0 0 6.235 1.622h.005c7.066 0 12.795-5.732 12.795-12.8 0-3.42-1.332-6.636-3.75-9.054A12.712 12.712 0 0 0 16.004 3.2zm0 23.338h-.004a10.59 10.59 0 0 1-5.398-1.478l-.387-.23-4.016 1.053 1.072-3.914-.252-.401a10.562 10.562 0 0 1-1.628-5.667c0-5.868 4.774-10.642 10.647-10.642 2.843 0 5.516 1.108 7.526 3.119 2.01 2.011 3.116 4.685 3.115 7.529 0 5.869-4.774 10.631-10.675 10.631zm5.838-7.973c-.32-.16-1.894-.935-2.187-1.042-.293-.107-.507-.16-.72.16-.214.32-.827 1.042-1.014 1.255-.186.214-.373.24-.693.08-.32-.16-1.351-.498-2.574-1.588-.951-.848-1.594-1.897-1.78-2.217-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.735-.987-2.376-.26-.624-.524-.539-.72-.549l-.613-.01c-.214 0-.56.08-.854.4-.293.32-1.12 1.095-1.12 2.67s1.147 3.097 1.307 3.311c.16.214 2.257 3.447 5.469 4.833.764.33 1.36.527 1.825.675.767.244 1.465.209 2.017.127.615-.092 1.894-.774 2.161-1.522.267-.747.267-1.388.187-1.522-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </span>
    </a>
  );
}
