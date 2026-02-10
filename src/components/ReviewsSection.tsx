import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const reviews = [
  { name: "Marco R.", rating: 5, text: "Un'esperienza culinaria indimenticabile. Il baccalà alla vicentina è il migliore che abbia mai provato. Servizio impeccabile e atmosfera magica." },
  { name: "Giulia P.", rating: 5, text: "Locale storico e affascinante. I bigoli al ragù d'anatra sono spettacolari. Si respira storia e passione in ogni angolo." },
  { name: "Thomas B.", rating: 5, text: "We visited Bassano del Grappa and this was the highlight. Amazing traditional Italian food in a beautiful historic setting. The goulash was extraordinary." },
  { name: "Laura M.", rating: 4, text: "Cucina eccellente e porzioni generose. Il tiramisù è divino. Personale gentilissimo e ambiente elegante ma accogliente." },
  { name: "Andrea F.", rating: 5, text: "Meritano assolutamente la vittoria a 4 Ristoranti. Ogni piatto racconta una storia, il vino è selezionato con cura. Torneremo sicuramente!" },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="recensioni" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Recensioni</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Cosa Dicono i Nostri Ospiti
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
              {[...Array(5 - reviews[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-muted-foreground/30" />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
              "{reviews[current].text}"
            </blockquote>
            <p className="text-muted-foreground font-medium">— {reviews[current].name}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* External links */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 transition-colors">
              Google Reviews <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.tripadvisor.it" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 transition-colors">
              TripAdvisor <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
