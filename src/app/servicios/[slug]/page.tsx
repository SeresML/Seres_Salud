import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  CheckCircle2,
  FileCheck,
  PhoneCall,
  ArrowLeft,
  ShieldCheck,
  Building2,
  Stethoscope,
  UserCheck,
  Truck,
  GraduationCap,
  HardHat,
  UserX,
  Activity,
  HeartPulse,
} from 'lucide-react';

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  legalFramework: string;
  iconName: string;
  benefits: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export function generateStaticParams() {
  return [
    { slug: 'medicina-laboral' },
    { slug: 'examenes-preocupacionales' },
    { slug: 'medico-en-planta' },
    { slug: 'unidades-moviles' },
    { slug: 'cursos' },
    { slug: 'higiene-y-seguridad' },
    { slug: 'control-de-ausentismo' },
    { slug: 'atencion-art' },
    { slug: 'kinesiologia' },
    { slug: 'area-protegida' },
  ];
}

const servicesMap: Record<string, ServiceDetail> = {
  'medicina-laboral': {
    title: 'Medicina Laboral para Empresas',
    subtitle: 'Servicios médicos especializados para empresas',
    description:
      'Priorizamos la salud y el bienestar de sus empleados mediante programas integrales de prevención de enfermedades profesionales, auditorías clínicas y asesoramiento en normativas vigentes.',
    legalFramework: 'Ley Nacional N° 19.587 de Higiene y Seguridad y Ley N° 24.557 de Riesgos del Trabajo.',
    iconName: 'Stethoscope',
    benefits: [
      'Reducción drástica del índice de siniestralidad laboral',
      'Cumplimiento estricto del marco regulatorio argentino',
      'Información médica confidencial y digitalizada para RRHH',
      'Atención personalizada con profesionales acreditados',
    ],
    features: [
      'Auditorías médicas de licencias por enfermedad',
      'Diseño de protocolos de ergonomía y salud laboral',
      'Peritajes médicos defensivos ante demandas',
      'Control de historias clínicas ocupacionales',
    ],
    faqs: [
      {
        q: '¿Qué diferencia a Seres Salud de un servicio médico tradicional?',
        a: 'Ofrecemos más de 25 años de especialización exclusiva en salud corporativa, garantizando tiempos de respuesta inmediatos e informes online para agilizar las contrataciones.',
      },
      {
        q: '¿Cómo se solicita el servicio comercial para una Pyme?',
        a: 'Puede solicitar una reunión o presupuesto directamente a comercial@seressalud.com.ar o enviando un mensaje a nuestro WhatsApp oficial.',
      },
    ],
  },
  'examenes-preocupacionales': {
    title: 'Exámenes Preocupacionales',
    subtitle: 'Evaluaciones médicas completas previa a la incorporación de personal',
    description:
      'Su objetivo principal es determinar la aptitud física y psíquica del postulante para el puesto de trabajo a desempeñar, detectando patologías preexistentes para su debido resguardo legal.',
    legalFramework: 'Resolución SRT N° 37/10 y Decreto 1338/96.',
    iconName: 'UserCheck',
    benefits: [
      'Turnos en el día y entrega de resultados en 24 a 48 hs',
      'Resguardo legal ante la Superintendencia de Riesgos del Trabajo',
      'Batería de exámenes básicos y específicos por riesgo ocupacional',
      'Laboratorio toxicológico y radiología digital en clínica propia',
    ],
    features: [
      'Examen físico general y anamnesis laboral',
      'Radiografía de tórax digitalizada',
      'Electrocardiograma con informe cardiológico',
      'Laboratorio completo (Hemograma, glucemia, uremia, orina)',
      'Audiometría tonal y examen oftalmológico',
    ],
    faqs: [
      {
        q: '¿Qué debe llevar el postulante el día del examen?',
        a: 'Debe concurrir con DNI original, ayuno de 8 horas y orden de solicitud emitida por la empresa contratante.',
      },
      {
        q: '¿Dónde se realizan los estudios preocupacionales?',
        a: 'En nuestro centro médico central en Gral. Paz 130, Avellaneda, o mediante nuestras Unidades Móviles equipadas para plantas industriales.',
      },
    ],
  },
  'medico-en-planta': {
    title: 'Servicio Médico en Planta',
    subtitle: 'Médicos y enfermeros universitarios dentro de su empresa',
    description:
      'Nos encargamos de la selección, supervisión y gestión continua del equipo médico que atiende a diario las emergencias, primeros auxilios y control de ausentismo en su predio industrial.',
    legalFramework: 'Ley 19.587 Cap. 3 - Servicios de Medicina del Trabajo.',
    iconName: 'Building2',
    benefits: [
      'Atención médica inmediata ante accidentes o malestares en jornada',
      'Reducción de salidas a guardias externas por afecciones menores',
      'Gestión activa de legajos de salud e inmunización del personal',
      'Diseño de planes de evacuación y brigadas de socorro',
    ],
    features: [
      'Presencia de médicos laborales matriculados por horas según nómina',
      'Enfermería técnica permanente para curaciones e inyectables',
      'Suministro e inventario de botiquines y droguería en planta',
      'Educación para la salud e higiene ocupacional',
    ],
    faqs: [
      {
        q: '¿Qué cantidad de horas semanales de médico requiere mi empresa?',
        a: 'La carga horaria requerida depende del número de empleados y nivel de riesgo asignado por la ley 19.587 (Anexo II). En Seres Salud evaluamos su caso para proponer el esquema óptimo.',
      },
    ],
  },
  'unidades-moviles': {
    title: 'Unidades Móviles para Empresas',
    subtitle: 'Controles y prestaciones directamente en tu empresa, con equipos profesionales y equipamiento completo.',
    description:
      'Unidades operativas especialmente adaptadas para la realización de exámenes periódicos, preocupacionales y de egreso directamente en los establecimientos de su empresa.',
    legalFramework: 'Resoluciones SRT para operativos en planta.',
    iconName: 'Truck',
    benefits: [
      'Cero pérdida de horas hombre por traslado de personal fuera de fábrica',
      'Capacidad de atención de hasta 150 trabajadores por jornada',
      'Consultorios insonorizados para audiometría y sala de Rayos X',
      'Laboratorio móvil de extracción y toma de muestras',
    ],
    features: [
      'Equipos de RX digital de baja radiación',
      'Cabinas audiométricas homologadas',
      'Técnicos radiólogos, kinesiólogos y extraccionistas en campo',
      'Operativa nacional para empresas mineras, industriales y agrícolas',
    ],
    faqs: [
      {
        q: '¿Qué requerimientos técnicos precisa el camión móvil en planta?',
        a: 'Solo se requiere un espacio plano de estacionamiento y toma corriente de 220V. La unidad cuenta con autonomía energética y climatización propia.',
      },
    ],
  },
  'cursos': {
    title: 'Cursos de Capacitación y RCP',
    subtitle: 'Capacitaciones teóricas y prácticas para la prevención de riesgos',
    description:
      'Dictamos cursos con certificación oficial sobre Reanimación Cardiopulmonar (RCP), Primeros Auxilios, Uso de Defibriladores (DEA) y Ergoestrés.',
    legalFramework: 'Normativas de la SRT y Ministerio de Trabajo.',
    iconName: 'GraduationCap',
    benefits: [
      'Instructores certificados por entidades internacionales',
      'Práctica con maniquíes de simulación clínica avanzada',
      'Dictado presencial en las instalaciones de la empresa o en nuestra clínica',
      'Otorgamiento de diplomas y acreditación laboral',
    ],
    features: [
      'Cursos de RCP Básico y Avanzado',
      'Manejo de Obstrucción de Vía Aérea (OVACE)',
      'Primeros Auxilios en Trauma e Quemaduras',
      'Prevención de Enfermedades Profesionales y Lesiones Musculoesqueléticas',
    ],
    faqs: [
      {
        q: '¿Se otorgan certificados individuales para los asistentes?',
        a: 'Sí, entregamos certificados de aprobación nominales avalados por médicos especialistas en medicina del trabajo.',
      },
    ],
  },
  'higiene-y-seguridad': {
    title: 'Higiene y Seguridad Laboral para Empresas',
    subtitle: 'Servicio integral para cumplir con la normativa y mejorar las condiciones de trabajo.',
    description:
      'Asesoramos a las empresas en el cumplimiento de las normativas de seguridad laboral, realizando mediciones de campo e implementando sistemas de gestión ambiental.',
    legalFramework: 'Ley 19.587 y resoluciones SRT 900/15, 84/12, 85/12.',
    iconName: 'HardHat',
    benefits: [
      'Disminución efectiva de multas e inspecciones de la SRT',
      'Creación de ambientes de trabajo seguros y ergonómicos',
      'Elaboración del Plan Anual de Capacitaciones',
    ],
    features: [
      'Medición de Ruido en Ambiente de Trabajo (Res. SRT 85/12)',
      'Medición de Iluminación (Res. SRT 84/12)',
      'Medición de Puesta a Tierra y Continuidad (Res. SRT 900/15)',
      'Planes de Evacuación y Simulacros',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia deben realizarse las mediciones ambientales?',
        a: 'En su mayoría, las mediciones de ruido e iluminación deben actualizarse con frecuencia anual según exige la normativa de la SRT.',
      },
    ],
  },
  'control-de-ausentismo': {
    title: 'Control de Ausentismo Laboral',
    subtitle: 'Gestión médica profesional para reducir ausencias injustificadas.',
    description:
      'Servicio orientado a auditar y verificar las inasistencias por motivos de salud mediante médicos visitadores a domicilio y atención en consultorio central.',
    legalFramework: 'Ley de Contrato de Trabajo N° 20.744 (Art. 209 y 210).',
    iconName: 'UserX',
    benefits: [
      'Recepción de solicitudes las 24 horas vía portal online o WhatsApp',
      'Visita médica en domicilio dentro de las 24 horas del pedido',
      'Informes médicos detallados con diagnóstico y días sugeridos de reposo',
      'Desarticulación del ausentismo injustificado',
    ],
    features: [
      'Médicos visitadores con movilidad propia en GBA y CABA',
      'Control médico en consultorio para empleados ambulantes',
      'Junta médica para discordancias de diagnóstico',
    ],
    faqs: [
      {
        q: '¿Hasta qué hora se puede solicitar un médico a domicilio?',
        a: 'Recibimos solicitudes desde nuestro sistema web o líneas telefónicas desde las 07:00 hs para coordinar la visita en el día.',
      },
    ],
  },
  'atencion-art': {
    title: 'Atención por ART para Empresas',
    subtitle: 'Respuesta médica rápida, gestión administrativa y seguimiento del trabajador.',
    description:
      'Coordinamos y ejecutamos la primera atención médica, curaciones, interconsultas con especialistas y la rehabilitación física requerida hasta el alta definitiva del trabajador.',
    legalFramework: 'Ley de Riesgos del Trabajo N° 24.557.',
    iconName: 'Activity',
    benefits: [
      'Prestador acreditado por las principales Aseguradoras de Riesgos del Trabajo',
      'Agilidad en trámites administrativos e informes de evolución médica',
      'Equipos interdisciplinarios de traumatólogos, cirujanos y kinesiólogos',
    ],
    features: [
      'Servicio de guardia de primera asistencia',
      'Especialidades médicas: Traumatología, Cirugía General, Neurología',
      'Descarga de comprobantes e informes para el empleador',
    ],
    faqs: [
      {
        q: '¿Qué hacer si un trabajador sufre un accidente en la empresa?',
        a: 'Debe realizar la denuncia a la ART correspondiente y remitir al paciente a nuestra clínica en Avellaneda para la primera atención asistencial.',
      },
    ],
  },
  'kinesiologia': {
    title: 'Kinesiología para Empresas',
    subtitle: 'Atención profesional en kinesiología para tus colaboradores.',
    description:
      'Tratamiento de patologías musculares, articulares y osteoarticulares originadas por sobreesfuerzo, accidentes laborales o posturas inadecuadas.',
    legalFramework: 'Nomenclador de Prestaciones Médicas.',
    iconName: 'HeartPulse',
    benefits: [
      'Reducción del tiempo de incapacidad laboral',
      'Gabinete de kinesiología totalmente equipado en clínica central',
      'Tratamientos ergonómicos para prevención de recaídas',
    ],
    features: [
      'Magnetoterapia, Ultrasonido y Electroterapia',
      'Ejercicios de rehabilitación funcional ocupacional',
      'Evaluación de ergonomía de puesto de trabajo',
    ],
    faqs: [
      {
        q: '¿Cuántas sesiones de kinesiología se prescriben por orden médica?',
        a: 'Habitualmente se otorgan módulos de 10 sesiones con reevaluación clínica de evolución.',
      },
    ],
  },
  'area-protegida': {
    title: 'Servicio de Área Protegida',
    subtitle: 'Cobertura médica de emergencias y urgencias en sus instalaciones',
    description:
      'Protegemos el recinto físico de su empresa garantizando la atención médica rápida ante cualquier eventualidad de salud sufrida por empleados, clientes o contratistas.',
    legalFramework: 'Normas internacionales de soporte vital básico y avanzado.',
    iconName: 'ShieldCheck',
    benefits: [
      'Ambulancias de alta complejidad UTIM para traslado de urgencia',
      'Protección total para todo individuo dentro del establecimiento',
      'Respuesta ante incidentes cardíacos o traumatismos severos',
    ],
    features: [
      'Despacho telefónico de ambulancia las 24 horas los 365 días del año',
      'Médicos emergentes y paramédicos equipados',
      'Certificado visible de Empresa Protegida para la fachada',
    ],
    faqs: [
      {
        q: '¿Cubre a visitas y proveedores que estén temporalmente en la empresa?',
        a: 'Sí, el servicio de Área Protegida resguarda a toda persona que se encuentre dentro del predio geográfico declarado.',
      },
    ],
  },
};

