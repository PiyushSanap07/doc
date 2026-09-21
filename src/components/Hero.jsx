import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users } from 'lucide-react';
import { doctorData } from '../data/portfolioData';

const Hero = ({ onBookClick }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#FDF6F9] via-[#FAF0F5] to-[#F5E6EE] overflow-hidden pt-16 sm:pt-20 lg:pt-16 pb-0"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">

          {/* LEFT: Text Content - 7 cols */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-5 pt-2 pb-5 sm:pb-8 lg:py-12 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Small Label */}
            <p className="text-xs sm:text-sm font-bold tracking-wide text-primary">
              Welcome to Dr. Neha Shinde's Clinic
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-extrabold text-black leading-[1.15] tracking-tight">
              The care that nurtures your{' '}
              <span className="text-primary">skin, hair</span>{' '}
              &amp; confidence
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-black font-normal leading-relaxed max-w-xl">
              {doctorData.tagline}
            </p>

            {/* CTA & Phone Row */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 sm:gap-6 pt-1">
              <button
                onClick={onBookClick}
                className="w-full xs:w-auto text-center px-7 py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-dark transition-all shadow-sm active:scale-95"
              >
                Book Appointment
              </button>

              <div className="flex items-center gap-3 xs:block text-sm pt-1 xs:pt-0">
                <p className="text-gray-500 uppercase text-[10px] font-bold tracking-widest xs:mb-0.5">
                  FOR APPOINTMENT:
                </p>
                <a
                  href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 font-bold text-black hover:text-primary transition-colors text-base"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  {doctorData.clinic.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Doctor Transparent Sticker Only */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-end self-end mt-2 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Floating Patient Stat Badge */}
            <div className="absolute top-2 sm:top-4 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-xs rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-md border border-gray-100 flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Treated</p>
                <p className="text-xs sm:text-sm font-extrabold text-black">5000+ Patients</p>
              </div>
            </div>

            {/* Pure isolated doctor sticker */}
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[430px]">
              <img
                src="/images/doctor-sticker.png"
                alt="Dr. Neha Shinde — Dermatologist & Aesthetic Physician"
                className="w-full h-auto object-contain block select-none pointer-events-none"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;