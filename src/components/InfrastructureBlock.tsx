import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const clinicaItems = [
  'Recepción y dos salas de espera',
  'Sala de radiología digital',
  'Sala de kinesiología',
  'Sala de electrocardiografía',
  'Box de extracción',
  'Cámara silente para audiometrías',
  'Ocho consultorios equipados',
];

const movil1Items = [
  'Consultorio médico',
  'Sala de extracción y ECG',
  'Cámara silente',
  'Sala de radiología',
  'RX 200 mAs',
  'Digitalizador directo de RX',
  'Aire acondicionado frío/calor',
];

const movil2Items = [
  'Gabinete para audiómetro',
  'Consultorio médico',
  'Sala de radiología',
  'Equipo RX portátil',
  'Digitalizador directo de RX',
  'Aire acondicionado frío/calor',
];

const movil3Items = [
  'Gabinete para audiómetro',
  'Consultorio médico',
  'Equipo RX portátil',
  'Digitalizador indirecto de RX',
  'Aire acondicionado central',
];

export default function InfrastructureBlock() {
  return (
    <section className="py-16 sm:py-20 bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section 1: Nuestra Clínica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text & Bullets */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
              Nuestra Clínica
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              Contamos con un edificio de 630 m² distribuidos en dos plantas, estratégicamente ubicado en Avellaneda. Nuestra infraestructura está diseñada para responder eficientemente a las necesidades médicas laborales de las empresas.
            </p>

            <ul className="space-y-2 pt-1 text-sm sm:text-base text-gray-700 font-sans">
              {clinicaItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0A5229] shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="https://wa.link/wsa6r5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold px-8 py-3 rounded-full text-sm transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                Consultar
              </a>
            </div>
          </div>

          {/* Facade Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[260px] sm:h-[320px] w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <Image
                src="/images/infrastructure.jpg"
                alt="Centro Médico Seres Salud Avellaneda"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Section 2: Nuestras Unidades Móviles */}
        <div className="space-y-10 pt-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A5229]">
              Nuestras Unidades Móviles
            </h2>
          </div>

          {/* 3 Mobile Unit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Móvil I */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="relative h-44 sm:h-52 w-full mb-6 flex items-center justify-center">
                  <Image
                    src="/images/movil-1.jpg"
                    alt="Móvil I - Seres Salud"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229] text-center mb-6">
                  Móvil I
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-sans">
                  {movil1Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5229] shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Móvil II */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="relative h-44 sm:h-52 w-full mb-6 flex items-center justify-center">
                  <Image
                    src="/images/movil-2.jpg"
                    alt="Móvil II - Seres Salud"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229] text-center mb-6">
                  Móvil II
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-sans">
                  {movil2Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5229] shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Móvil III */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="relative h-44 sm:h-52 w-full mb-6 flex items-center justify-center">
                  <Image
                    src="/images/movil-3.jpg"
                    alt="Móvil III - Seres Salud"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A5229] text-center mb-6">
                  Móvil III
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-sans">
                  {movil3Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5229] shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
