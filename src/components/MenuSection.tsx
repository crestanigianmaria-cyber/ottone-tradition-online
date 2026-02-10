import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const menuCategories = {
  Antipasti: [
    { name: "Tartare di Tonno agli Agrumi", desc: "Tonno fresco marinato con agrumi di stagione e olio extravergine", price: "€16", recommended: true },
    { name: "Carpaccio di Manzo", desc: "Fettine sottili di manzo con rucola, grana e tartufo", price: "€14" },
    { name: "Sformatino di Verdure", desc: "Sformatino stagionale con fonduta di formaggio Monte Grappa", price: "€12" },
    { name: "Tagliere dei Sapori Veneti", desc: "Selezione di salumi e formaggi locali con mieli e confetture", price: "€18" },
  ],
  Primi: [
    { name: "Bigoli al Ragù d'Anatra", desc: "Pasta fresca tradizionale con ragù di anatra cotto lentamente", price: "€15", recommended: true },
    { name: "Risotto al Radicchio di Treviso", desc: "Risotto mantecato con radicchio tardivo e Monte Veronese", price: "€14" },
    { name: "Gnocchi di Patate", desc: "Gnocchi fatti in casa con burro fuso, salvia e parmigiano", price: "€13" },
    { name: "Pasta e Fagioli", desc: "Ricetta della tradizione veneta con fagioli di Lamon", price: "€12" },
  ],
  Secondi: [
    { name: "Baccalà alla Vicentina", desc: "Ricetta tradizionale con polenta bianca e olio d'oliva", price: "€20", recommended: true },
    { name: "Goulash all'Ungherese", desc: "Stufato di manzo speziato con paprika e patate arrosto", price: "€19", recommended: true },
    { name: "Tagliata di Manzo", desc: "Tagliata alla griglia con rucola e scaglie di grana", price: "€22" },
    { name: "Fegato alla Veneziana", desc: "Fegato di vitello con cipolle caramellate e polenta", price: "€17" },
  ],
  Dessert: [
    { name: "Tarte Tatin", desc: "Torta rovesciata di mele caramellate con gelato alla vaniglia", price: "€9", recommended: true },
    { name: "Tiramisù della Casa", desc: "Ricetta tradizionale con mascarpone e caffè espresso", price: "€8" },
    { name: "Panna Cotta ai Frutti di Bosco", desc: "Panna cotta cremosa con coulis di frutti di bosco", price: "€8" },
    { name: "Semifreddo al Torroncino", desc: "Semifreddo con croccante di mandorle e miele", price: "€9" },
  ],
  Vini: [
    { name: "Prosecco Superiore DOCG", desc: "Valdobbiadene, bollicine fini e persistenti", price: "€7/€28" },
    { name: "Valpolicella Ripasso DOC", desc: "Rosso corposo e vellutato, ideale con i secondi", price: "€8/€32" },
    { name: "Soave Classico DOC", desc: "Bianco elegante e minerale, perfetto con il pesce", price: "€7/€26" },
    { name: "Amarone della Valpolicella", desc: "Grande rosso veneto, intenso e strutturato", price: "€12/€55" },
  ],
};

const tabs = Object.keys(menuCategories) as (keyof typeof menuCategories)[];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof menuCategories>("Antipasti");

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Il Nostro Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Sapori della Tradizione
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Il nostro menu cambia con le stagioni, celebrando i migliori ingredienti del territorio veneto.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {menuCategories[activeTab].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start justify-between py-5 border-b border-border/50 last:border-0 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.recommended && (
                      <span className="inline-flex items-center gap-1 text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        Consigliato
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
                <span className="font-serif text-lg font-semibold text-primary ml-4 whitespace-nowrap">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-muted-foreground text-sm mt-10 italic">
          * Il menu varia in base alla stagionalità degli ingredienti. Informare il personale per allergie o intolleranze.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
