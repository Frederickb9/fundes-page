import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

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
                <p className={`font-display text-lg leading-tight font-semibold transition-colors duration-300 ${
                  navScrolled ? 'text-charcoal' : 'text-white drop-shadow'
                }`}>
                  Funerales Nueva Divino
                </p>
                <p className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
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

            {/* Mobile — botón hamburguesa/X siempre blanco (overlay oscuro detrás) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={`md:hidden p-3 transition-[color] duration-150 ${
                navScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, scale: menuOpen ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Overlay full-screen — navy oscuro, debajo del nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-navy/[0.97] backdrop-blur-sm flex flex-col md:hidden"
          >
            {/* Línea dorada superior */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient opacity-80" />

            {/* Espacio para el navbar */}
            <div className="h-20" />

            {/* Links principales */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl text-white/85 hover:text-gold-light transition-[color] duration-150 py-4 border-b border-white/[0.08] leading-tight"
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Pie del overlay: teléfono + tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="px-8 pb-12 flex flex-col gap-3"
            >
              <div className="h-px bg-white/10 mb-2" />
              <a
                href="tel:+50374779220"
                className="flex items-center gap-3 text-gold-light font-sans text-sm tracking-wider"
              >
                <Phone size={14} />
                7477-9220 / 6174-2807
              </a>
              <p className="font-sans text-white/30 text-[10px] tracking-[0.25em] uppercase">
                Desde 1979 · La Unión, El Salvador
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
