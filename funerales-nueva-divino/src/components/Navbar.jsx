import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Phone } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

// Icono animado: 3 líneas → X sin swap de componentes
function HamburgerIcon({ isOpen }) {
  const t = { duration: 0.28, ease: [0.16, 1, 0.3, 1] };
  return (
    <div className="relative w-5 h-[14px]" aria-hidden="true">
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
        transition={t}
        className="absolute top-0 left-0 block w-full h-px bg-current origin-center"
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute top-[7px] left-0 block w-full h-px bg-current"
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
        transition={t}
        className="absolute bottom-0 left-0 block w-full h-px bg-current origin-center"
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navScrolled = scrolled && !menuOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
          navScrolled
            ? 'bg-white/96 backdrop-blur-md shadow-elegant border-b border-ivory-dark'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <motion.a href="#inicio" className="flex items-center gap-3 group" whileHover={{ scale: 1.01 }}>
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center relative">
                {!navScrolled && (
                  <div className="absolute inset-0 rounded-full bg-white/15 blur-sm" />
                )}
                <img
                  src="/logo.png"
                  alt="Funerales Nueva Divino El Salvador"
                  className={`w-full h-full object-contain relative z-10 transition-[filter] duration-300 ${
                    navScrolled ? 'brightness-75 contrast-110' : 'brightness-110'
                  }`}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="hidden md:block">
                <p className={`font-display text-lg leading-tight font-semibold transition-[color] duration-300 ${
                  navScrolled ? 'text-charcoal' : 'text-white drop-shadow'
                }`}>
                  Funerales Nueva Divino
                </p>
                <p className={`font-sans text-xs tracking-[0.2em] uppercase transition-[color] duration-300 ${
                  navScrolled ? 'text-gold' : 'text-gold-light drop-shadow'
                }`}>
                  El Salvador
                </p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-[color] duration-150 relative group ${
                    navScrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-gold-light drop-shadow'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-[width] duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.a
                href="tel:+50374779220"
                className="flex items-center gap-2 btn-gold text-[10px] py-2.5 px-5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={12} />
                Llamar Ahora
              </motion.a>
            </div>

            {/* Botón hamburguesa — icono animado, touch target 44px */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className={`md:hidden p-3 transition-[color] duration-150 ${
                navScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              <HamburgerIcon isOpen={menuOpen} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Overlay full-screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden overflow-hidden"
          >
            {/* Fondo base */}
            <div className="absolute inset-0 bg-navy" />

            {/* Brillo radial dorado — esquina inferior izquierda */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 45% at 0% 100%, rgba(201,150,60,0.07) 0%, transparent 65%)' }}
            />

            {/* Textura dorada — misma del Hero, muy sutil */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9963C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            {/* Spacer para el navbar */}
            <div className="h-20 shrink-0" />

            {/* Links con numeración */}
            <nav
              className="relative flex-1 flex flex-col justify-center px-8"
              aria-label="Navegación móvil"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.06 + 0.18,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline gap-4 py-[14px] border-b border-white/[0.07]"
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                >
                  <span className="font-sans text-[10px] text-white/20 tracking-wider tabular-nums w-5 shrink-0 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[1.75rem] leading-tight text-white/90 group-hover:text-gold-light transition-[color] duration-150">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Pie: teléfono + tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="relative px-8 pb-12 flex flex-col gap-2"
            >
              <div className="h-px bg-white/10 mb-3" />
              <a
                href="tel:+50374779220"
                className="flex items-center gap-3 text-gold-light font-sans text-sm tracking-wider py-3 min-h-[44px]"
              >
                <Phone size={14} />
                7477-9220 / 6174-2807
              </a>
              <p className="font-sans text-white/25 text-[10px] tracking-[0.25em] uppercase">
                Desde 1979 · La Unión, El Salvador
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
