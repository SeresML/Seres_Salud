import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#073B1D] text-white text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact numbers and Email */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#75A376]" />
            <a href="tel:+5491166048055" className="font-medium">+54 9 11 6604-8055</a>
            <span className="text-emerald-700">|</span>
            <a href="tel:42221597" className="font-medium">4222-1597</a>
          </div>

          <div className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#75A376]" />
            <a href="mailto:comercial@seressalud.com.ar" className="font-medium">
              comercial@seressalud.com.ar
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-[#75A376]" />
            <span>Gral. Paz 130, Avellaneda, Buenos Aires</span>
          </div>
        </div>

        {/* Social networks & Operating hours */}
        <div className="flex items-center gap-4">
          <span className="hidden xl:inline-block text-emerald-300 text-xs font-light">
            Atención: Lunes a Viernes 08:00 - 18:00 hs
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
