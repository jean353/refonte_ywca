import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Nous agissons avec empathie et bienveillance envers toutes les femmes et jeunes filles.",
    },
    {
      icon: Users,
      title: "Solidarité",
      description: "Ensemble, nous créons une communauté forte et solidaire pour l'autonomisation collective.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos programmes et initiatives pour un impact maximal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              À propos du YWCA Togo
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Une organisation engagée pour l'autonomisation des femmes et des jeunes filles depuis plus de 15 ans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre histoire"
            title="Plus de 15 ans d'engagement"
            description="Découvrez le parcours du YWCA Togo et notre impact sur les communautés togolaises."
          />

          <div className="mt-12 space-y-6 font-body text-text-secondary leading-relaxed max-w-4xl mx-auto">
            <p className="text-lg">
              Le YWCA Togo a été fondé avec une vision claire : créer un monde où chaque femme et jeune fille peut réaliser son plein potentiel sans barrières ni discrimination.
            </p>
            <p className="text-lg">
              Au fil des années, nous avons développé des programmes innovants dans l'éducation, la santé, l'autonomisation économique et le plaidoyer, touchant des milliers de vies à travers tout le pays.
            </p>
            <p className="text-lg">
              Notre approche holistique et communautaire garantit un impact durable et transformateur pour les femmes et leurs familles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-section bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl shadow-card p-8"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-dark mb-4">Notre Mission</h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Autonomiser les femmes et les jeunes filles du Togo en leur fournissant les outils, les ressources et le soutien nécessaires pour développer leur leadership, améliorer leur santé, accéder aux opportunités économiques et défendre leurs droits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl shadow-card p-8"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-dark mb-4">Notre Vision</h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Un Togo où chaque femme et jeune fille jouit de l'égalité des chances, de la dignité et du respect, et où elle peut contribuer pleinement au développement de sa communauté et de son pays.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos valeurs"
            title="Ce qui nous guide"
            description="Les principes fondamentaux qui orientent notre action quotidienne."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary-dark mb-3">{value.title}</h3>
                <p className="font-body text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-section bg-gradient-to-br from-accent-cream to-accent-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre équipe"
            title="Des leaders passionnées"
            description="Rencontrez les femmes dévouées qui rendent notre mission possible."
          />

          <div className="mt-12 text-center">
            <p className="font-body text-text-secondary mb-8 max-w-2xl mx-auto">
              Notre équipe est composée de professionnelles passionnées, de bénévoles engagées et de leaders communautaires qui travaillent ensemble pour créer un impact positif et durable.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300 shadow-card"
            >
              Rejoindre l'équipe
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
