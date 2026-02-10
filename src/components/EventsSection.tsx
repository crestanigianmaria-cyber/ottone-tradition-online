import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    title: "Serata Degustazione Vini Veneti",
    date: "Ogni primo venerdì del mese",
    description: "Un viaggio attraverso i migliori vini del territorio, accompagnati da finger food della tradizione.",
  },
  {
    title: "Menu di Stagione Invernale",
    date: "Disponibile da novembre",
    description: "Piatti caldi e ricette della tradizione per celebrare i sapori dell'inverno veneto.",
  },
  {
    title: "Serate a Tema Storico",
    date: "Su prenotazione",
    description: "Cene esclusive con menu ispirati alle ricette storiche della Birraria Ottone dal 1865.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Eventi & Novità</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Esperienze Speciali
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="bg-card border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-gold text-sm mb-3">
                    <CalendarDays className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
