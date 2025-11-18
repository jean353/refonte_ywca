import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const News = () => {
  // Mock data - à remplacer par les données de l'API WordPress
  const articles = [
    {
      id: 1,
      title: "Formation en Leadership : 50 jeunes filles diplômées",
      excerpt: "Le YWCA Togo célèbre la graduation de 50 jeunes filles ayant complété avec succès notre programme de formation en leadership.",
      date: "15 Mars 2024",
      category: "Éducation",
      image: "📚",
    },
    {
      id: 2,
      title: "Lancement du programme d'entrepreneuriat féminin",
      excerpt: "Découvrez notre nouveau programme visant à soutenir 100 femmes entrepreneures dans le développement de leurs activités.",
      date: "10 Mars 2024",
      category: "Économie",
      image: "💼",
    },
    {
      id: 3,
      title: "Journée internationale des droits des femmes 2024",
      excerpt: "Le YWCA Togo organise une série d'événements pour célébrer et promouvoir les droits des femmes au Togo.",
      date: "8 Mars 2024",
      category: "Plaidoyer",
      image: "✊",
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Actualités
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Suivez nos actions, événements et réalisations au service des femmes et des jeunes filles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-cream text-primary text-sm font-body font-semibold rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-text-secondary text-sm font-body">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center text-primary font-body font-semibold group-hover:text-primary-light transition-colors">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
