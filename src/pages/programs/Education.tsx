import { motion } from "framer-motion";
import { BookOpen, Users, Award, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const Education = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Formations en Leadership",
      description: "Programmes intensifs pour développer les compétences de leadership des jeunes filles.",
    },
    {
      icon: Users,
      title: "Mentorat",
      description: "Accompagnement personnalisé par des femmes leaders expérimentées.",
    },
    {
      icon: Award,
      title: "Bourses d'études",
      description: "Soutien financier pour permettre l'accès à l'éducation supérieure.",
    },
    {
      icon: Lightbulb,
      title: "Ateliers de compétences",
      description: "Développement des compétences en communication, gestion et innovation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
              <BookOpen className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Éducation et Leadership
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Former les leaders de demain à travers l'éducation et le développement des compétences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-body text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              Notre programme d'Éducation et Leadership vise à autonomiser les jeunes filles et les femmes en leur fournissant les outils, les connaissances et le soutien nécessaires pour devenir des leaders dans leurs communautés.
            </p>
            <p>
              Nous croyons que l'éducation est la clé de l'émancipation et du développement. C'est pourquoi nous investissons dans des programmes éducatifs de qualité qui favorisent le développement personnel et professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="py-section bg-background-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos activités"
            title="Comment nous agissons"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl shadow-soft p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <activity.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">
                  {activity.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
