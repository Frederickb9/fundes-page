import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Heart, Truck, Shield, Video, Coffee, Church, Users } from 'lucide-react';

const services = [
  {
    icon: Church,
    title: 'Altar Personalizado',
    description: 'Montaje de altar católico o evangélico según la fe de su familia, decorado con arreglos florales y candelabros de acuerdo a sus preferencias.',
    features: ['Altar católico o evangélico', 'Arreglos florales incluidos', 'Iluminación de ambiente'],
  },
  {
    icon: Flame,
    title: 'Servicio Completo de Velación',
    description: 'Todo lo necesario para la velación: canopís con iluminación, sillas, vajilla completa (platos, vasos, tenedores), agua, café y azúcar para los acompañantes.',
    features: ['Canopís con iluminación', 'Sillas para acompañantes', 'Café, agua y vajilla completa'],
  },
  {
    icon: Users,
    title: 'Staff Profesional',
    description: 'Azafatas uniformadas y capacitadas para atender a su familia durante la velación con discreción, respeto y calidez humana en todo momento.',
    features: ['Azafatas para velación', 'Personal para el entierro', 'Atención personalizada'],
  },
  {
    icon: Video,
    title: 'Transmisión en Vivo',
    description: 'Servicio de transmisión en vivo a través de nuestra página de Facebook para que familiares que no pueden asistir puedan acompañarles a distancia.',
    features: ['Transmisión por Facebook Live', 'Cobertura completa del servicio', 'Disponible para toda la familia'],
  },
  {
    icon: Truck,
    title: 'Traslados y Cortejo Fúnebre',
    description: 'Carroza fúnebre y vehículos para el cortejo fúnebre hacia el cementerio. Repatriaciones, traslados nacionales e internacionales con todos los trámites incluidos.',
    features: ['Carroza fúnebre propia', 'Cortejo fúnebre completo', 'Traslados nacionales e internacionales'],
  },
  {
    icon: Coffee,
    title: 'Coffee Break en Cementerio',
    description: 'Refrigerio completo para la familia y acompañantes durante el entierro en el cementerio, brindando comodidad en esos momentos tan especiales.',
    features: ['Refrigerio para acompañantes', 'Servicio en cementerio', 'Coordinado por nuestro staff'],
  },
  {
    icon: Heart,
    title: 'Preparación y Embalsamamiento',
    description: 'Equipo especializado con técnicas modernas que garantizan la presentación digna de su ser querido con el mayor cuidado y respeto profesional.',
    features: ['Técnicos certificados', 'Maquillaje profesional', 'Vestimenta personalizada'],
  },
  {
    icon: Shield,
    title: 'Contratos Preventivos',
    description: 'Asegure hoy la tranquilidad de su familia mañana. Planes de previsión accesibles que eliminan el impacto económico en el momento más difícil.',
    features: ['Sin costo adicional al contratar', 'Planes desde cualquier edad', 'Financiamiento disponible'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 60px rgba(201,150,60,0.18), 0 4px 20px rgba(15,23,42,0.12)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      className="card-elegant group cursor-default"
    >
      <div className="h-0.5 bg-gold-gradient w-full transform scale-x-0 group-hover:scale-x-100 transition-[transform] duration-200 origin-left" />
      <div className="p-8 md:p-10">
        <div className="w-12 h-12 flex items-center justify-center border border-gold/30 bg-gold/5 mb-6 group-hover:bg-gold/10 transition-[background-color] duration-150">
          <Icon size={20} className="text-gold" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-gold transition-[color] duration-150">
          {service.title}
        </h3>
        <p className="font-sans text-slate-warm text-sm leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-sans text-xs text-slate-warm">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicios" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20">
          <p className="section-tag mb-4">Lo que incluimos</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4" style={{ fontWeight: 400 }}>
            Todo lo que su familia{' '}
            <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>necesita</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle mx-auto mt-4">
            Servicios funerarios económicos y de lujo. Cada detalle pensado para que
            usted solo se concentre en lo que importa: su familia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}