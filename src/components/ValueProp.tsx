'use client';

import { ShieldCheck, UserCheck, Clock, Award, Building, HeartHandshake } from 'lucide-react';

export default function ValueProp() {
  return (
    <section id="nosotros" className="py-24 bg-brand-lightbg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Commitment */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-green font-semibold uppercase tracking-wider text-sm bg-emerald-100 text-brand-darkgreen px-4 py-1.5 rounded-full inline-block">
              Soluciones en Salud Ocupacional
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Excelencia Médica con Atención Personalizada
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Ofrecemos servicios de excelencia con una atención personalizada y un equipo de profesionales de alto nivel, quienes brindan una referencia de calidad en cada prestación.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nuestro enfoque está en asegurar que las empresas asociadas se encuentren protegidas de manera integral frente a enfermedades o situaciones desafortunadas, como accidentes laborales. Nos comprometemos a proporcionar un entorno seguro y confiable para que nuestros clientes puedan enfrentar cualquier eventualidad con tranquilidad y respaldo.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Entorno Seguro</h4>
                  <p className="text-xs text-slate-500">Protección legal y médica integral.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Respuesta Ágil</h4>
                  <p className="text-xs text-slate-500">Gestión acelerada de dictámenes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3">
              <div className="w-12 h-12 bg-brand-green text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">25+ Años de Historia</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Una sólida trayectoria respaldada por el reconocimiento de cientos de empresas en toda la región.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3 sm:translate-y-4">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">Staff Calificado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Médicos especialistas en medicina laboral, enfermeros y profesionales de la seguridad e higiene.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">Infraestructura Propia</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consultorios de última generación y unidades sanitarias móviles listas para desplegarse in situ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3 sm:translate-y-4">
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">Acompañamiento ART</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Asesoramiento y tratamiento continuo para la rápida rehabilitación y alta laboral del dependiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
