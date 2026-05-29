import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Flame, Heart, Truck, Shield, Video, Coffee,
  Church, Users, Building2, ChevronLeft, ChevronRight,
} from 'lucide-react';

const GAP = 24;

const services = [
  {
    icon: Church,
    title: 'Altar Personalizado',
    description: 'Montaje de altar católico o evangélico según la fe de su familia, decorado con arreglos florales y candelabros.',
    features: ['Altar católico o evangélico', 'Arreglos florales incluidos', 'Iluminación de ambiente'],
    image: 'https://picsum.photos/seed/altar-church-candles/800/520',
  },
  {
    icon: Flame,
    title: 'Servicio de Velación',
    description: 'Todo lo necesario: canopís con iluminación, sillas, vajilla completa, agua, café y azúcar para los acompañantes.',
    features: ['Canopís con iluminación', 'Sillas para acompañantes', 'Café, agua y vajilla'],
    image: 'https://picsum.photos/seed/candles-vigil-night/800/520',
  },
  {
    icon: Users,
    title: 'Staff Profesional',
    description: 'Azafatas uniformadas para atender a su familia con discreción, respeto y calidez en cada momento.',
    features: ['Azafatas para velación', 'Personal para el entierro', 'Atención personalizada'],
    image: 'https://picsum.photos/seed/professional-event-staff/800/520',
  },
  {
    icon: Video,
    title: 'Transmisión en Vivo',
    description: 'Streaming por Facebook para que familiares a distancia puedan acompañarles durante toda la velación.',
    features: ['Cobertura completa', 'Facebook Live', 'Acceso para toda la familia'],
    image: 'https://picsum.photos/seed/live-streaming-camera/800/520',
  },
  {
    icon: Truck,
    title: 'Traslados y Cortejo',
    description: 'Carroza fúnebre y cortejo completo. Repatriaciones nacionales e internacionales con todos los trámites.',
    features: ['Carroza propia', 'Cortejo fúnebre', 'Traslados internacionales'],
    image: 'https://picsum.photos/seed/black-car-hearse-road/800/520',
  },
  {
    icon: Coffee,
    title: 'Coffee Break',
    description: 'Refrigerio completo para la familia en el cementerio, brindando comodidad en esos momentos tan especiales.',
    features: ['Refrigerio para acompañantes', 'Servicio en cementerio', 'Coordinado por staff'],
    image: 'https://picsum.photos/seed/coffee-outdoor-reception/800/520',
  },
  {
    icon: Heart,
    title: 'Preparación',
    description: 'Equipo especializado con técnicas modernas para la presentación digna de su ser querido con el mayor cuidado.',
    features: ['Técnicos certificados', 'Maquillaje profesional', 'Vestimenta personalizada'],
    image: 'https://picsum.photos/seed/white-roses-tribute/800/520',
  },
  {
    icon: Building2,
    title: 'Sala de Velaciones',
    description: 'Instalaciones propias con cuarto privado, aire acondicionado, videovigilancia y WiFi para la familia.',
    features: ['Cuarto privado con A/C', 'Videovigilancia 24/7', 'WiFi para la familia'],
    image: 'https://picsum.photos/seed/elegant-hall-interior/800/520',
  },
  {
    icon: Shield,
    title: 'Contratos Preventivos',
    description: 'Asegure la tranquilidad de su familia con planes de previsión accesibles desde cualquier edad.',
    features: ['Sin costo adicional', 'Desde cualquier edad', 'Financiamiento disponible'],
    image: 'https://picsum.photos/seed/contract-signing-professional/800/520',
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="flex-none w-[285px] md:w-[360px] bg-white border border-ivory-dark overflow-hidden group snap-start cursor-default select-none">
      {/* Image */}
      <div className="relative h-[190px] md:h-[220px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/5 to-transparent" />
        <div className="absolute bottom-3 left-4 w-9 h-9 flex items-center justify-center bg-white/95 border border-gold/35 shadow-gold-sm">
          <Icon size={16} className="text-gold" strokeWidth={1.5} />
        </div>
      </div>

      {/* Gold reveal bar */}
      <div className="h-px w-full bg-gold-gradient origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {/* Body */}
      <div className="p-5 md:p-6">
        <h3 className="font-display text-lg md:text-xl text-charcoal mb-2 leading-snug group-hover:text-gold transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-sans text-slate-warm text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <ul className="space-y-1.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-sans text-xs text-slate-warm">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getStep = () => {
    const cardW = scrollRef.current?.firstElementChild?.offsetWidth ?? 285;
    return cardW + GAP;
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const s = getStep();
    const idx = Math.min(Math.max(Math.round(el.scrollLeft / s), 0), services.length - 1);
    setActiveIndex(idx);
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scrollByOne = (dir) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
  };

  const goTo = (i) => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ left: i * getStep(), behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-ivory">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="section-tag mb-4">Lo que incluimos</p>
          <h2
            className="font-display text-4xl md:text-5xl text-charcoal mb-4"
            style={{ fontWeight: 400 }}
          >
            Todo lo que su familia{' '}
            <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>
              necesita
            </em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle mx-auto mt-4">
            Servicios funerarios económicos y de lujo. Cada detalle pensado para que
            usted solo se concentre en lo que importa: su familia.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
          style={{
            paddingLeft: 'max(1.25rem, calc((100vw - 80rem) / 2 + 2.5rem))',
            paddingRight: 'max(1.25rem, calc((100vw - 80rem) / 2 + 2.5rem))',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="max-w-7xl mx-auto px-5 md:px-10 mt-6 flex items-center justify-between"
      >
        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Servicios">
          {services.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Servicio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-5 h-1.5 bg-gold'
                  : 'w-1.5 h-1.5 bg-charcoal/15 hover:bg-gold/50'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByOne(-1)}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-200 ${
              canScrollLeft
                ? 'border-gold/40 text-charcoal hover:bg-gold hover:text-white hover:border-gold'
                : 'border-charcoal/10 text-charcoal/20 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollByOne(1)}
            disabled={!canScrollRight}
            aria-label="Siguiente"
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-200 ${
              canScrollRight
                ? 'border-gold/40 text-charcoal hover:bg-gold hover:text-white hover:border-gold'
                : 'border-charcoal/10 text-charcoal/20 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
