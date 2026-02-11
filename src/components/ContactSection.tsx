import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-24 bg-wood text-wood-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Dove Siamo</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
            Contatti & Posizione
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold">Indirizzo</h3>
                <p className="text-wood-foreground/70 mt-1">
                  Via Giacomo Matteotti 48/50<br />
                  36061 Bassano del Grappa (VI), Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold">Telefono</h3>
                <a href="tel:+390424522206" className="text-wood-foreground/70 hover:text-gold transition-colors mt-1 block">
                  +39 0424 522 206
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold">Email</h3>
                <a href="mailto:info@birrariaottone.it" className="text-wood-foreground/70 hover:text-gold transition-colors mt-1 block">
                  info@birrariaottone.it
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-serif text-xl font-semibold mb-4">Seguici</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-wood-foreground/10 border border-wood-foreground/20 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-wood-foreground/10 border border-wood-foreground/20 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://tripadvisor.it" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-wood-foreground/10 border border-wood-foreground/20 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.456!2d11.7345!3d45.7655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477869f0e5a0e3a3%3A0x3e9d4d5c7e7e7e7e!2sVia%20Giacomo%20Matteotti%2C%2048%2C%2036061%20Bassano%20del%20Grappa%20VI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Birraria Ottone su Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
