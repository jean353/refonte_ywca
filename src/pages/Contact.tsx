import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl shadow-card p-8"
            >
              <h2 className="font-heading text-3xl font-bold text-primary-dark mb-6">
                Envoyez-nous un message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block font-body text-text-primary mb-2 font-medium">Nom complet</label>
                  <Input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full rounded-2xl border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-body text-text-primary mb-2 font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="votre.email@exemple.com"
                    className="w-full rounded-2xl border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-body text-text-primary mb-2 font-medium">Sujet</label>
                  <Input 
                    type="text" 
                    placeholder="Sujet de votre message"
                    className="w-full rounded-2xl border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-body text-text-primary mb-2 font-medium">Message</label>
                  <Textarea 
                    placeholder="Votre message..."
                    rows={6}
                    className="w-full rounded-2xl border-border focus:ring-primary"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground rounded-2xl font-body font-semibold py-6 transition-all duration-300 shadow-soft hover:shadow-card"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary-dark mb-6">
                  Informations de contact
                </h2>
                <p className="font-body text-text-secondary leading-relaxed mb-8">
                  Vous pouvez nous contacter par téléphone, email ou en visitant nos bureaux. Notre équipe est disponible pour répondre à vos questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-dark mb-1">Adresse</h3>
                    <p className="font-body text-text-secondary">
                      Lomé, Togo<br />
                      Quartier Administratif
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-dark mb-1">Téléphone</h3>
                    <p className="font-body text-text-secondary">
                      +228 XX XX XX XX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-dark mb-1">Email</h3>
                    <p className="font-body text-text-secondary">
                      contact@ywcatogo.org
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-card h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <p className="font-body text-text-secondary">📍 Carte Google Maps</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
