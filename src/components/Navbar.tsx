import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    {
      name: "Nos programmes",
      path: "/programs",
      submenu: [
        { name: "Éducation et leadership", path: "/programs/education" },
        { name: "Autonomisation économique", path: "/programs/economie" },
        { name: "Santé et bien-être", path: "/programs/sante" },
        { name: "Plaidoyer et droits", path: "/programs/plaidoyer" },
      ],
    },
    { name: "Actualités", path: "/news" },
    { name: "Galerie", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-heading font-bold text-primary-foreground text-xl">
              Y
            </div>
            <div className="font-heading">
              <div className="text-primary-dark font-bold text-xl leading-tight">
                YWCA
              </div>
              <div className="text-text-secondary text-sm">Togo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className={`font-body flex items-center space-x-1 transition-colors ${
                        location.pathname.startsWith(link.path)
                          ? "text-primary font-semibold"
                          : "text-text-primary hover:text-primary"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background rounded-2xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-3 text-text-primary hover:bg-accent-cream hover:text-primary transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-body transition-colors relative ${
                      location.pathname === link.path
                        ? "text-primary font-semibold"
                        : "text-text-primary hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-2.5 rounded-2xl font-body font-semibold transition-all duration-300 shadow-soft hover:shadow-card"
            >
              Nous rejoindre
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setProgramsOpen(!programsOpen)}
                        className="w-full flex items-center justify-between text-text-primary font-body py-2"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            programsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {programsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 mt-2"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                to={sublink.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-text-secondary hover:text-primary py-2"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block font-body py-2 ${
                        location.pathname === link.path
                          ? "text-primary font-semibold"
                          : "text-text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-primary hover:bg-primary-light text-primary-foreground text-center px-6 py-3 rounded-2xl font-body font-semibold transition-all duration-300"
              >
                Nous rejoindre
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
