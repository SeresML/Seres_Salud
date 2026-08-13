import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-card border border-emerald-50">
              <Image
                src="/images/about.jpg"
                alt="Soluciones en Salud Ocupacional - Seres Salud"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-white p-5 rounded-xl shadow-cardhover border border-emerald-100 max-w-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-lightmoss flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-brand-green" />
              </div>
              <div>
                <div className="text-xl font-bold font-heading text-brand-green">100% Cobertura</div>
                <div className="text-xs text-gray-600 font-sans">Protección laboral integral para su personal</div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest bg-brand-lightmoss px-3 py-1 rounded-md">
              <HeartHandshake className="w-4 h-4 text-brand-moss" />
              <span>Sobre Nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-darktext leading-tight">
              Soluciones en Salud Ocupacional
            </h2>

            <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
              Ofrecemos servicios de excelencia con una atención personalizada y un equipo de profesionales de alto nivel, quienes brindan una referencia de calidad en cada prestación médica corporativa.
            </p>

            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              Nuestro enfoque estratégico está diseñado para asegurar que las empresas asociadas se encuentren totalmente protegidas frente a enfermedades profesionales o contingencias laborales accidentales. Nos comprometemos a brindar un entorno seguro y respaldado legalmente para su gestión de Recursos Humanos.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0" />
                <span>Atención médica personalizada</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0" />
                <span>Resultados rápidos en 24/48hs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0" />
                <span>Cumplimiento Ley 19.587 y SRT</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0" />
                <span>Unidades Móviles en planta</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/infraestructura"
                className="inline-flex items-center gap-2 text-brand-green font-bold text-base hover:text-brand-darkgreen group"
              >
                <span>Conozca nuestras instalaciones y clínica en Avellaneda</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
