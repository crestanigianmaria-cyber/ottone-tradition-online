import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const AwardsSection = () => {
  return (
    <section className="py-24 bg-wood text-wood-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 mb-8">
            <Trophy className="w-10 h-10 text-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Vincitore <span className="text-gradient-gold">4 Ristoranti</span>
          </h2>
          <p className="text-wood-foreground/70 text-lg mb-8 leading-relaxed">
            La Birraria Ottone ha conquistato il titolo di miglior locale storico di Bassano del Grappa
            nel celebre programma <strong>"4 Ristoranti"</strong> condotto da Alessandro Borghese.
            Un riconoscimento che premia la nostra dedizione alla tradizione culinaria, all'accoglienza
            e alla qualità che ci distingue da oltre 150 anni.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: Award, label: "Miglior Locale Storico" },
              { icon: Star, label: "Eccellenza Culinaria" },
              { icon: Trophy, label: "5 Generazioni" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-sm font-medium text-wood-foreground/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
