import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Users, MapPin, Heart, Handshake, Eye, Target } from 'lucide-react';

const valores = [
  { icon: Award, title: 'Honradez', desc: 'Ofrecemos productos y servicios de calidad siendo transparentes y sinceros en la prestación de nuestros servicios.' },
  { icon: Handshake, title: 'Solidaridad', desc: 'Nos prestamos y apoyamos en esa situación tan difícil, trabajando en equipo a través de la ayuda mutua.' },
  { icon: Heart, title: 'Atención', desc: 'Somos cuidadosos y aplicados en el trato con nuestros clientes, demostrando respeto y cortesía en todo momento.' },
  { icon: Users, title: 'Respeto', desc: 'Mostramos consideración y reconocimiento del valor de nuestros clientes, atendiéndolos con cortesía y educación.' },
  { icon: Eye, title: 'Humildad', desc: 'No obramos con orgullo; somos capaces de reconocer nuestras propias limitaciones para mejorar cada día.' },
  { icon: Target, title: 'Responsabilidad', desc: 'Con sentido y conciencia cumplimos nuestros compromisos para generar confianza en nuestros clientes.' },
];

export default function About() {
  const ref = useRef(null);
  const refMV = useRef(null);
  const refVal = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isMVInView = useInView(refMV, { once: true, margin: '-80px' });
  const isValInView = useInView(refVal, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Quiénes Somos ── */}
      <section id="nosotros" className="py-16 md:py-24 bg-ivory relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9963C 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              <p className="section-tag mb-4">Nuestra Historia</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-4" style={{ fontWeight: 400 }}>
                Patrimonio Unionense,{' '}
                <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>siempre cerca de ti</em>
              </h2>
              <div className="gold-divider-left" />
              <p className="font-sans text-slate-warm text-sm leading-relaxed mt-4 mb-4">
                Desde 1979, Funerales Nueva Divino El Salvador nació en La Unión con fe
                profunda y vocación de servicio para acompañar a las familias salvadoreñas
                en los momentos más difíciles.
              </p>
              <p className="font-sans text-slate-warm text-sm leading-relaxed mb-4">
                Con más de <strong className="text-charcoal">40 años de experiencia</strong>, somos
                la empresa funeraria de mayor confianza en el oriente del país. Brindamos
                servicios funerarios económicos y de lujo, adaptados a las necesidades y
                posibilidades de cada familia unionense.
              </p>
              <p className="font-sans text-slate-warm text-sm leading-relaxed mb-8">
                Nuestra sede está ubicada en la <strong className="text-charcoal">5ª Av. Sur, Barrio El Centro,
                La Unión, El Salvador</strong> y estamos disponibles las 24 horas, los 365 días del año.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a href="tel:+50374779220" className="btn-gold inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  7477-9220
                </motion.a>
                <motion.a href="tel:+50361742807" className="btn-outline-gold inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  6174-2807
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-5">
              {[
                { icon: Award, title: '40+ Años', desc: 'La empresa funeraria de mayor trayectoria y confianza en La Unión' },
                { icon: Clock, title: '24/7 Siempre', desc: 'Disponibles los 365 días del año cuando más nos necesita' },
                { icon: Users, title: 'Staff Propio', desc: 'Azafatas y personal capacitado en empatía y servicio' },
                { icon: MapPin, title: 'La Unión', desc: '5ª Av. Sur, Barrio El Centro · La Unión, El Salvador' },
              ].map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={v.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-ivory-dark p-6 group hover:border-gold/40 transition-colors duration-300">
                    <div className="w-9 h-9 flex items-center justify-center border border-gold/30 bg-gold/5 mb-4 group-hover:bg-gold/10 transition-colors">
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-display text-base text-charcoal mb-2" style={{ fontWeight: 500 }}>{v.title}</h4>
                    <p className="font-sans text-xs text-slate-warm leading-relaxed">{v.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Misión y Visión ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-charcoal relative overflow-hidden">
        <div className="h-0.5 bg-gold-gradient absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
          <motion.div ref={refMV}
            initial={{ opacity: 0, y: 24 }}
            animate={isMVInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4" style={{ fontWeight: 400 }}>
              Nuestra <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>Misión y Visión</em>
            </h2>
            <div className="gold-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                icon: Target,
                label: 'Misión',
                text: 'Somos una empresa dedicada a satisfacer las necesidades de servicios funerarios con la mejor atención personalizada, buscando siempre superar las expectativas de nuestros clientes al mejor precio y calidad.',
                delay: 0,
              },
              {
                icon: Eye,
                label: 'Visión',
                text: 'Satisfacer integralmente las necesidades de servicios funerarios, siendo la mejor alternativa en precios y calidad en la zona oriental y para central del país.',
                delay: 0.15,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isMVInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: item.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/5 border border-white/10 p-10 group hover:border-gold/40 transition-[border-color] duration-200">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 bg-gold/10 mb-6">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-gold mb-4" style={{ fontWeight: 500 }}>{item.label}</h3>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div ref={refVal}
            initial={{ opacity: 0, y: 24 }}
            animate={isValInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4" style={{ fontWeight: 400 }}>
              Nuestros <em className="text-gold" style={{ fontStyle: 'italic', fontWeight: 500 }}>Valores</em>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle mx-auto mt-4">
              Los principios que guían cada servicio que brindamos a las familias de La Unión y El Salvador.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isValInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                  className="bg-white border border-ivory-dark p-8 group hover:shadow-gold-sm transition-[box-shadow] duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 flex items-center justify-center border border-gold/30 bg-gold/5 group-hover:bg-gold/10 transition-colors flex-shrink-0">
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors duration-300" style={{ fontWeight: 500 }}>
                      {v.title}
                    </h4>
                  </div>
                  <div className="h-px bg-gold/20 mb-4 group-hover:bg-gold/50 transition-colors duration-300" />
                  <p className="font-sans text-slate-warm text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}