import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, Camera, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import PrimaryButton from './PrimaryButton';

// Gallery photos using existing local photos in duplicates
const galleryPhotos = [
  {
    id: 1,
    image: "/images/doctor-hero.png",
    title: "Clinical Consultation",
    badge: "Patient First",
    aspect: "aspect-[3/4]"
  },
  {
    id: 2,
    image: "/images/doctor-about.png",
    title: "Dermatological Procedures",
    badge: "Laser Therapy",
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    image: "/images/clinic.png",
    title: "Pune Aesthetic Clinic",
    badge: "Modern Facility",
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    image: "/images/doctor-about.png",
    title: "Hair & Scalp Rejuvenation",
    badge: "Specialized Therapy",
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    image: "/images/doctor-hero.png",
    title: "Aesthetic Skin Glow",
    badge: "Anti-Aging Care",
    aspect: "aspect-[3/4]"
  },
  {
    id: 6,
    image: "/images/clinic.png",
    title: "Sterilized Procedure Suite",
    badge: "Hygiene Standard",
    aspect: "aspect-[3/4]"
  },
  {
    id: 7,
    image: "/images/doctor-hero.png",
    title: "Patient Care Protocol",
    badge: "Evidence Based",
    aspect: "aspect-[3/4]"
  },
  {
    id: 8,
    image: "/images/doctor-about.png",
    title: "Cosmetic Dermatology",
    badge: "Expert Care",
    aspect: "aspect-[3/4]"
  }
];

// Duplicate gallery array for seamless infinite marquee loop
const marqueeList = [...galleryPhotos, ...galleryPhotos];

const Expertise = ({ onExploreClick }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastY = window.scrollY;
    const updateDirection = () => {
      const currentY = window.scrollY;
      if (currentY > lastY + 5) {
        setScrollDirection('down');
      } else if (currentY < lastY - 5) {
        setScrollDirection('up');
      }
      lastY = currentY > 0 ? currentY : 0;
    };
    window.addEventListener('scroll', updateDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateDirection);
  }, []);

  return (
    <section id="expertise" className="py-8 lg:py-10 bg-mint-light/40 relative overflow-hidden">
      
      {/* HEADER CONTENT */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 mb-8"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
      >
        <div className="flex justify-center">
          <SectionLabel>DOCTOR GALLERY & CLINICAL MOMENTS</SectionLabel>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight uppercase leading-tight">
          DOCTOR IN <span className="text-primary">ACTION</span>
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Explore a visual showcase of Dr. Neha Shinde's clinical practice, specialized treatments, and modern aesthetic environment.
        </p>
      </motion.div>

      {/* 3D CURVED PERSPECTIVE ANIMATED MARQUEE GALLERY */}
      <div className="relative w-full py-8 overflow-hidden perspective-1000">
        
        {/* Subtle Side Vignette Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-mint-light/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-mint-light/90 to-transparent z-20 pointer-events-none" />

        {/* Animated Marquee Track */}
        <motion.div
          className="flex gap-4 sm:gap-6 items-center w-max cursor-grab active:cursor-grabbing"
          animate={{ x: scrollDirection === 'up' ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear'
          }}
        >
          {marqueeList.map((item, index) => {
            // Apply subtle perspective arch transforms to simulate 3D arc wall effect
            const positionInGroup = index % 8;
            let rotateClass = "rotate-0";
            if (positionInGroup === 0 || positionInGroup === 7) rotateClass = "-rotate-3 translate-y-3 sm:translate-y-4";
            else if (positionInGroup === 1 || positionInGroup === 6) rotateClass = "-rotate-1 translate-y-1 sm:translate-y-2";
            else if (positionInGroup === 2 || positionInGroup === 5) rotateClass = "rotate-1 translate-y-0";
            else if (positionInGroup === 3 || positionInGroup === 4) rotateClass = "rotate-3 translate-y-2 sm:translate-y-3";

            return (
              <motion.div
                key={`${item.id}-${index}`}
                onHoverStart={() => setHoveredId(`${item.id}-${index}`)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: -10,
                  zIndex: 30,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className={`relative shrink-0 w-44 sm:w-56 md:w-64 ${item.aspect} rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white border-2 border-navy/20 shadow-[4px_4px_0px_#321427] transition-all duration-300 ${rotateClass}`}
              >
                {/* Photo Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />

                {/* Gradient Overlay & Captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex flex-col justify-end p-4 text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent text-navy text-[10px] font-black uppercase tracking-wider mb-1.5 self-start shadow-xs">
                    {item.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug drop-shadow-xs">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Neo Brutalist Accent Frame on hover */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-primary rounded-[24px] sm:rounded-[32px] pointer-events-none transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* FOOTER TICKER INFORMATION STRIP */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 mt-8">
        <div className="bg-white py-3 px-6 rounded-2xl border-2 border-navy/15 shadow-[3px_3px_0px_#F0D5E2] flex items-center justify-between gap-4 text-xs font-bold text-navy overflow-hidden">
          <div className="flex items-center gap-2 text-primary shrink-0">
            <Camera className="w-4 h-4 text-accent" />
            <span>Clinical Gallery</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-muted font-medium">
            <span className="flex items-center gap-1.5 text-navy">
              <Award className="w-3.5 h-3.5 text-primary" /> Certified Dermatologist
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-navy">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Sterile Environment
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-navy">
              <Heart className="w-3.5 h-3.5 text-primary" /> 5000+ Happy Patients
            </span>
          </div>

          <span className="text-primary font-bold text-xs shrink-0 cursor-pointer hover:underline" onClick={onExploreClick}>
            Book Visit →
          </span>
        </div>
      </div>

    </section>
  );
};

export default Expertise;
