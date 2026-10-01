'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, ShieldCheck, UserCheck, Stethoscope, Truck, GraduationCap, HardHat, UserX, Activity, HeartPulse, Building2, FileText, HeartHandshake, Brain, Zap, Syringe } from 'lucide-react';

const serviceLinks = [
  { name: 'Medicina Laboral', href: '/servicios/medicina-laboral', icon: Stethoscope },
  { name: 'Exámenes Preocupacionales', href: '/servicios/examenes-preocupacionales', icon: UserCheck },
  { name: 'Médico en Planta', href: '/servicios/medico-en-planta', icon: Building2 },
  { name: 'Unidades Móviles', href: '/servicios/unidades-moviles', icon: Truck },
  { name: 'Cursos', href: '/servicios/cursos', icon: GraduationCap, isCursos: true },
  { name: 'Higiene y Seguridad', href: '/servicios/higiene-y-seguridad', icon: HardHat },
  { name: 'Control de Ausentismo', href: '/servicios/control-de-ausentismo', icon: UserX },
  { name: 'Atención por ART', href: '/servicios/atencion-art', icon: Activity },
  { name: 'Kinesiología', href: '/servicios/kinesiologia', icon: HeartPulse },
  { name: 'Área Protegida', href: '/servicios/area-protegida', icon: ShieldCheck },
  { name: 'Libretas Sanitarias Laborales', href: '/servicios/libretas-sanitarias-laborales', icon: FileText },
  { name: 'Medicina Asistencial', href: '/servicios/medicina-asistencial', icon: HeartHandshake },
  { name: 'Psicotécnicos laborales', href: '/servicios/psicotecnicos-laborales', icon: Brain },
  { name: 'Pausas Activas', href: '/servicios/pausas-activas', icon: Zap },
  { name: 'Vacunas Antigripales', href: '/servicios/vacunas-antigripales', icon: Syringe },
];

