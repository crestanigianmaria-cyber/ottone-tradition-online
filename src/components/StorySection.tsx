import { motion } from "framer-motion";
import restaurantExterior from "@/assets/restaurant-exterior.jpg";

const timelineEvents = [
  { year: "1865", title: "La Fondazione", description: "Il mastro birraio Ottone fonda la birreria nel centro storico di Bassano del Grappa." },
  { year: "1920", title: "Tradizione Familiare", description: "La seconda generazione trasforma il locale in un punto di riferimento per la cucina veneta." },
  { year: "1960", title: "Rinnovamento", description: "Il ristorante si amplia mantenendo l'anima storica, accogliendo ospiti da tutto il Veneto." },
  { year: "2000", title: "Eccellenza Culinaria", description: "La quarta generazione porta innovazione nel menu, unendo tradizione e creatività." },
  { year: "Oggi", title: "Cinque Generazioni", description: "La quinta generazione continua l'eredità con passione, conquistando il premio di 4 Ristoranti." },
];

const StorySection = () => {
  return (
    <section id="storia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">La Nostra Storia</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Cinque Generazioni di Passione
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Dal 1865, la famiglia Ottone custodisce una tradizione di ospitalità e cucina
            che ha reso la Birraria un simbolo di Bassano del Grappa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary/30" />
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14 md:pl-20 mb-10 last:mb-0"
              >
                <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" />
                <span className="text-gold font-serif text-xl font-bold">{event.year}</span>
                <h3 className="font-serif text-xl font-semibold mt-1 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground mt-1">{event.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={restaurantExterior}
                alt="Birraria Ottone - esterno storico del ristorante"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-serif text-3xl font-bold">160+</p>
              <p className="text-sm opacity-80">anni di storia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
