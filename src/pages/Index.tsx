import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Heart, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ActionCard from "@/components/ActionCard";

const Index = () => {
  const actionAreas = [
    {
      icon: BookOpen,
      title: "Éducation et Leadership",
      description: "Former les leaders de demain à travers des programmes éducatifs innovants et le développement des compétences en leadership.",
      link: "/programs/education",
    },
    {
      icon: TrendingUp,
      title: "Autonomisation Économique",
      description: "Soutenir l'entrepreneuriat féminin et l'accès aux opportunités économiques pour une indépendance financière durable.",
      link: "/programs/economie",
    },
    {
      icon: Heart,
      title: "Santé et Bien-être",
      description: "Promouvoir la santé reproductive, mentale et physique des femmes et des jeunes filles à travers des initiatives ciblées.",
      link: "/programs/sante",
    },
    {
      icon: Scale,
      title: "Plaidoyer et Droits",
      description: "Défendre les droits des femmes et plaider pour l'égalité des genres à tous les niveaux de la société togolaise.",
      link: "/programs/plaidoyer",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-section bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Qui sommes-nous ?"
                title="YWCA Togo"
                description="Le YWCA Togo est une organisation dédiée à l'autonomisation des femmes et des jeunes filles, œuvrant pour créer un environnement où chacune peut s'épanouir, développer son potentiel et contribuer positivement à la société."
                center={false}
              />
              
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Depuis notre création, nous avons touché des milliers de vies à travers nos programmes d'éducation, de santé, d'autonomisation économique et de plaidoyer pour les droits des femmes.
                </p>
                <p>
                  Notre approche holistique garantit que chaque femme et jeune fille a accès aux ressources, aux connaissances et au soutien nécessaires pour transformer sa vie et celle de sa communauté.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="font-body text-text-secondary text-sm">Bénéficiaires</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="font-body text-text-secondary text-sm">Programmes</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="font-body text-text-secondary text-sm">Ans d'action</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary-light overflow-hidden shadow-card">
                <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👭</div>
                    <p className="font-heading text-2xl font-semibold">Ensemble, nous sommes plus fortes</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-3xl shadow-gold -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-pink rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Areas */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos domaines d'action"
            title="Comment nous agissons"
            description="Découvrez nos programmes dédiés à l'autonomisation des femmes et des jeunes filles au Togo."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {actionAreas.map((area, index) => (
              <ActionCard key={area.title} {...area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Rejoignez notre mission
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Ensemble, nous pouvons créer un avenir où chaque femme et jeune fille au Togo peut réaliser son plein potentiel. Rejoignez-nous dans cette mission transformatrice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300 shadow-gold hover:shadow-[0_0_35px_rgba(255,213,79,0.5)]"
              >
                Devenir membre
              </a>
              <a
                href="/programs"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300"
              >
                Découvrir nos programmes
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
