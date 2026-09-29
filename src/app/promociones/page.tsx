import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promociones y Planes Corporativos | Seres Salud',
  description: 'Descubra las promociones especiales para Abonos de Medicina Laboral y Exámentes Básicos de Ley en Seres Salud.',
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        
        {/* Dual Promotion Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: ABONOS MEDICINA LABORAL */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100 flex flex-col justify-between space-y-6 hover:shadow-cardhover transition-all">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="text-center space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229] tracking-wide">
                  ABONOS MEDICINA LABORAL
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#0A5229]">
                  Desde $15.000 + IVA + IIBB
                </p>
                <div className="pt-4">
                  <div className="w-full border-b border-gray-200" />
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                <p>
                  Contratando nuestro servicio de Medicina Laboral obtiene hasta un{' '}
                  <span className="font-bold text-gray-900">25% de descuento</span> en la realización de exámenes preocupacionales.
                </p>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    CONTROL DE AUSENTISMO EN CLÍNICA
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Atención por enfermedad inculpable.</li>
                    <li>Consulta Clínica – Cardiológica – Oftalmológica – Traumatológica.</li>
                  </ul>
                </div>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    ATENCIÓN POR ACCIDENTE DE TRABAJO
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Por A.R.T.</li>
                  </ul>
                </div>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    ASESORAMIENTO MÉDICO LABORAL
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Ante A.R.T. y organismos oficiales.</li>
                  </ul>
                </div>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    INFORMACIÓN VÍA WEB
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Acceso mediante clave personal a la historia clínica de empleados.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6 text-center">
              <Link
                href="/contacto?promocion=abonos-medicina-laboral"
                className="inline-block bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold text-sm sm:text-base px-10 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Consultar
              </Link>
            </div>
          </div>

          {/* Card 2: EXAMEN BÁSICO DE LEY */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100 flex flex-col justify-between space-y-6 hover:shadow-cardhover transition-all">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="text-center space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229] tracking-wide">
                  EXAMEN BÁSICO DE LEY
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#0A5229]">
                  Desde $34.800 + IVA + IIBB
                </p>
                <div className="pt-4">
                  <div className="w-full border-b border-gray-200" />
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    EXAMEN MÉDICO CLÍNICO
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Examen de agudeza visual, bucodental y revisión general.</li>
                    <li>Radiografía de tórax (digitalizada).</li>
                    <li>Electrocardiograma.</li>
                  </ul>
                </div>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    ANÁLISIS DE LABORATORIO
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Hemograma.</li>
                    <li>Eritrosedimentación.</li>
                    <li>Glucemia.</li>
                    <li>Uremia.</li>
                    <li>Orina completa.</li>
                  </ul>
                </div>

                <div className="pt-2 space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase text-xs sm:text-sm">
                    INFORME FINAL DE APTITUD
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-gray-700">
                    <li>Declaración jurada de antecedentes médicos.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6 text-center">
              <Link
                href="/contacto?promocion=examen-basico-de-ley"
                className="inline-block bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold text-sm sm:text-base px-10 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Consultar
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
