import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ActionCard = ({ icon: Icon, title, description, link, index }: ActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link}>
        <div className="group bg-card rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 p-8 h-full hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-300">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h3 className="font-heading text-2xl font-semibold text-primary-dark mb-4">
            {title}
          </h3>
          
          <p className="font-body text-text-secondary leading-relaxed">
            {description}
          </p>

          <div className="mt-6 flex items-center text-primary font-body font-semibold group-hover:text-primary-light transition-colors">
            <span>En savoir plus</span>
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ActionCard;