const getIcon = (name: string) => {
  switch (name) {
    case 'Stethoscope': return Stethoscope;
    case 'UserCheck': return UserCheck;
    case 'Building2': return Building2;
    case 'Truck': return Truck;
    case 'GraduationCap': return GraduationCap;
    case 'HardHat': return HardHat;
    case 'UserX': return UserX;
    case 'Activity': return Activity;
    case 'HeartPulse': return HeartPulse;
    default: return ShieldCheck;
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const normalizedSlug = params.slug ? decodeURIComponent(params.slug).toLowerCase().trim() : '';
  const service = servicesMap[normalizedSlug];
  if (!service) {
    return { title: 'Servicios | Seres Salud' };
  }
  return {
    title: `${service.title} | Seres Salud Medicina Laboral`,
    description: service.description,
  };
}

export default function SingleServicePage({ params }: { params: { slug: string } }) {
  const normalizedSlug = params.slug ? decodeURIComponent(params.slug).toLowerCase().trim() : '';
  const service = servicesMap[normalizedSlug] || servicesMap['medicina-laboral'];

  if (!service) {
    notFound();
  }

  const isPreocupacionales = normalizedSlug.includes('preocupacional');
  const isMedicoEnPlanta = normalizedSlug.includes('planta');
  const isUnidadesMoviles = normalizedSlug.includes('movil') || normalizedSlug.includes('moviles');
  const isHigieneSeguridad = normalizedSlug.includes('higiene') || normalizedSlug.includes('seguridad');
  const isControlAusentismo = normalizedSlug.includes('ausentismo');
  const isAtencionArt = normalizedSlug.includes('art');
  const isKinesiologia = normalizedSlug.includes('kinesiologia');
  const isMedicinaLaboral = (normalizedSlug === 'medicina-laboral' || !servicesMap[normalizedSlug]) && !isPreocupacionales && !isMedicoEnPlanta && !isUnidadesMoviles && !isHigieneSeguridad && !isControlAusentismo && !isAtencionArt && !isKinesiologia;

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Full-Width Header Hero Section matching reference screenshot */}
      <div className="relative w-full bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] py-12 sm:py-16 text-white shadow-sm overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Title & Subtitle & Button */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-wide drop-shadow-md leading-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-100 font-sans leading-relaxed drop-shadow-xs">
                {service.subtitle}
              </p>
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-block bg-white hover:bg-emerald-50 text-[#0A5229] font-bold text-sm sm:text-base px-8 py-3 rounded-xl shadow-lg border border-emerald-100 transition-all hover:scale-105 active:scale-95"
                >
                  Solicitar Asesoramiento
                </Link>
              </div>
            </div>

            {/* Right Side: Quick Consultation Form matching screenshot */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-emerald-100 max-w-sm w-full text-gray-800">
                <h2 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  Envíe su Consulta
                </h2>
                <form action="/contacto" method="GET" className="space-y-3">
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
                      className="bg-[#006E32] hover:bg-[#005426] text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-lg transition-all shadow-md active:scale-95"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Metrics Strip matching screenshot */}
      <div className="bg-white border-b border-gray-100 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A5229]">25+</div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A5229]">
                {isHigieneSeguridad ? '500+' : '600+'}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                {isHigieneSeguridad ? 'Empresas asesoradas' : 'Clientes Activos'}
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A5229]">
                {isHigieneSeguridad ? '1,000+' : '50k+'}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                {isHigieneSeguridad ? 'Planes Implementados' : 'Exámenes anuales'}
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A5229]">100%</div>
              <div className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                {isHigieneSeguridad ? 'Normativa cumplida' : 'Cumplimiento'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container matching reference screenshot */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Specific layout for Exámenes Preocupacionales matching reference screenshot */}
        {isPreocupacionales && (
          <>
            {/* Section 1: Overview for Exámenes Preocupacionales */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Servicio médico</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Exámenes Preocupacionales para Empresas
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Los exámenes preocupacionales son evaluaciones médicas obligatorias que se realizan antes del ingreso laboral para establecer el estado de salud del trabajador y asegurar que pueda desempeñar sus funciones sin riesgos.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Seres Salud realiza estos exámenes de forma profesional, cumpliendo con protocolos y asegurando documentación válida para RRHH y Seguridad e Higiene.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Exámenes Preocupacionales para Empresas - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de nuestros exámenes */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de nuestros exámenes
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Seguridad, cumplimiento y salud
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Cumplimiento legal
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Evaluaciones que cumplen con requisitos legales y laborales.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Resultados confiables
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Evaluaciones médicas precisas y reportes profesionales.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Protección del equipo
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Identificación temprana de condiciones de salud relevantes.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      RRHH ordenado
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Documentación clara para procesos internos de personal.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 3: ¿Qué incluye el examen preocupacional? matching reference screenshot */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye el examen preocupacional?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Historia clínica
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Entrevista y antecedentes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evaluación de riesgos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Registro completo</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Evaluaciones médicas
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Examen físico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Signos vitales</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Pruebas generales</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Documentación
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Certificado médico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Reporte para RRHH</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Guía para próximos pasos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Servicio Médico en Planta matching reference screenshot */}
        {isMedicoEnPlanta && (
          <>
            {/* Section 1: Overview for Servicio Médico en Planta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Cobertura permanente</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Médico en Planta para tu Empresa
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  El servicio de Médico en Planta brinda cobertura médica continua dentro de la empresa, permitiendo atención inmediata ante incidentes, control preventivo y seguimiento de la salud del personal.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Esta modalidad mejora la respuesta ante emergencias, reduce tiempos de ausentismo y fortalece la cultura de prevención dentro del entorno laboral.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Médico en Planta para tu Empresa - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios del Médico en Planta */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios del servicio médico en planta
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Presencia profesional, atención rápida y respaldo médico
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Atención inmediata
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Respuesta médica directa ante malestares o accidentes durante la jornada.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Reducción del ausentismo
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Control continuo y verificación rápida de licencias por enfermedad.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Prevención y salud
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Promoción de hábitos saludables y seguimiento activo del personal.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Respaldo para RRHH
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Gestión clínica coordinada con el área de recursos humanos.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 3: ¿Qué incluye el servicio médico en planta? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye el servicio médico en planta?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Gestión médica
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Atención de consultorio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Primeros auxilios</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Registro de historias clínicas</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Control preventivo
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Exámenes periódicos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Asesoría ergonómica</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Capacitaciones de salud</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Informes y auditoría
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Reportes para RRHH</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Auditoría de licencias</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Cumplimiento regulatorio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Unidades Móviles matching reference screenshot */}
        {isUnidadesMoviles && (
          <>
            {/* Section 1: Overview for Unidades Móviles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Atención en sitio</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Unidades Móviles de Salud
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Nuestras Unidades Móviles están equipadas para brindar atención médica, controles y servicios diagnósticos directamente en tu empresa, obra o evento, sin que tus colaboradores deban desplazarse.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Con profesionales de la salud matriculados y equipamiento completo, llevamos prestaciones como chequeos, exámenes y asistencia sanitaria a donde vos lo necesites.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center p-4">
                  <Image
                    src="/images/movil-1.jpg"
                    alt="Unidades Móviles de Salud - Seres Salud"
                    fill
                    className="object-contain object-center p-2"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de las Unidades Móviles */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de las Unidades Móviles
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Comodidad, agilidad y cero traslados para tu personal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Cero pérdida de horas hombre
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Atención médica in-situ sin necesidad de traslados fuera de la planta.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Operativos masivos
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Capacidad para atender grandes nóminas de trabajadores en tiempo récord.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Equipamiento de alta complejidad
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Cabinas audiométricas insonorizadas, RX digital y laboratorio móvil.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Cobertura integral
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Llegada a plantas industriales, obras, predios y empresas en todo el país.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 3: ¿Qué incluyen nuestras Unidades Móviles? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluyen nuestras Unidades Móviles?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Estudios in-situ
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Radiología digitalizada</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Audiometrías insonorizadas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Laboratorio de extracción</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Operativa ágil
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Médicos y técnicos en planta</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Atención simultánea</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Cero traslados externos</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Resultados y entrega
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Informes digitales para RRHH</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Certificados de aptitud</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Seguimiento confidencial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Higiene y Seguridad Laboral matching reference screenshot */}
        {isHigieneSeguridad && (
          <>
            {/* Section 1: Overview for Higiene y Seguridad */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Asesoramiento integral</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Higiene y Seguridad Laboral para tu Empresa
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Los servicios de Higiene y Seguridad de Seres Salud están orientados a proteger la salud de tus colaboradores, minimizar riesgos laborales y asegurar el cumplimiento de las normas vigentes.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Ofrecemos asesoría, implementación de planes de seguridad, auditorías, capacitaciones y evaluaciones específicas adaptadas al rubro y tamaño de tu empresa.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Higiene y Seguridad Laboral para tu Empresa - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de nuestros servicios */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de nuestros servicios
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Protección, cumplimiento y tranquilidad
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Cumplimiento de normas
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Implementación de estándares y auditorías de higiene y seguridad.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Reducción de riesgos
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Identificación y mitigación de peligros laborales.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Entornos más seguros
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Protección real para tus colaboradores y procesos.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Apoyo a RRHH
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Soporte documental y operativo para recursos humanos.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 3: ¿Qué incluye el servicio de Higiene y Seguridad? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye el servicio de Higiene y Seguridad?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Diagnóstico de riesgos
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Análisis de condiciones laborales</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Identificación de peligros</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evaluación documental</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Planificación y control
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Planes de acción</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Protocolos operativos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Seguimiento continuo</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Informes y documentación
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Auditorías internas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Informes formales</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Soporte para inspecciones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Kinesiología para Empresas */}
        {isKinesiologia && (
          <>
            {/* Section 1: Overview for Kinesiología */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Atención profesional</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Servicio de Kinesiología para Empresas
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Nuestro servicio de kinesiología ofrece atención especializada para la evaluación, prevención y tratamiento de afecciones músculo-esqueléticas que afectan el desempeño laboral.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Desde rehabilitación postural hasta manejo de dolor crónico, nuestros profesionales trabajan con cada paciente para promover su bienestar integral y funcionalidad en el entorno de trabajo.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Servicio de Kinesiología para Empresas - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de nuestro servicio */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de nuestro servicio
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Salud, función y rendimiento
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Prevención de lesiones
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Evaluaciones funcionales para detectar riesgos tempranos.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Mejor postura y movilidad
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Técnicas especializadas para mejorar el movimiento diario.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Reducción de dolor
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Tratamientos personalizados para molestias y tensiones.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Bienestar laboral
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Mayor confort y funcionalidad para el equipo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: ¿Qué incluye el servicio de kinesiología? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye el servicio de kinesiología?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Evaluación funcional
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Valoración músculo-esquelética</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Análisis de movilidad</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Identificación de riesgos</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Tratamiento personalizado
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Terapias manuales</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Ejercicios terapéuticos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Reeducación postural</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Seguimiento
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evolución del tratamiento</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Recomendaciones domiciliarias</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Informes para la empresa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Atención por ART para Empresas */}
        {isAtencionArt && (
          <>
            {/* Section 1: Overview for Atención por ART */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Servicio ART</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Atención por ART para trabajadores y empresas
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Brindamos atención médica inmediata ante accidentes de trabajo y enfermedades laborales, con seguimiento profesional y coordinación directa con la Aseguradora de Riesgos del Trabajo.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Nuestro enfoque garantiza una atención rápida, correcta y alineada a los protocolos exigidos por la ART y la normativa vigente.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Atención por ART para trabajadores y empresas - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de la atención por ART */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de la atención por ART
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Respuesta rápida, trámites ágiles y recuperación del trabajador
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Atención médica inmediata
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Asistencia médica rápida ante accidentes de trabajo y contingencias.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Coordinación con la ART
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Gestión directa de trámites, denuncias e informes exigidos por la aseguradora.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Seguimiento de evolución
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Control exhaustivo de la recuperación hasta el alta médica definitiva.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Tranquilidad para la empresa
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Resguardo legal y comunicación fluida con el departamento de RRHH.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: ¿Qué incluye la atención por ART? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye la atención por ART?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Atención médica inicial
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evaluación médica del trabajador</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Atención inmediata del accidente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Registro clínico correspondiente</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Gestión con la ART
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Comunicación con la aseguradora</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Derivaciones y autorizaciones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Seguimiento administrativo</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Seguimiento médico
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Controles de evolución</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Certificados y alta médica</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Informes para la empresa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Control de Ausentismo Laboral matching reference screenshot */}
        {isControlAusentismo && (
          <>
            {/* Section 1: Overview for Control de Ausentismo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Gestión médica</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Control médico de ausentismo laboral
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  El servicio de Control de Ausentismo de Seres Salud permite a las empresas verificar ausencias laborales mediante evaluaciones médicas objetivas, realizadas por profesionales especializados.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  <strong className="font-bold text-gray-900">En consultorio:</strong> El empleado podrá, previa autorización de la empresa, atenderse en los consultorios de Seres Salud, donde se realiza un control más exhaustivo y, de ser necesario, se indicará medicación o tratamiento.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  <strong className="font-bold text-gray-900">En domicilio:</strong> Cuando un empleado falta, la empresa puede solicitar el envío de un médico al domicilio para me constatar si la persona se encuentra realmente imposibilitada de concurrir a su puesto de trabajo.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Control médico de ausentismo laboral - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de nuestro servicio */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de nuestro servicio
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Agilidad, veracidad y control para recursos humanos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Verificación objetiva
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Médicos especializados evalúan la veracidad y grado de la patología.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Respuesta en 24 hs
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Visitas domiciliarias y controles en consultorio con rápida gestión.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <UserX className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Desarticulación del ausentismo
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Disminución significativa de ausencias injustificadas o reiteradas.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Soporte para RRHH
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Informes médicos claros, detallados y digitalizados para la toma de decisiones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: ¿Qué incluye el servicio? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye el servicio?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Control médico
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evaluación profesional</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Constatación de ausencia</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Registro clínico</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Atención flexible
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Consultorio o domicilio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Intervención rápida</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Coordinación con la empresa</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Informe para RRHH
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Resultado del control</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Seguimiento de casos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Respaldo médico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Specific layout for Medicina Laboral */}
        {isMedicinaLaboral && (
          <>
            {/* Section 1: Institutional Overview Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Salud laboral integral</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  Medicina Laboral para Empresas
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  En Seres Salud ofrecemos servicios de medicina laboral orientados a la protección y seguimiento de la salud de tus colaboradores, desde evaluaciones preventivas hasta controles periódicos.
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  Nuestra medicina laboral integra diagnósticos, estudios y atención profesional para asegurar condiciones de trabajo saludables y el cumplimiento de la normativa vigente.
                </p>

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt="Medicina Laboral para Empresas - Seres Salud"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Beneficios de la medicina laboral */}
            <div className="space-y-10 pt-4">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  Beneficios de la medicina laboral
                </h2>
                <p className="text-sm text-gray-500 font-medium font-sans">
                  Salud, prevención y respaldo profesional
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Prevención de riesgos
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Controles que identifican riesgos antes de que afecten al equipo.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Atención médica profesional
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Evaluaciones, diagnósticos y seguimientos especializados.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Diagnósticos confiables
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Estudios clínicos claros y respaldados por profesionales.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                      Apoyo para RRHH
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                      Informes preparados para gestión interna y cumplimiento normativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: ¿Qué incluye la medicina laboral? */}
            <div className="space-y-10 pt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                  ¿Qué incluye la medicina laboral?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Controles preventivos
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Evaluación médica inicial</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Controles periódicos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Valoración de aptitud laboral</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Estudios y diagnósticos
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Estudios clínicos requeridos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Electrocardiogramas y análisis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Interpretación profesional</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 sm:p-9 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-6 leading-tight max-w-[180px]">
                    Informes y seguimiento
                  </h3>
                  <ul className="space-y-3.5 text-sm sm:text-base text-gray-600 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Informes médicos para RRHH</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Recomendaciones preventivas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#006E32] shrink-0" />
                      <span>Seguimiento de evolución</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Fallback layout for other services */}
        {!isPreocupacionales && !isMedicinaLaboral && !isMedicoEnPlanta && !isUnidadesMoviles && !isHigieneSeguridad && !isControlAusentismo && !isAtencionArt && !isKinesiologia && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span>Servicio profesional</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  {service.description}
                </p>

                {service.legalFramework && (
                  <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs sm:text-sm text-[#0A5229] font-medium">
                    <strong className="font-bold">Marco Legal:</strong> {service.legalFramework}
                  </div>
                )}

                <div className="pt-3">
                  <Link
                    href="/contacto"
                    className="inline-block bg-[#006E32] hover:bg-[#005426] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    Solicitar Asesoramiento
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[340px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/about.jpg"
                    alt={`${service.title} - Seres Salud`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Benefits list */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-8 pt-4">
                <div className="text-center max-w-2xl mx-auto space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
                    Beneficios del Servicio
                  </h2>
                  <p className="text-sm text-gray-500 font-medium font-sans">
                    Excelencia, agilidad y respaldo médico
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white p-7 rounded-2xl shadow-card border border-gray-100 flex items-start gap-4 hover:shadow-cardhover transition-all">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-bold font-heading text-gray-900">
                          {benefit}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Back Link */}
        <div className="pt-4">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A5229] hover:underline bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Catálogo de Servicios</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
