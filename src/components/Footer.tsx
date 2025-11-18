import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-heading font-bold text-primary text-lg">
                Y
              </div>
              <div className="font-heading">
                <div className="font-bold text-lg">YWCA Togo</div>
              </div>
            </div>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Autonomisation des femmes et des jeunes filles à travers l'éducation, le leadership et le plaidoyer.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Nos programmes
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Nos programmes</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/programs/education" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Éducation et leadership
                </Link>
              </li>
              <li>
                <Link to="/programs/economie" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Autonomisation économique
                </Link>
              </li>
              <li>
                <Link to="/programs/sante" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Santé et bien-être
                </Link>
              </li>
              <li>
                <Link to="/programs/plaidoyer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Plaidoyer et droits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Lomé, Togo</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+228 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:contact@ywcatogo.org" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  contact@ywcatogo.org
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center font-body">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} YWCA Togo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
