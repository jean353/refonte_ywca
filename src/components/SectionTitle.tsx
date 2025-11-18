import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle = ({ subtitle, title, description, center = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center mb-12" : "mb-12"}
    >
      {subtitle && (
        <div className={`inline-block mb-3 px-4 py-2 bg-accent-cream rounded-full ${center ? "" : "ml-0"}`}>
          <span className="font-body text-primary font-semibold text-sm uppercase tracking-wide">
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
        {title}
      </h2>
      
      <div className={`h-1 w-24 bg-gradient-to-r from-secondary to-secondary-dark rounded-full mb-6 ${center ? "mx-auto" : ""}`} />
      
      {description && (
        <p className={`font-body text-lg text-text-secondary leading-relaxed max-w-3xl ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
