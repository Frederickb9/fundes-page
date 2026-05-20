import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const categories = [
  { id: 'todos', label: 'Todos los Planes' },
  { id: 'basicos', label: 'Básicos' },
  { id: 'ejecutivos', label: 'Ejecutivos' },
  { id: 'presidenciales', label: 'Presidenciales' },
];

const plans = [
  {
    id: 1,
    category: 'basicos',
    name: 'Plan Serenidad',
    subtitle: 'Dignidad esencial',
    price: '$850',
    period: 'pago único',
    color: '#8B9DB8',
    featured: false,
    benefits: [
      'Ataúd de madera sencillo',
      'Sala de velación 24 hrs',
      'Servicio de traslado local',
      'Trámites legales básicos',
      'Personal de apoyo',
    ],
  },
  {
    id: 2,
    category: 'basicos',
    name: 'Plan Esperanza',
    subtitle: 'Consuelo para su familia',
    price: '$1,200',
    period: 'pago único',
    color: '#7FA99E',
    featured: false,
    benefits: [
      'Ataúd de madera reforzada',
      'Sala de velación premium 24 hrs',
      'Traslado + flores naturales',
      'Trámites legales completos',
      'Asistente familiar dedicado',
      'Libro de condolencias',
    ],
  },
  {
    id: 3,
    category: 'ejecutivos',
    name: 'Plan Distinción',
    subtitle: 'Elegancia y confort',
    price: '$2,400',
    period: 'pago único',
    color: '#C9963C',
    featured: true,
    badge: 'Más Solicitado',
    benefits: [
      'Ataúd de caoba premium',
      'Sala VIP con recepción',
      'Arreglos florales artesanales',
      'Traslado nacional incluido',
      'Gestión legal express',
      'Coordinador de ceremonias',
      'Urna conmemorativa de regalo',
    ],
  },
  {
    id: 4,
    category: 'ejecutivos',
    name: 'Plan Legado',
    subtitle: 'Un adiós memorable',
    price: '$3,200',
    period: 'pago único',
    color: '#B8860B',
    featured: false,
    benefits: [
      'Ataúd de cedro premium reforzado',
      'Suite de velación exclusiva',
      'Diseño floral personalizado',
      'Traslado + servicio de cafetería',
      'Emisión de partidas certificadas',
      'Álbum fotográfico del servicio',
      'Video memorial profesional',
      'Asistente 24/7 durante el servicio',
    ],
  },
  {
    id: 5,
    category: 'presidenciales',
    name: 'Plan Imperial',
    subtitle: 'La máxima distinción',
    price: '$5,500',
    period: 'pago único',
    color: '#8B5E3C',
    featured: false,
    badge: 'Premium',
    benefits: [
      'Ataúd importado de bronce o caoba',
      'Sala presidencial con exclusividad total',
      'Diseño floral de autor personalizado',
      'Limusina fúnebre de lujo',
      'Catering completo para familia',
      'Trámites legales prioridad nacional',
      'Video memorial cinematográfico',
      'Álbum de arte con biografía',
      'Placa conmemorativa grabada',
      'Servicio de post-duelo (1 mes)',
    ],
  },
  {
    id: 6,
    category: 'presidenciales',
    name: 'Plan Gran Majestad',
    subtitle: 'Sin comparación',
    price: '$8,500',
    period: 'pago único',
    color: '#6B3F2E',
    featured: false,
    badge: 'Exclusivo',
    benefits: [
      'Ataúd de importación directa personalizado',
      'Salón presidencial con jardín',
      'Cuarteto musical en vivo',
      'Catering gourmet para 150 personas',
      'Cortejo fúnebre completo',
      'Cobertura fotográfica y videográfica',
      'Monumentos y placas conmemorativas',
      'Trámites nacionales e internacionales',
      'Acompañamiento familiar 60 días',
      'Gestión de herencia y notaría',
    ],
  },
];

