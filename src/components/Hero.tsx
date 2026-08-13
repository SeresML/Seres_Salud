import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5491130855551?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Medicina%20Laboral%20de%20Seres%20Salud.";

  return (
    <section className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center overflow-hidden bg-slate-100">
      
      {/* Background Image: Doctor with green ambo, white coat & stethoscope */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Medicina Laboral - Seres Salud"
          fill
          priority
          className="object-cover object-center opacity-75 contrast-105"
        />
        {/* Soft Semi-transparent White Overlay for balanced clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/25 to-white/50 backdrop-brightness-[0.98]" />
      </div>

      {/* Hero Content matching screenshot typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center space-y-4">
        
        {/* Main Title - Single Line with Dark Drop Shadow */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight whitespace-nowrap drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] max-w-full overflow-hidden text-ellipsis">
          Líderes en Medicina Laboral
        </h1>

        {/* Subtitle with Dark Drop Shadow */}
        <p className="text-xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-wide drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] pt-1">
          Más de 25 Años de Trayectoria
        </p>

        {/* Single Centered Green Button */}
        <div className="pt-6">
          <Link
            href="/contacto"
            className="bg-[#006E32] hover:bg-[#005426] text-white font-bold text-base sm:text-lg px-9 py-3 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 inline-block"
          >
            Contactar
          </Link>
        </div>

      </div>
    </section>
  );
}
