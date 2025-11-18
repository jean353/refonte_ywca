import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-9xl mb-4 font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </div>
          <h1 className="mb-4 text-4xl font-heading font-bold text-primary-dark">
            Page non trouvée
          </h1>
          <p className="mb-8 text-xl text-text-secondary font-body max-w-md mx-auto">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300 shadow-soft hover:shadow-card"
          >
            <Home className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
