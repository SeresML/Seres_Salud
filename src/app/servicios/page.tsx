import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Stethoscope,
  UserCheck,
  Building2,
  Truck,
  GraduationCap,
  HardHat,
  UserX,
  Activity,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  FileText,
  HeartHandshake,
  Brain,
  Zap,
  Syringe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios de Medicina Laboral | Seres Salud',
  description: 'Conozca nuestra oferta integral de 15 servicios en medicina laboral y salud ocupacional para empresas en Argentina.',
};

const allServicesData = [
  {
    slug: 'medicina-laboral',
    title: 'Medicina Laboral',
    subtitle: 'Asesoramiento médico legal e institucional continuo',
    desc: 'Priorizamos la salud y el bienestar de los empleados con nuestros servicios de medicina laboral de vanguardia. Auditoría de licencias, peritajes y prevención integral.',
    icon: Stethoscope,
    category: 'Gestión Institucional',
  },
  {
    slug: 'examenes-preocupacionales',
    title: 'Exámenes Preocupacionales',
    subtitle: 'Evaluación de aptitud psicofísica previa al ingreso',
    desc: 'Determinan si el postulante es apto para las tareas requeridas y detectan patologías preexistentes según Ley 19.587 y resolución SRT 37/10.',
    icon: UserCheck,
    category: 'Exámenes Médicos',
  },
  {
    slug: 'medico-en-planta',
    title: 'Servicio Médico en Planta',
    subtitle: 'Profesionales dentro de las instalaciones corporativas',
    desc: 'Organización y mantenimiento integral de los servicios internos de medicina del trabajo en plantas industriales, oficinas y depósitos.',
    icon: Building2,
    category: 'Gestión Institucional',
  },
  {
    slug: 'unidades-moviles',
    title: 'Unidades Móviles',
    subtitle: 'Clínicas itinerantes equipadas con radiología y audiometría',
    desc: 'Realización de exámenes preocupacionales y periódicos directamente en las instalaciones de la empresa para evitar desplazamientos.',
    icon: Truck,
    category: 'Atención In-Situ',
  },
  {
    slug: 'cursos',
    title: 'Cursos',
    subtitle: 'Programas de capacitación y prevención laboral',
    desc: 'Capacitaciones certificadas in-situ o en clínica sobre RCP, Primeros Auxilios, Ergonomía, Vida Saludable y prevención de adicciones.',
    icon: GraduationCap,
    category: 'Capacitación',
  },
  {
    slug: 'higiene-y-seguridad',
    title: 'Higiene y Seguridad Laboral',
    subtitle: 'Prevención de riesgos e inspecciones de ergonomía',
    desc: 'Servicios de consultoría y medición de ambientes laborales para reducir la siniestralidad y dar estricto cumplimiento a la legislación vigente.',
    icon: HardHat,
    category: 'Prevención y Norma',
  },
  {
    slug: 'control-de-ausentismo',
    title: 'Control de Ausentismo',
    subtitle: 'Visitas médicas a domicilio y verificación de licencias',
    desc: 'Auditoría médica domiciliaria y en consultorio para verificar causas de inasistencias por enfermedad o accidente laboral.',
    icon: UserX,
    category: 'Gestión Institucional',
  },
  {
    slug: 'atencion-art',
    title: 'Atención por ART',
    subtitle: 'Cobertura médica asistencial ante accidentes',
    desc: 'Cobertura integral desde la primera urgencia hasta la rehabilitación física y la reinserción laboral definitiva del trabajador.',
    icon: Activity,
    category: 'Asistencia Médica',
  },
  {
    slug: 'kinesiologia',
    title: 'Kinesiología Laboral',
    subtitle: 'Rehabilitación física y prevención ergonómica',
    desc: 'Tratamientos kinesiométricos adaptados a puestos de trabajo con alta exigencia postural o movimientos repetitivos.',
    icon: HeartPulse,
    category: 'Rehabilitación',
  },
  {
    slug: 'area-protegida',
    title: 'Servicio de Área Protegida',
    subtitle: 'Emergencias médicas dentro del predio comercial',
    desc: 'Asistencia médica inmediata ante urgencias o emergencias sufridas por empleados, clientes o visitantes dentro de la empresa.',
    icon: ShieldCheck,
    category: 'Emergencias 24/7',
  },
  {
    slug: 'libretas-sanitarias-laborales',
    title: 'Libretas Sanitarias Laborales',
    subtitle: 'Análisis clínicos y tramitación sanitaria',
    desc: 'Gestión completa de análisis clínicos, físicos y radiológicos para emisión y renovación de libretas sanitarias laborales.',
    icon: FileText,
    category: 'Trámites Sanitarios',
  },
  {
    slug: 'medicina-asistencial',
    title: 'Medicina Asistencial',
    subtitle: 'Atención primaria y prevención continua',
    desc: 'Consultas clínicas, curaciones y atención espontánea para la salud general de los trabajadores en clínica central.',
    icon: HeartHandshake,
    category: 'Atención Médica',
  },
  {
    slug: 'psicotecnicos-laborales',
    title: 'Psicotécnicos Laborales',
    subtitle: 'Evaluación psicológica de aptitud laboral',
    desc: 'Evaluaciones psicotécnicas completas e informes detallados para selección e incorporación de personal.',
    icon: Brain,
    category: 'Evaluación Psicológica',
  },
  {
    slug: 'pausas-activas',
    title: 'Pausas Activas',
    subtitle: 'Gimnasia laboral y prevención ergonómica',
    desc: 'Rutinas guiadas de movimiento, estiramiento y relajación en la jornada laboral para reducir el fatiga y lesiones.',
    icon: Zap,
    category: 'Bienestar Laboral',
  },
  {
    slug: 'vacunas-antigripales',
    title: 'Vacunas Antigripales',
    subtitle: 'Campañas de inmunización in-situ para empresas',
    desc: 'Organización y aplicación de campañas de vacunación directamente en planta o sede corporativa.',
    icon: Syringe,
    category: 'Inmunización',
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Full-Width Banner Header matching Infraestructura */}
      <div className="relative w-full h-44 sm:h-56 bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-wide drop-shadow-md text-center px-4">
          Servicios
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12">
        
        {/* Intro text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
            Nuestros Servicios en Salud Ocupacional
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Brindamos cobertura médica integral para empresas de todos los rubros e industrias. Explore las 15 áreas de atención especializada de Seres Salud.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServicesData.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={svc.slug}
                className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-card hover:shadow-cardhover transition-all duration-300 flex flex-col justify-between group border-t-4 border-t-[#0A5229]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#0A5229] group-hover:bg-[#0A5229] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#0A5229] bg-emerald-50 px-2.5 py-1 rounded-full">
                      {svc.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-[#0A5229] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#0A5229] font-medium">
                      {svc.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/servicios/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A5229] hover:text-[#073B1D] group-hover:translate-x-1 transition-all"
                  >
                    <span>Ver detalle del servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Contact Box */}
        <div className="bg-emerald-50 rounded-2xl p-8 sm:p-10 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold font-heading text-[#0A5229]">
              ¿Necesita una solución médica a medida para su empresa?
            </h3>
            <p className="text-sm text-gray-600 font-sans">
              Contáctese hoy con nuestros especialistas comerciales y arme un plan acorde a su nómina.
            </p>
          </div>
          <a
            href="https://wa.link/wsa6r5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shrink-0 text-sm flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Solicitar Asesoramiento</span>
          </a>
        </div>

      </div>
    </div>
  );
}
