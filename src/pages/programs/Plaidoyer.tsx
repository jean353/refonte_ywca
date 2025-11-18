import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Plaidoyer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Plaidoyer et Droits des Femmes
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Défendre les droits des femmes et lutter pour l'égalité des genres.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-body text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              Notre programme de Plaidoyer et Droits des Femmes vise à sensibiliser, éduquer et mobiliser pour l'égalité des genres et la protection des droits fondamentaux des femmes au Togo.
            </p>
            <p>
              Nous menons des campagnes de plaidoyer, collaborons avec les décideurs politiques et soutenons les victimes de violences basées sur le genre.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plaidoyer;
