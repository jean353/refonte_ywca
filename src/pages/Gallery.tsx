import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const Gallery = () => {
  const images = [
    { id: 1, category: "Éducation", emoji: "👩‍🎓" },
    { id: 2, category: "Événements", emoji: "🎉" },
    { id: 3, category: "Formations", emoji: "💻" },
    { id: 4, category: "Communauté", emoji: "🤝" },
    { id: 5, category: "Leadership", emoji: "👑" },
    { id: 6, category: "Santé", emoji: "🏥" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent-pink via-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Galerie
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Découvrez nos actions à travers des images et des moments inspirants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos moments"
            title="Galerie photos"
            description="Explorez les moments forts de nos programmes et événements."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-8xl">
                  {image.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
