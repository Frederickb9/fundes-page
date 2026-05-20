import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 300, damping: 18 }}
      className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3">

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="relative bg-charcoal text-white font-sans text-xs px-3 py-1.5 whitespace-nowrap shadow-elegant">
        Consulta gratis por WhatsApp
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-charcoal" />
      </motion.div>

      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
          className="absolute inset-0 rounded-full" style={{ background: '#25D366' }} />
        <motion.div
          animate={{ scale: [1, 1.35], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4, repeatDelay: 0.5 }}
          className="absolute inset-0 rounded-full" style={{ background: '#25D366' }} />

        <motion.a
          href="https://wa.me/50374779220?text=Hola,%20deseo%20información%20sobre%20sus%20servicios%20y%20planes%20funerarios."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: '#25D366' }}
          whileHover={{ scale: 1.12, boxShadow: '0 8px 30px rgba(37,211,102,0.5)', transition: { type: 'spring', stiffness: 400, damping: 18 } }}
          whileTap={{ scale: 0.92 }}>
          <MessageCircle size={26} className="text-white" fill="white" strokeWidth={0} />
        </motion.a>
      </div>
    </motion.div>
  );
}
