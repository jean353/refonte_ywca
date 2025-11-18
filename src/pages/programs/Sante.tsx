import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sante = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent-pink to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Santé et Bien-être
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Promouvoir la santé reproductive et le bien-être global des femmes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-body text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              Notre programme de Santé et Bien-être se concentre sur la promotion de la santé reproductive, la prévention des maladies et l'accompagnement psychosocial des femmes et des jeunes filles.
            </p>
            <p>
              Nous organisons des campagnes de sensibilisation, des consultations gratuites et des ateliers sur la santé mentale et physique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sante;
