import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import doctorHeroImg from '../assets/images/doctor.png';
import doctorImg2    from '../assets/images/doc2.png';
import doctorImg3    from '../assets/images/doc3.png';

/* ─── Slide Images ────────────────────────────────────────── */
const SLIDES = [doctorHeroImg, doctorImg3, doctorImg2];
const INTERVAL = 3500; // ms per slide

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  /* Auto-advance every INTERVAL ms, loops continuously */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#FDF6F9] via-[#FAF0F5] to-[#F5E6EE] overflow-hidden pt-20 sm:pt-22 lg:pt-16 pb-0"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

          {/* LEFT: Text Content — generously sized to fill hero space */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-7 pt-2 sm:pt-4 pb-4 sm:pb-8 lg:py-10 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {/* Small Label */}
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-primary uppercase">
              Welcome to Dr. Neha Shinde's Clinic
            </p>

            {/* Main Headline - Skincare Quote in Italic Calligraphy */}
            <h1 className="font-['Cormorant_Garamond',_'Playfair_Display',_Georgia,_serif] italic font-semibold text-[1.75rem] xs:text-[2.2rem] sm:text-[2.85rem] lg:text-[3.5rem] xl:text-[3.85rem] text-[#1F1418] leading-[1.2] sm:leading-[1.13] tracking-tight max-w-3xl">
              “Your skin is an investment that speaks for you every day. Nurture it with science, patience, and personalized care.”
            </h1>

            {/* Author Attribution */}
            <div className="flex items-center gap-3 pt-1">
              <span className="inline-block w-8 xs:w-10 sm:w-14 h-[2.5px] bg-primary"></span>
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-wide">
                Dr. Neha Shinde
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Doctor Image Slideshow — rests flush at bottom baseline */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-center items-end self-end mt-1 sm:mt-2 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Slideshow Container — original sizing preserved */}
            <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] lg:max-w-[450px]">
              {SLIDES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Dr. Neha Shinde — Dermatologist & Aesthetic Physician"
                  width="450"
                  height="530"
                  loading="eager"
                  fetchPriority={i === 0 ? 'high' : 'low'}
                  decoding="async"
                  className="w-full h-auto object-contain block select-none pointer-events-none"
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: i === activeIdx ? 1 : 0,
                    zIndex: i === activeIdx ? 2 : 1,
                    transition: 'opacity 0.8s ease-in-out',
                    willChange: 'opacity',
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;