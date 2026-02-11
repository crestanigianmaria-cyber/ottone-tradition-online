import { motion } from "framer-motion";
import { Clock, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Clock,
    title: "Dal 1865",
    description: "Oltre 150 anni di storia e tradizione nel cuore di Bassano del Grappa, gestiti dalla stessa famiglia per cinque generazioni.",
  },
  {
    icon: BookOpen,
    title: "Cucina d'Autore",
    description: "Piatti della tradizione veneta e italiana, preparati con ingredienti stagionali e una cura artigianale che li rende unici.",
  },
  {
    icon: Award,
    title: "4 Ristoranti",
    description: "Vincitore della puntata di Alessandro Borghese come miglior locale storico di Bassano del Grappa.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="bg-card border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
