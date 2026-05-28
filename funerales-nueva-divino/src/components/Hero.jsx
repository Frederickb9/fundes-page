import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';

function Counter({ to, suffix = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration: 1.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, count, to, delay]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-navy to-charcoal">

      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9963C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient opacity-80" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,150,60,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto flex flex-col items-center">

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.05}
          className="section-tag text-gold-light mb-6">
          Desde 1979 · La Unión, El Salvador
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold opacity-60" />
          <span className="text-gold text-lg">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold opacity-60" />
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.2}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4 text-shadow-lg"
          style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
          En los momentos{' '}
          <em className="text-gold-light not-italic" style={{ fontStyle: 'italic', fontWeight: 500 }}>
            más difíciles,
          </em>
          <br />estamos para ti.
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.3}
          className="font-sans text-gold/80 text-sm tracking-[0.2em] uppercase mb-4">
          Más de 40 años de experiencia · Patrimonio Unionense
        </motion.p>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.35}
          className="font-sans text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Brindamos tranquilidad, respaldo y una atención digna para tu familia.
          Servicios funerarios económicos y de lujo en La Unión, El Salvador.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.45}
          className="flex flex-col sm:flex-row gap-4 items-center">
          <motion.a href="#planes"
            className="btn-gold px-10 py-4 text-xs tracking-widest flex items-center gap-2"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(201,150,60,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            Ver Planes Disponibles
          </motion.a>
          <motion.a href="tel:+50374779220"
            className="flex items-center gap-2 text-white/80 hover:text-gold-light font-sans text-sm tracking-wider transition-colors duration-300"
            whileHover={{ x: 3 }}>
            <Phone size={15} className="text-gold" />
            7477-9220 / 6174-2807
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex gap-10 md:gap-16 mt-20 border-t border-white/10 pt-10">
          {[
            { to: 40, suffix: '+', label: 'Años de Experiencia', delay: 0.6 },
            { to: 24, suffix: '/7', label: 'Atención Disponible', delay: 0.75 },
            { to: 100, suffix: '%', label: 'Compromiso Familiar', delay: 0.9 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl text-gold-light font-semibold">
                <Counter to={stat.to} suffix={stat.suffix} delay={stat.delay} />
              </p>
              <p className="font-sans text-white/50 text-xs tracking-wider mt-1 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-white/30 text-[10px] tracking-[0.3em] uppercase">Desplazar</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gold/50">
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}