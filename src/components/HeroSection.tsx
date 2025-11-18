import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const HeroCarousel = () => {
  const slides = [
    {
      image: heroSlide1,
      title: 'Élever la voix des femmes',
      subtitle: '28 ans d\'impact au service des femmes togolaises',
      cta1: 'Découvrir nos actions',
      cta2: 'Devenir membre',
    },
    {
      image: heroSlide2,
      title: 'Leadership & Autonomisation',
      subtitle: 'Former les leaders de demain, aujourd\'hui',
      cta1: 'Nos programmes',
      cta2: 'Rejoignez-nous',
    },
    {
      image: heroSlide3,
      title: 'Entrepreneuriat Féminin',
      subtitle: 'Accompagner les femmes vers l\'indépendance économique',
      cta1: 'Voir les projets',
      cta2: 'S\'engager',
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/60',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
        }}
        loop={true}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="font-body text-white/90 text-xl md:text-2xl mb-10 font-light"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link 
                        to="/programs" 
                        className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300 shadow-card hover:shadow-[0_6px_25px_rgba(106,27,154,0.25)]"
                      >
                        {slide.cta1}
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 rounded-2xl font-body font-semibold transition-all duration-300 shadow-gold hover:shadow-[0_0_35px_rgba(255,213,79,0.5)]"
                      >
                        {slide.cta2}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 6rem !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
