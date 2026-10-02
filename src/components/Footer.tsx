import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#073B1D] text-white pt-16 pb-8 border-t-4 border-brand-moss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm w-52">
              <Image
                src="/images/logo.png"
                alt="Seres Salud - Medicina del Trabajo"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Empresa líder en Medicina Laboral y Salud Ocupacional con más de 25 años de trayectoria cuidando la salud de las empresas y sus trabajadores en Argentina.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:bg-brand-moss hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:bg-brand-moss hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:bg-brand-moss hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links to Services */}
          <div>
            <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-brand-moss pl-3">
              Servicios Destacados
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/90">
              <li>
                <Link href="/servicios/examenes-preocupacionales" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Exámenes Preocupacionales</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/medico-en-planta" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Médico en Planta</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/unidades-moviles" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Unidades Móviles</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/control-de-ausentismo" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Control de Ausentismo</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/higiene-y-seguridad" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Higiene y Seguridad</span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/atencion-art" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Atención por ART</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Access & Navigation */}
          <div>
            <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-brand-moss pl-3">
              Navegación Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/90">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-emerald-300 transition-colors">Catálogo Completo de Servicios</Link>
              </li>
              <li>
                <Link href="/promociones" className="hover:text-emerald-300 transition-colors">Planes y Promociones</Link>
              </li>
              <li>
                <Link href="/infraestructura" className="hover:text-emerald-300 transition-colors">Infraestructura y Clínica</Link>
              </li>
              <li>
                <Link href="/acceso-clientes" className="hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <span>Portal Empresas y Trabajadores</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-moss" />
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-emerald-300 transition-colors">Formulario de Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-brand-moss pl-3">
              Contacto Central
            </h3>
            <ul className="space-y-3.5 text-sm text-emerald-100/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                <span>Gral. Paz 130, Avellaneda, Provincia de Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-moss shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+5491166048055" className="hover:text-emerald-300">+54 9 11 6604-8055</a>
                  <a href="tel:42221597" className="hover:text-emerald-300">4222-1597</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-moss shrink-0" />
                <a href="mailto:comercial@seressalud.com.ar" className="hover:text-emerald-300 break-all">
                  comercial@seressalud.com.ar
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-brand-moss" />
            <p>© {new Date().getFullYear()} Seres Salud S.A. Todos los derechos reservados. Líderes en Medicina Laboral.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contacto" className="hover:text-white transition-colors">Términos del Servicio</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
