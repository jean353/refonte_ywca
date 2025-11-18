import { motion } from "framer-motion";
import { TrendingUp, Briefcase, DollarSign, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const Economie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-secondary-foreground mb-6">
              Autonomisation Économique
            </h1>
            <p className="font-body text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
              Soutenir l'entrepreneuriat féminin et l'accès aux opportunités économiques.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-body text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              Notre programme d'Autonomisation Économique vise à briser les barrières économiques auxquelles les femmes sont confrontées et à leur fournir les outils nécessaires pour atteindre l'indépendance financière.
            </p>
            <p>
              Nous offrons des formations en entrepreneuriat, un accès au microfinancement, et un accompagnement personnalisé pour aider les femmes à créer et développer leurs entreprises.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Economie;
