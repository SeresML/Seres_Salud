import React from 'react';
import Link from 'next/link';
import { UserCheck, Building2, Truck, GraduationCap, HardHat, UserX, Activity, HeartPulse, ArrowUpRight } from 'lucide-react';

const mainServices = [
  {
    slug: 'examenes-preocupacionales',
    title: 'Exámenes Preocupacionales',
    desc: 'Determinación de aptitud médica para las tareas requeridas y detección de patologías preexistentes según normativas SRT.',
    icon: UserCheck,
    tag: 'Obligatorio Ley 19.587',
  },
  {
    slug: 'medico-en-planta',
    title: 'Servicio Médico en Planta',
    desc: 'Organización y mantenimiento integral del servicio de medicina laboral dentro de las instalaciones de su empresa.',
    icon: Building2,
    tag: 'Gestión In Situ',
  },
  {
    slug: 'unidades-moviles',
    title: 'Unidades Móviles',
    desc: 'Equipos móviles de alta complejidad diseñados para realizar exámenes periódicos y de egreso directamente en su fábrica o predio.',
    icon: Truck,
    tag: 'Operativa Nacional',
  },
  {
    slug: 'cursos',
    title: 'Cursos',
    desc: 'Capacitaciones certificadas en RCP, Primeros Auxilios, Ergonomía y Salud dictadas in-situ en su empresa con acreditación oficial.',
    icon: GraduationCap,
    tag: 'Panel de Cursos',
  },
  {
    slug: 'higiene-y-seguridad',
    title: 'Higiene y Seguridad',
    desc: 'Asesoramiento técnico, mediciones ambientales y programas de prevención de riesgos ocupacionales para reducir la siniestralidad.',
    icon: HardHat,
    tag: 'Auditoría Técnica',
  },
  {
    slug: 'control-de-ausentismo',
    title: 'Control de Ausentismo',
    desc: 'Verificación médica domiciliaria y en consultorio para controlar bajas laborales y justificar inasistencias con rigurosidad.',
    icon: UserX,
    tag: 'Visita Domiciliaria 24h',
  },
  {
    slug: 'atencion-art',
    title: 'Atención por ART',
    desc: 'Cobertura integral ante accidentes laborales y enfermedades profesionales desde la asistencia primaria hasta la alta médica.',
    icon: Activity,
    tag: 'Red Asistencial ART',
  },
  {
    slug: 'kinesiologia',
    title: 'Kinesiología Laboral',
    desc: 'Tratamientos kinesiométricos, rehabilitación ergonómica y prevención de patologías posturales dentro y fuera de planta.',
    icon: HeartPulse,
    tag: 'Rehabilitación Rápida',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-lightbg border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-heading text-brand-green uppercase tracking-widest bg-brand-lightmoss px-3.5 py-1 rounded-md">
            Servicios Principales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-darktext">
            Soluciones Integrales en Medicina del Trabajo
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans">
            Diseñamos programas de salud adaptados al tamaño y sector industrial de cada organización con rápida respuesta operativa.
          </p>
        </div>

        {/* Bento Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <Link
                key={svc.slug}
                href={`/servicios/${svc.slug}`}
                className="group bg-white p-7 rounded-[8px] border border-emerald-100/80 shadow-card hover:shadow-cardhover hover:border-brand-moss transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-[8px] bg-brand-lightgreen text-brand-green flex items-center justify-center p-3 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-brand-moss bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/60">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold font-heading text-brand-darktext group-hover:text-brand-green transition-colors mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Card Link Footer */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-green group-hover:text-brand-darkgreen">
                  <span>Saber más</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold px-8 py-3.5 rounded-[8px] text-base transition-all shadow-md hover:shadow-lg"
          >
            Ver Todos los 15 Servicios de Medicina Laboral →
          </Link>
        </div>

      </div>
    </section>
  );
}
