import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building2, UserCheck, ShieldCheck, Download, Calendar, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Acceso a Clientes | Portales Digitales | Seres Salud',
  description: 'Portales digitales de autogestión para Empresas / RRHH y Pacientes / Trabajadores de Seres Salud.',
};

export default function AccesoClientesPage() {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Full-Width Banner Header matching Infraestructura */}
      <div className="relative w-full h-44 sm:h-56 bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-wide drop-shadow-md text-center px-4">
          Acceso a Clientes
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12">
        
        {/* Intro text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
            Portales Digitales de Autogestión
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Gestione los legajos de salud ocupacional, consulte estados de ausentismo y descargue certificados preocupacionales de forma 100% digital e inmediata.
          </p>
        </div>

        {/* Portales Grid (2 Options) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Option 1: Portal Empresas */}
          <div id="empresas" className="bg-white rounded-2xl border-2 border-[#0A5229] shadow-card p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-cardhover transition-all">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center">
                <Building2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#0A5229] uppercase tracking-wider">
                  Opción 1 - Para Departamentos de RRHH y Legales
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 mt-1">
                  Opción 1: Portal Empresas
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                Plataforma corporativa para gerentes de personal. Acceda en tiempo real a las novedades de su nómina de trabajadores.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <Download className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Descarga de aptitudes preocupacionales y periódicas firmadas digitalmente.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <FileText className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Reportes estadísticos de ausentismo por patología y área.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Solicitud prioritaria de visitas médicas a domicilio.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://ml1.seressalud.com.ar:8080"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-4 rounded-xl text-center block transition-all shadow-md text-base flex items-center justify-center gap-2 group"
              >
                <span>Ingresar al Portal Empresas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Option 2: Portal Pacientes */}
          <div id="pacientes" className="bg-white rounded-2xl border border-emerald-100 shadow-card p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-cardhover transition-all border-t-4 border-t-[#0A5229]">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 text-[#0A5229] flex items-center justify-center">
                <UserCheck className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#0A5229] uppercase tracking-wider">
                  Opción 2 - Para Postulantes y Empleados
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 mt-1">
                  Opción 2: Portal Pacientes
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                Espacio de consulta de turnos asignados y recepción de documentación médica personal.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <Calendar className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Confirmación de turnos para exámentes preocupacionales en clínica.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <FileText className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Consulta de requisitos e indicaciones previas a estudios (ayuno, RX).</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <Download className="w-5 h-5 text-[#0A5229] shrink-0 mt-0.5" />
                  <span>Descarga directa de certificados médicos de atención.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://ml2.seressalud.com.ar:8080"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-4 rounded-xl text-center block transition-all shadow-md text-base flex items-center justify-center gap-2 group"
              >
                <span>Ingresar al Portal Pacientes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
