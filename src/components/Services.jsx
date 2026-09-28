import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { serviceCategories } from '../data/servicesData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

// Category accent colors matching the clean, light aesthetic
const categoryAccents = {
  'peels': { 
    bg: 'bg-rose-50', 
    border: 'border-rose-200', 
    titleColor: 'text-rose-700', 
    hoverBg: 'hover:bg-rose-50',
    itemHoverText: 'hover:text-rose-900'
  },
  'facials': { 
    bg: 'bg-violet-50', 
    border: 'border-violet-200', 
    titleColor: 'text-violet-700', 
    hoverBg: 'hover:bg-violet-50',
    itemHoverText: 'hover:text-violet-900'
  },
  'hair-scalp': { 
    bg: 'bg-amber-50', 
    border: 'border-amber-200', 
    titleColor: 'text-amber-700', 
    hoverBg: 'hover:bg-amber-50',
    itemHoverText: 'hover:text-amber-900'
  },
  'energy-based': { 
    bg: 'bg-sky-50', 
    border: 'border-sky-200', 
    titleColor: 'text-sky-700', 
    hoverBg: 'hover:bg-sky-50',
    itemHoverText: 'hover:text-sky-900'
  },
  'injectables': { 
    bg: 'bg-emerald-50', 
    border: 'border-emerald-200', 
    titleColor: 'text-emerald-700', 
    hoverBg: 'hover:bg-emerald-50',
    itemHoverText: 'hover:text-emerald-900'
  },
  'other-procedures': { 
    bg: 'bg-orange-50', 
    border: 'border-orange-200', 
    titleColor: 'text-orange-700', 
    hoverBg: 'hover:bg-orange-50',
    itemHoverText: 'hover:text-orange-900'
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
};

const Services = () => {
  const handleBookClick = () => {
    window.location.href = "tel:+917498314453";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark flex flex-col justify-between">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1">
        {/* Compact Hero Banner */}
        <section className="relative pt-24 pb-6 md:pt-28 md:pb-8 overflow-hidden">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-mint/50 via-mint-light/40 to-white pointer-events-none" />
          
          <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black tracking-widest text-primary uppercase bg-white/80 backdrop-blur-xs px-3.5 py-1 rounded-full border border-mint-border mb-3">
                <Sparkles className="w-3 h-3" />
                OUR TREATMENTS
              </span>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-tight">
                Explore Our{' '}
                <span className="text-primary relative inline-block">
                  Services
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/30" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5Q50 1 100 5T199 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <p className="mt-2 text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed">
                Where advanced technology meets personalized skin and hair care. Discover treatments tailored for your unique needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Optimized Unified Services Grid - Full Page Fit */}
        <section className="pb-12 md:pb-16 pt-2">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 
              All 6 categories in one seamless grid:
              - xl screens (desktop): 6 columns = all 6 cards fit in 1 balanced row across the full screen!
              - md to lg screens (laptops/tablets): 3 columns = 2 rows of 3 cards (3 x 2 = 6), fully balanced!
              - sm screens (tablets): 2 columns = 3 rows of 2 cards (2 x 3 = 6), fully balanced!
              - mobile: 1 column
              No isolated card below, no awkward gap, page-fit without excessive scrolling.
            */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4.5 items-stretch"
            >
              {serviceCategories.map((category) => {
                const accent = categoryAccents[category.id] || categoryAccents['peels'];
                
                return (
                  <motion.div
                    key={category.id}
                    variants={cardVariants}
                    className={`group bg-white rounded-2xl border ${accent.border} shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between h-full`}
                  >
                    <div className="flex flex-col flex-1">
                      {/* Category Header - Uniform height & centered alignment */}
                      <div className={`px-3 py-3 sm:px-4 sm:py-3.5 border-b ${accent.border} ${accent.bg} min-h-[50px] flex items-center justify-center text-center`}>
                        <h2 className={`text-sm sm:text-[14px] font-black uppercase tracking-wider ${accent.titleColor} leading-tight`}>
                          {category.title}
                        </h2>
                      </div>

                      {/* Services List - Slightly increased font size */}
                      <div className="p-2.5 sm:p-3 space-y-1 flex-1 flex flex-col">
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className={`flex items-center justify-between gap-1.5 px-3 py-2.5 rounded-xl text-[13.5px] sm:text-sm font-semibold text-navy/90 ${accent.hoverBg} ${accent.itemHoverText} hover:text-navy transition-all duration-150 group/item`}
                          >
                            <span className="leading-snug">{service.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-muted-light group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all duration-150 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Subtle bottom accent bar */}
                    <div className={`h-1 w-full ${accent.bg}`} />
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
