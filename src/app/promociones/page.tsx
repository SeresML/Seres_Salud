import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Check, ArrowRight, PhoneCall, Building2, Users, Factory } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Promociones y Planes Corporativos | Seres Salud',
  description: 'Descubra los planes comerciales y bonificaciones especiales para exámenes preocupacionales y abonos de medicina laboral en empresas.',
};

export default function PromocionesPage() {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Full-Width Banner Header matching Infraestructura */}
      <div className="relative w-full h-44 sm:h-56 bg-gradient-to-r from-[#1B5E3B] via-[#0A5229] to-[#3B8E63] flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-wide drop-shadow-md text-center px-4">
          Promociones
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12">
        
        {/* Intro text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
            Planes y Beneficios Comerciales Corporativos
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Ofrecemos convenios especiales de bonificación por volumen de nómina y paquetes integrales para optimizar los costos de salud ocupacional de su empresa.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan Pyme */}
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-card p-8 flex flex-col justify-between hover:shadow-cardhover transition-all border-t-4 border-t-[#0A5229]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0A5229]" />
                <span className="text-xs font-bold text-[#0A5229] bg-emerald-50 px-3 py-1 rounded-full">
                  De 5 a 30 Empleados
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Plan Pyme Inicial
              </h3>
              <p className="text-sm text-gray-600 font-sans">
                Diseñado para pequeñas empresas que requieren agilidad y cumplimiento legal sin altos costos fijos.
              </p>
              
              <div className="py-4 border-y border-gray-100 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>10% OFF en Exámenes Preocupacionales</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Gestión de ausentismo con tarifa preferencial</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Portal online para descarga de estudios</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contacto?plan=pyme"
                className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-3 px-4 rounded-xl text-center block transition-all shadow-md text-sm"
              >
                Consultar Plan Pyme
              </Link>
            </div>
          </div>

          {/* Plan Corporativo (Destacado) */}
          <div className="bg-white rounded-2xl border-2 border-[#0A5229] shadow-cardhover p-8 flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A5229] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Más Solicitado
            </div>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0A5229]" />
                <span className="text-xs font-bold text-[#0A5229] bg-emerald-50 px-3 py-1 rounded-full">
                  De 31 a 150 Empleados
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Plan Corporativo
              </h3>
              <p className="text-sm text-gray-600 font-sans">
                Cobertura médica integral con profesional asignado y gestión prioritaria de ausentismo.
              </p>
              
              <div className="py-4 border-y border-gray-100 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>20% OFF en Preocupacionales y Periódicos</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Control de ausentismo a domicilio sin cargo extra</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Médico auditor exclusivo de cuenta</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Informes estadísticos mensuales para RRHH</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contacto?plan=corporativo"
                className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-3.5 px-4 rounded-xl text-center block transition-all shadow-lg text-sm"
              >
                Solicitar Cotización Corporativa
              </Link>
            </div>
          </div>

          {/* Plan Industrial */}
          <div className="bg-white rounded-2xl border border-emerald-100 shadow-card p-8 flex flex-col justify-between hover:shadow-cardhover transition-all border-t-4 border-t-[#0A5229]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-[#0A5229]" />
                <span className="text-xs font-bold text-[#0A5229] bg-emerald-50 px-3 py-1 rounded-full">
                  Más de 150 Empleados
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Plan Gran Empresa
              </h3>
              <p className="text-sm text-gray-600 font-sans">
                Servicios a medida con despliegue de Unidades Móviles en planta y consultorio in-company.
              </p>
              
              <div className="py-4 border-y border-gray-100 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Unidades Móviles de RX y Audiometría en planta</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Personal médico y de enfermería en planta</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-[#0A5229] shrink-0" />
                  <span>Capacitaciones in-situ de RCP y Seguridad</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contacto?plan=industrial"
                className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-3 px-4 rounded-xl text-center block transition-all shadow-md text-sm"
              >
                Consultar Plan Gran Empresa
              </Link>
            </div>
          </div>

        </div>

        {/* Custom Quotation Banner */}
        <div className="bg-emerald-50 rounded-2xl p-8 sm:p-10 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229]">
              ¿Necesita una propuesta personalizada para su nómina?
            </h3>
            <p className="text-sm text-gray-600 font-sans">
              Contáctese con nuestro equipo comercial para diseñar un plan a la medida de su empresa.
            </p>
          </div>
          <Link
            href="/contacto"
            className="bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shrink-0 text-sm flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hablar con un Asesor</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
