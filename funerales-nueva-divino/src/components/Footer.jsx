import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="bg-navy text-white/70 relative overflow-hidden">
      <div className="h-0.5 bg-gold-gradient w-full" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9963C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-20">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 flex items-center justify-center border border-gold/30 bg-gold/10">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-125"
                  onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div>
                <p className="font-display text-sm text-white leading-tight font-semibold">Funerales Nueva Divino</p>
                <p className="font-sans text-gold text-[10px] tracking-[0.2em] uppercase mt-0.5">El Salvador</p>
              </div>
            </div>
            <p className="font-sans text-xs leading-relaxed mb-2 italic text-white/50">
              "Patrimonio unionense... siempre cerca de ti."
            </p>
            <p className="font-sans text-xs leading-relaxed mb-6">
              Más de 40 años acompañando a las familias de La Unión y el oriente
              salvadoreño con dignidad y calor humano.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: 'https://facebook.com/FuneralesNuevaDivino', label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com/n_divinoelsalvador', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} aria-label={label}
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-colors"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nuestros Servicios', href: '#servicios' },
                { label: 'Planes y Precios', href: '#planes' },
                { label: 'Misión y Visión', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-sans text-xs hover:text-gold transition-colors flex items-center gap-1.5 group">
                    <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-[width,background-color] duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">Servicios</h4>
            <ul className="space-y-3">
              {['Altar Personalizado', 'Velación Completa', 'Staff y Azafatas', 'Transmisión en Vivo', 'Carroza y Cortejo', 'Coffee Break Cementerio', 'Traslados Nacionales', 'Contratos Preventivos'].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="font-sans text-xs hover:text-gold transition-colors flex items-center gap-1.5 group">
                    <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-[width,background-color] duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="font-sans text-xs leading-relaxed">
                  5ª Av. Sur, Barrio El Centro,<br />La Unión, El Salvador, C.A.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <a href="tel:+50374779220" className="font-sans text-xs hover:text-gold transition-colors block">7477-9220</a>
                  <a href="tel:+50361742807" className="font-sans text-xs hover:text-gold transition-colors block">6174-2807</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <a href="https://facebook.com/FuneralesNuevaDivino" target="_blank" rel="noopener noreferrer"
                  className="font-sans text-xs hover:text-gold transition-colors">
                  Funerales Nueva Divino El Salvador
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="font-sans text-xs leading-relaxed">
                  Atención 24/7<br />
                  <span className="text-white/40">Los 365 días del año</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Slogan bar */}
        <div className="border-t border-white/10 py-5 text-center">
          <p className="font-display text-gold/60 text-sm italic">
            "Más de 40 años de experiencia · Servicios funerarios económicos y de lujo"
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-sans text-[10px] text-white/30 tracking-wider">
            © {year} Funerales Nueva Divino El Salvador. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Aviso de Privacidad', 'Términos de Servicio'].map((t) => (
              <a key={t} href="#" className="font-sans text-[10px] text-white/30 hover:text-gold transition-colors tracking-wider">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}