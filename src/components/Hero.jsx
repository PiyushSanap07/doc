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
      className="relative overflow-hidden bg-cream pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 lg:pb-10"
    >
<<<<<<< HEAD
      {/* Ambient glow layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(176,141,87,0.18),transparent_65%)]" />
        <div className="absolute bottom-[-22%] left-[-14%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(140,72,110,0.14),transparent_65%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT: Editorial text — 7 cols */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
=======
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

          {/* LEFT: Text Content — generously sized to fill hero space */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-7 pt-2 sm:pt-4 pb-4 sm:pb-8 lg:py-10 z-10"
            initial={{ opacity: 0, y: 20 }}
>>>>>>> deaf20efb733590d4af6e3b8ae2fa52b4dfbb4ee
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
<<<<<<< HEAD
            {/* Eyebrow */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span aria-hidden className="h-px w-6 sm:w-9 bg-gold/70" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Dermatology &amp; Aesthetics · Nashik
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-[2.3rem] xs:text-[2.65rem] sm:text-[3.4rem] lg:text-[4.1rem] font-medium leading-[1.07] tracking-[-0.015em] text-ink">
              The care that nurtures your{' '}
              <em className="font-normal italic text-primary">skin, hair</em>{' '}
              &amp; confidence
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-muted font-normal leading-[1.75] max-w-xl mx-auto lg:mx-0">
              {doctorData.tagline}
            </p>

            {/* Credentials */}
            <p className="mt-7 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-light">
              MD Dermatology &nbsp;·&nbsp; Fellowship in Aesthetic Medicine
            </p>

            {/* CTA & Phone */}
            <div className="mt-9 flex flex-col xs:flex-row items-stretch xs:items-center gap-5 sm:gap-8 justify-center lg:justify-start">
              <button
                onClick={onBookClick}
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 sm:px-10 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-primary-dark active:scale-[0.98] min-h-[52px] cursor-pointer"
              >
                Book Appointment
                <span aria-hidden className="h-px w-6 bg-white/50 transition-all duration-300 group-hover:w-9" />
              </button>

              <a
                href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                className="group inline-flex items-center justify-center lg:justify-start gap-3.5 min-h-[48px] hover:text-primary transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span className="flex flex-col items-center lg:items-start text-left">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-muted-light">For appointments</span>
                  <span className="font-display text-base sm:text-lg leading-tight text-ink transition-colors duration-300 group-hover:text-primary">
                    {doctorData.clinic.phone}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Doctor portrait in an arch frame — 5 cols */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
=======
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
>>>>>>> deaf20efb733590d4af6e3b8ae2fa52b4dfbb4ee
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
<<<<<<< HEAD
            {/* Offset gold outline arch for depth */}
            <div
              aria-hidden
              className="hidden sm:block absolute inset-x-4 top-8 bottom-0 rounded-t-[9999px] rounded-b-[3rem] border border-gold/30 pointer-events-none"
            />

            <div className="organic-arch relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] overflow-hidden bg-gradient-to-b from-white to-cream-deep border border-line px-6 pt-8 sm:px-8 sm:pt-10">
              <img
                src={doctorHeroImg}
                alt="Dr. Neha Shinde — Dermatologist & Aesthetic Physician"
                width="430"
                height="500"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain block select-none pointer-events-none"
              />
=======
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
>>>>>>> deaf20efb733590d4af6e3b8ae2fa52b4dfbb4ee
            </div>

            {/* Floating credential badge */}
            <div className="absolute -left-1 xs:-left-2 sm:left-2 bottom-8 sm:bottom-14 z-20 bg-white border border-line px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_24px_50px_-28px_rgba(28,18,25,0.4)]">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-cream-deep text-primary flex items-center justify-center shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-light">Treated</p>
                  <p className="font-display text-sm sm:text-base text-ink">5000+ Patients</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hairline + signature strip */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="lux-rule mt-6 sm:mt-8" />
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-3 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-light">
          <span>{doctorData.role}</span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <span>{doctorData.clinic.city}</span>
          <span className="hidden h-3 w-px bg-line sm:block" />
          <span>{doctorData.clinic.hours}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
