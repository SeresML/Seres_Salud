'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Building2, User, FileText } from 'lucide-react';
import { enviarConsulta, COPIA } from '@/lib/enviarConsulta';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    servicio: 'Medicina Laboral General',
    mensaje: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setError(false);
    const ok = await enviarConsulta(
      `Consulta Seres Salud — ${formData.nombre}`,
      {
        'Nombre Completo': formData.nombre,
        'Empresa / Organización': formData.empresa,
        'Teléfono': formData.telefono,
        email: formData.email,
        'Servicio Requerido': formData.servicio,
        'Mensaje': formData.mensaje,
      },
      honeypot,
      { email: formData.email, telefono: formData.telefono }
    );
    setEnviando(false);
    if (ok) {
      setSubmitted(true);
      setFormData({ ...formData, nombre: '', empresa: '', telefono: '', email: '', mensaje: '' });
    } else {
      setError(true);
    }
  };

  return (
    <section className="py-20 bg-brand-lightbg border-t border-emerald-100" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <span className="text-xs font-bold font-heading text-brand-green uppercase tracking-widest bg-brand-lightmoss px-3.5 py-1 rounded-md">
            Atención Inmediata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-darktext">
            Póngase en Contacto
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans">
            Complete el siguiente formulario y un asesor corporativo se comunicará con su empresa a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-[8px] border border-emerald-100 shadow-card overflow-hidden">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-4 bg-[#073B1D] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">
                Cotice su Plan Corporativo
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed font-sans">
                Brindamos soluciones a medida para Pymes y grandes empresas. Consulte por nuestros paquetes preocupacionales y abonos de médico en planta.
              </p>

              <div className="space-y-4 pt-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Dirección Central</div>
                    <div className="text-emerald-100/70 text-xs">Gral. Paz 130, Avellaneda</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Teléfonos Directos</div>
                    <div className="text-emerald-100/70 text-xs">+54 9 11 6604-8055 / 4222-1597</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Correo Comercial</div>
                    <div className="text-emerald-100/70 text-xs">comercial@seressalud.com.ar</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/80">
              <div className="text-xs text-emerald-200/90 font-medium">Horario de Administración:</div>
              <div className="text-sm font-bold text-white">Lunes a Viernes de 08:00 a 18:00 hs</div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 p-8 sm:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-brand-darktext">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-gray-600 max-w-md text-sm">
                  Gracias por comunicarse con Seres Salud. Un ejecutivo comercial de nuestro departamento de Medicina Laboral se pondrá en contacto telefónico o por correo electrónico a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-brand-green text-white font-bold px-6 py-2.5 rounded-[8px] text-sm hover:bg-brand-darkgreen transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="web"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="block text-sm font-bold text-brand-darktext">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: Roberto Gómez"
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all"
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="block text-sm font-bold text-brand-darktext">
                      Empresa / Organización
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ej: Logística & Servicios S.A."
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Teléfono */}
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="block text-sm font-bold text-brand-darktext">
                      Teléfono de Contacto <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej: 11-4433-2211"
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all"
                      />
                    </div>
                  </div>

                  {/* Correo Electrónico */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-brand-darktext">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ej: r.gomez@empresa.com.ar"
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Servicio de Interés */}
                <div className="space-y-2">
                  <label htmlFor="servicio" className="block text-sm font-bold text-brand-darktext">
                    Servicio Requerido
                  </label>
                  <select
                    id="servicio"
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all bg-white"
                  >
                    <option value="Medicina Laboral General">Medicina Laboral General</option>
                    <option value="Exámenes Preocupacionales">Exámenes Preocupacionales</option>
                    <option value="Médico en Planta">Servicio Médico en Planta</option>
                    <option value="Unidades Móviles">Unidades Móviles en Planta</option>
                    <option value="Control de Ausentismo">Control de Ausentismo</option>
                    <option value="Higiene y Seguridad">Higiene y Seguridad</option>
                    <option value="Cursos RCP y Primeros Auxilios">Cursos de RCP y Primeros Auxilios</option>
                    <option value="Atención ART">Atención por ART</option>
                    <option value="Kinesiología Laboral">Kinesiología Laboral</option>
                    <option value="Área Protegida">Área Protegida</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-sm font-bold text-brand-darktext">
                    Mensaje o Detalles de la Consulta <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describa la cantidad de empleados, ubicación o servicios específicos que necesita presupuestar..."
                      className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-800 transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-[#0A5229] hover:bg-[#073B1D] text-white font-bold py-4 rounded-[8px] text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  <Send className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                  <span>{enviando ? 'Enviando...' : 'Enviar Consulta Comercial'}</span>
                </button>
                {error && (
                  <p className="text-sm text-red-600 text-center">
                    No pudimos enviar su consulta. Intente nuevamente o escríbanos a {COPIA}.
                  </p>
                )}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
