import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
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

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md shadow-elegant border-b border-ivory-dark'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <motion.a href="#inicio" className="flex items-center gap-3 group" whileHover={{ scale: 1.01 }}>
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center relative">
                {/* Halo blanco detrás del logo cuando está sobre el Hero oscuro */}
                {!scrolled && (
                  <div className="absolute inset-0 rounded-full bg-white/15 blur-sm" />
                )}
                <img
                  src="/logo.png"
                  alt="Funerales Nueva Divino El Salvador"
                  className={`w-full h-full object-contain relative z-10 transition-all duration-500 ${
                    scrolled ? 'brightness-75 contrast-110' : 'brightness-110'
                  }`}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="hidden md:block">
                <p className={`font-display text-lg leading-tight font-semibold transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white drop-shadow'}`}>
                  Funerales Nueva Divino
                </p>
                <p className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold-light drop-shadow'}`}>
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
                  className={`font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 relative group ${
                    scrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-gold-light drop-shadow'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
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

            {/* Mobile Menu Btn */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
            >
              <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: 'all' } : { opacity: 0, y: -16, pointerEvents: 'none' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-ivory-dark shadow-elegant-lg md:hidden"
      >
        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -16 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="font-sans text-sm tracking-[0.15em] uppercase font-semibold text-charcoal hover:text-gold transition-colors py-2 border-b border-ivory-dark"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="tel:+50374779220"
            className="btn-gold self-start flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Phone size={13} />
            Llamar Ahora
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}