import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Heart, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Éducation et Leadership",
      description: "Formations en leadership, mentorat et développement des compétences pour les jeunes filles et femmes leaders.",
      link: "/programs/education",
      color: "from-primary to-primary-light",
    },
    {
      icon: TrendingUp,
      title: "Autonomisation Économique",
      description: "Entrepreneuriat féminin, formations professionnelles et accès au financement pour l'indépendance financière.",
      link: "/programs/economie",
      color: "from-secondary to-secondary-dark",
    },
    {
      icon: Heart,
      title: "Santé et Bien-être",
      description: "Programmes de santé reproductive, sensibilisation et accompagnement psychosocial pour les femmes.",
      link: "/programs/sante",
      color: "from-accent-pink to-primary-light",
    },
    {
      icon: Scale,
      title: "Plaidoyer et Droits des Femmes",
      description: "Actions de plaidoyer, sensibilisation aux droits et lutte contre les violences faites aux femmes.",
      link: "/programs/plaidoyer",
      color: "from-primary-dark to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-pink rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Nos Programmes
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Des initiatives holistiques pour l'autonomisation complète des femmes et des jeunes filles au Togo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos domaines d'action"
            title="Des programmes transformateurs"
            description="Chaque programme est conçu pour répondre aux besoins spécifiques des femmes et créer un impact durable dans leurs vies."
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={program.link}>
                  <div className="group h-full bg-card rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden">
                    <div className={`bg-gradient-to-br ${program.color} p-8 text-primary-foreground`}>
                      <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                        <program.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3">{program.title}</h3>
                    </div>
                    <div className="p-8">
                      <p className="font-body text-text-secondary leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <div className="flex items-center text-primary font-body font-semibold group-hover:text-primary-light transition-colors">
                        <span>Découvrir le programme</span>
                        <motion.svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-section bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre impact"
            title="Des résultats concrets"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "10,000+", label: "Bénéficiaires" },
              { number: "50+", label: "Programmes actifs" },
              { number: "25+", label: "Communautés touchées" },
              { number: "100+", label: "Partenaires" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-body text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