const cursosSubItems = [
  { name: 'Cursos de RCP', href: '/servicios/cursos#rcp' },
  { name: 'Cursos de Primeros Auxilios', href: '/servicios/cursos#primeros-auxilios' },
  { name: 'Cursos de Vida Saludable', href: '/servicios/cursos#vida-saludable' },
  { name: 'Prevención Cardiovascular', href: '/servicios/prevencion-cardiovascular' },
  { name: 'Cursos de Alcoholismo', href: '/servicios/cursos#alcoholismo' },
  { name: 'Cursos de Drogas de Abuso', href: '/servicios/cursos#drogas-de-abuso' },
  { name: 'Cursos de HIV Sida', href: '/servicios/cursos#hiv-sida' },
  { name: 'Cursos de Ergonomía', href: '/servicios/cursos#ergonomia' },
  { name: 'Cursos de Tabaquismo', href: '/servicios/cursos#tabaquismo' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosMobileOpen, setServiciosMobileOpen] = useState(false);
  const [cursosMobileOpen, setCursosMobileOpen] = useState(false);
  const [clientesMobileOpen, setClientesMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 flex justify-between items-center">
        {/* Brand Logo - Made Larger */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-16 sm:h-20 w-60 sm:w-80 overflow-hidden flex items-center">
            <Image
              src="/images/logo.png"
              alt="Seres Salud - Medicina del Trabajo"
              width={320}
              height={80}
              className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - Made Larger */}
        <nav className="hidden lg:flex items-center space-x-8 text-base lg:text-lg font-sans text-brand-darktext font-semibold">
          <Link
            href="/"
            className={`transition-colors py-1 hover:text-brand-green ${
              isActive('/') ? 'text-brand-green font-bold border-b-2 border-brand-green' : 'text-gray-800'
            }`}
          >
            Home
          </Link>

          {/* Dropdown Servicios */}
          <div className="relative group">
            <Link
              href="/servicios"
              className={`flex items-center gap-1.5 py-2 hover:text-brand-green transition-colors ${
                pathname.startsWith('/servicios') ? 'text-brand-green font-bold' : 'text-gray-800'
              }`}
            >
              <span>Servicios</span>
              <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-brand-green transition-transform group-hover:rotate-180 duration-200" />
            </Link>
            <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-dropdown border border-emerald-50 py-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
              <div className="px-3 pb-2 mb-2 border-b border-gray-100">
                <Link
                  href="/servicios"
                  className="text-xs font-bold uppercase tracking-wider text-brand-green hover:underline flex items-center justify-between"
                >
                  <span>Ver Todos los Servicios</span>
                  <span>→</span>
                </Link>
              </div>
              <div className="space-y-0.5 px-1">
                {serviceLinks.map((service) => {
                  const IconComp = service.icon;
                  if (service.isCursos) {
                    return (
                      <div key={service.href} className="relative group/cursos">
                        <Link
                          href={service.href}
                          className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-[#006E32] hover:text-white rounded-lg transition-colors group-hover/cursos:bg-[#006E32] group-hover/cursos:text-white"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <IconComp className="w-4 h-4 text-brand-moss shrink-0 group-hover/cursos:text-white" />
                            <span className="truncate">{service.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover/cursos:text-white shrink-0 fill-current" />
                        </Link>

                        {/* Flyout Sub-menu matching reference screenshot */}
                        <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 opacity-0 group-hover/cursos:opacity-100 pointer-events-none group-hover/cursos:pointer-events-auto transition-all duration-200 z-50">
                          <div className="divide-y divide-gray-100">
                            {cursosSubItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-[#006E32] transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-brand-lightgreen hover:text-brand-green rounded-lg transition-colors"
                    >
                      <IconComp className="w-4 h-4 text-brand-moss shrink-0" />
                      <span className="truncate">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/promociones"
            className={`transition-colors py-1 hover:text-brand-green ${
              isActive('/promociones') ? 'text-brand-green font-bold border-b-2 border-brand-green' : 'text-gray-800'
            }`}
          >
            Promociones
          </Link>

          <Link
            href="/infraestructura"
            className={`transition-colors py-1 hover:text-brand-green ${
              isActive('/infraestructura') ? 'text-brand-green font-bold border-b-2 border-brand-green' : 'text-gray-800'
            }`}
          >
            Infraestructura
          </Link>

          {/* Dropdown Acceso a Clientes */}
          <div className="relative group">
            <Link
              href="/acceso-clientes"
              className={`flex items-center gap-1.5 py-2 hover:text-brand-green transition-colors ${
                isActive('/acceso-clientes') ? 'text-brand-green font-bold' : 'text-gray-800'
              }`}
            >
              <span>Acceso a Clientes</span>
              <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-brand-green transition-transform group-hover:rotate-180 duration-200" />
            </Link>
            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-dropdown border border-emerald-50 py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
              <a
                href="https://ml1.seressalud.com.ar:8080"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-lightgreen hover:text-brand-green transition-colors"
              >
                <div className="font-semibold text-brand-green">Portal Empresas / RRHH</div>
                <div className="text-xs text-gray-500 font-normal">Informes de ausentismo y resultados</div>
              </a>
              <div className="border-t border-gray-100 my-1"></div>
              <a
                href="https://ml2.seressalud.com.ar:8080"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-lightgreen hover:text-brand-green transition-colors"
              >
                <div className="font-semibold text-brand-green">Portal Pacientes / Trabajadores</div>
                <div className="text-xs text-gray-500 font-normal">Turnos y descarga de exámenes</div>
              </a>
            </div>
          </div>

          {/* Contact CTA Button - Made Larger */}
          <Link
            href="/contacto"
            className="bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold px-7 py-3 rounded-lg transition-all shadow-sm hover:shadow-card active:scale-[0.98] text-base flex items-center justify-center"
          >
            <span>Contactar</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-800 hover:text-brand-green rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg text-lg font-bold ${
              isActive('/') ? 'bg-brand-lightgreen text-brand-green' : 'text-gray-800'
            }`}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setServiciosMobileOpen(!serviciosMobileOpen)}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-lg font-bold text-gray-800 hover:text-brand-green"
            >
              <span>Servicios</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${serviciosMobileOpen ? 'rotate-180' : ''}`} />
            </button>

            {serviciosMobileOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-brand-green">
                <Link
                  href="/servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-base font-bold text-brand-green uppercase tracking-wide"
                >
                  Ver Todos
                </Link>
                {serviceLinks.map((svc) => (
                  <div key={svc.href}>
                    {svc.isCursos ? (
                      <div>
                        <button
                          onClick={() => setCursosMobileOpen(!cursosMobileOpen)}
                          className="w-full flex items-center justify-between py-1.5 text-base text-gray-700 hover:text-brand-green font-semibold"
                        >
                          <span>{svc.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${cursosMobileOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {cursosMobileOpen && (
                          <div className="pl-4 space-y-1 border-l-2 border-emerald-300 my-1">
                            {cursosSubItems.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-sm text-gray-600 hover:text-[#006E32]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={svc.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-base text-gray-700 hover:text-brand-green font-semibold"
                      >
                        {svc.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/promociones"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg text-lg font-bold ${
              isActive('/promociones') ? 'bg-brand-lightgreen text-brand-green' : 'text-gray-800'
            }`}
          >
            Promociones
          </Link>

          <Link
            href="/infraestructura"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 rounded-lg text-base font-semibold ${
              isActive('/infraestructura') ? 'bg-brand-lightgreen text-brand-green' : 'text-gray-700'
            }`}
          >
            Infraestructura
          </Link>

          <div>
            <button
              onClick={() => setClientesMobileOpen(!clientesMobileOpen)}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-lg font-bold text-gray-800 hover:text-brand-green"
            >
              <span>Acceso a Clientes</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${clientesMobileOpen ? 'rotate-180' : ''}`} />
            </button>

            {clientesMobileOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-brand-moss">
                <a
                  href="https://ml1.seressalud.com.ar:8080"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-base text-gray-700 hover:text-brand-green"
                >
                  Portal Empresas / RRHH
                </a>
                <a
                  href="https://ml2.seressalud.com.ar:8080"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-base text-gray-700 hover:text-brand-green"
                >
                  Portal Pacientes / Trabajadores
                </a>
              </div>
            )}
          </div>

          <div className="pt-3">
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#0A5229] text-white font-bold py-3.5 rounded-lg block shadow-md hover:bg-brand-darkgreen transition-colors text-base"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
