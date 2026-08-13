'use client';

import { useState } from 'react';
import {
  Stethoscope,
  Building2,
  Truck,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  HeartPulse,
  ArrowUpRight,
  Check,
} from 'lucide-react';

const services = [
  {
    id: 'preocupacionales',
    title: 'Exámenes Preocupacionales',
    icon: Stethoscope,
    shortDesc:
      'Determina la aptitud física y laboral del postulante para el puesto de trabajo requerido.',
    details: [
      'Exámenes médicos clínicos completos.',
      'Estudios de laboratorio e imagenología de alta precisión.',
      'Detección de afecciones o patologías preexistentes.',
      'Entrega acelerada de dictámenes de aptitud.',
    ],
    badge: 'Turnos Inmediatos',
  },
  {
    id: 'planta',
    title: 'Servicio Médico en Planta',
    icon: Building2,
    shortDesc:
      'Organización y mantenimiento integral del servicio de Medicina del Trabajo en las instalaciones de la empresa.',
    details: [
      'Asignación de médicos laborales en planta.',
      'Desarrollo de enfermería ocupacional interna.',
      'Gestión de historias clínicas e insumos.',
      'Cumplimiento continuo de la Ley 19.587.',
    ],
    badge: 'Gestión Integral',
  },
  {
    id: 'unidades-moviles',
    title: 'Unidades Móviles Sanitarias',
    icon: Truck,
    shortDesc:
      'Equipamiento médico móvil desplegado directamente en las sedes e instalaciones corporativas.',
    details: [
      'Exámenes periódicos masivos sin trasladar personal.',
      'Consultorios rodantes equipados con audiometría y rayos X.',
      'Optimización de tiempos y continuidad operativa.',
      'Cobertura regional inmediata.',
    ],
    badge: 'Atención In Situ',
  },
  {
    id: 'cursos',
    title: 'Cursos y Capacitación',
    icon: GraduationCap,
    shortDesc:
      'Programas de formación en salud laboral, primeros auxilios y prevención dictados in-company.',
    details: [
      'Capacitación en RCP y Primeros Auxilios.',
      'Ergonomía y cuidado postural en el puesto de trabajo.',
      'Prevención de enfermedades profesionales.',
      'Certificados oficiales para el personal participante.',
    ],
    badge: 'Capacitación In-Company',
  },
  {
    id: 'higiene',
    title: 'Higiene y Seguridad Laboral',
    icon: ShieldCheck,
    shortDesc:
      'Soluciones especializadas en la prevención de riesgos laborales y normativas vigentes.',
    details: [
      'Relevamientos de RIESGOS (R.G.R.L. y P.A.S.O.).',
      'Medición de ruido, iluminación y carga térmica.',
      'Elaboración de planes de evacuación y contingencia.',
      'Asesoramiento legal e inspecciones técnicas.',
    ],
    badge: 'Normativa SRL',
  },
  {
    id: 'ausentismo',
    title: 'Control de Ausentismo',
    icon: UserCheck,
    shortDesc:
      'Auditoría médica domiciliaria y en consultorio ante licencias o inasistencias por enfermedad.',
    details: [
      'Visita médica a domicilio en 24 a 48 hs.',
      'Consultorios dedicados para control de ausentismo.',
      'Reporte digital inmediato a la Gerencia de RRHH.',
      'Verificación y constatación diagnóstica objetiva.',
    ],
    badge: 'Reporte Inmediato',
  },
  {
    id: 'art',
    title: 'Atención Integral por ART',
    icon: HeartPulse,
    shortDesc:
      'Cobertura médica integral desde el primer accidente laboral hasta la reinserción al trabajo.',
    details: [
      'Atención de urgencia por accidentes de trabajo.',
      'Tratamiento médico, rehabilitación y kinesiología.',
      'Gestión prestacional con las principales Aseguradoras de Riesgos del Trabajo.',
      'Acompañamiento en el alta médica definitiva.',
    ],
    badge: 'Cobertura Nacional',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green font-semibold uppercase tracking-wider text-sm bg-brand-lightgreen px-4 py-1.5 rounded-full inline-block">
            Nuestras Prestaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Soluciones Especializadas en Medicina del Trabajo
          </h2>
          <p className="text-slate-600 text-lg">
            Ofrecemos un catálogo completo de servicios diseñados para proteger la salud de tus colaboradores y garantizar el cumplimiento normativo de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-brand-green/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.details.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-darkgreen pt-4 border-t border-slate-200 group-hover:gap-3 transition-all"
                >
                  <span>Solicitar Prestación</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