function PlanCard({ plan }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.2 } }}
      transition={{
        layout: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.35, ease: 'easeOut' },
        scale: { type: 'spring', stiffness: 320, damping: 26 },
      }}
      whileHover={{
        y: -6,
        boxShadow: plan.featured
          ? `0 20px 60px rgba(201,150,60,0.35), 0 4px 20px rgba(15,23,42,0.15)`
          : '0 16px 48px rgba(15,23,42,0.14)',
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      className={`relative bg-white overflow-hidden flex flex-col ${
        plan.featured ? 'ring-1 ring-gold' : 'border border-ivory-dark'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 text-white font-sans text-[9px] tracking-widest uppercase font-bold"
          style={{ background: plan.color }}
        >
          {plan.badge}
        </div>
      )}

      {/* Color header bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${plan.color}aa, ${plan.color})` }}
      />

      {/* Color swatch accent */}
      <div className="px-7 pt-7 pb-0">
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-10 h-10 flex-shrink-0 rounded-none flex items-center justify-center"
            style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}40` }}
          >
            <Star size={14} style={{ color: plan.color }} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display text-lg text-charcoal leading-tight" style={{ fontWeight: 500 }}>
              {plan.name}
            </h3>
            <p className="font-sans text-xs text-slate-warm mt-0.5">{plan.subtitle}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-5 pb-5 border-b border-ivory-dark">
          <div className="flex items-end gap-1">
            <span className="font-display text-3xl font-semibold" style={{ color: plan.color }}>
              {plan.price}
            </span>
          </div>
          <p className="font-sans text-xs text-slate-warm/70 mt-0.5 uppercase tracking-wider">{plan.period}</p>
        </div>

        {/* Benefits */}
        <ul className="space-y-2.5 mb-7">
          {plan.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 font-sans text-xs text-charcoal/80 leading-relaxed">
              <Check
                size={12}
                className="flex-shrink-0 mt-0.5"
                style={{ color: plan.color }}
                strokeWidth={2.5}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto px-7 pb-7">
        <motion.a
          href="https://wa.me/50300000000"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-sans text-[10px] tracking-[0.2em] uppercase font-semibold py-3 transition-all duration-300"
          style={{
            background: plan.featured ? `linear-gradient(135deg, ${plan.color}, #D4AF37)` : 'transparent',
            color: plan.featured ? '#fff' : plan.color,
            border: `1px solid ${plan.color}`,
          }}
          whileHover={{
            scale: 1.02,
            transition: { type: 'spring', stiffness: 400, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
        >
          Consultar este Plan
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function MobileCatalog() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'todos'
    ? plans
    : plans.filter((p) => p.category === activeFilter);

  return (
    <section id="planes" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="section-tag mb-4">Nuestros Planes</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4" style={{ fontWeight: 400 }}>
            Planes a la medida
            <br />
            <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>
              de cada familia
            </em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle mx-auto mt-4">
            Desde servicios esenciales hasta experiencias de primer nivel,
            tenemos el plan perfecto para honrar a quien más aman.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-10 md:mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`relative font-sans text-xs tracking-[0.15em] uppercase font-semibold px-5 py-2.5 transition-all duration-300 overflow-hidden ${
                activeFilter === cat.id
                  ? 'text-white'
                  : 'text-slate-warm border border-ivory-dark hover:border-gold/50 hover:text-gold bg-white'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {activeFilter === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold-gradient"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Plans Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16 p-10 bg-navy relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9963C' fill-opacity='1'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-3">¿Necesita orientación?</p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 400 }}>
              Le asesoramos sin ningún compromiso
            </h3>
            <p className="font-sans text-white/60 text-sm mb-8 max-w-lg mx-auto">
              Nuestros asesores están disponibles las 24 horas para ayudarle a encontrar
              el plan que mejor se adapte a sus necesidades y presupuesto.
            </p>
            <motion.a
              href="https://wa.me/50300000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Asesoría gratuita por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}