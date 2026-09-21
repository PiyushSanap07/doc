import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Gallery photos using existing local photos
const galleryPhotos = [
  { id: 1, image: '/images/doctor-hero.png', title: 'Clinical Consultation', badge: 'Patient First' },
  { id: 2, image: '/images/doctor-about.png', title: 'Dermatological Procedures', badge: 'Laser Therapy' },
  { id: 3, image: '/images/clinic.png', title: 'Pune Aesthetic Clinic', badge: 'Modern Facility' },
  { id: 4, image: '/images/doctor-about.png', title: 'Hair & Scalp Rejuvenation', badge: 'Specialized Therapy' },
  { id: 5, image: '/images/doctor-hero.png', title: 'Aesthetic Skin Glow', badge: 'Anti-Aging Care' },
  { id: 6, image: '/images/clinic.png', title: 'Sterilized Procedure Suite', badge: 'Hygiene Standard' },
  { id: 7, image: '/images/doctor-hero.png', title: 'Patient Care Protocol', badge: 'Evidence Based' },
  { id: 8, image: '/images/doctor-about.png', title: 'Cosmetic Dermatology', badge: 'Expert Care' },
];

const marqueeList = [...galleryPhotos, ...galleryPhotos];

const Expertise = () => {
  return (
    <section id="expertise" className="py-10 sm:py-14 bg-white border-t border-gray-100">

      {/* Header */}
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-2.5 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center">
          <SectionLabel>DOCTOR GALLERY &amp; CLINICAL MOMENTS</SectionLabel>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Doctor in{' '}
          <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p className="text-sm sm:text-base text-black max-w-xl mx-auto leading-relaxed font-normal">
          Explore a visual showcase of Dr. Neha Shinde's clinical practice, specialized treatments, and modern aesthetic environment.
        </p>
        <div className="pt-1.5">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-md bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-dark transition-all shadow-sm active:scale-95"
          >
            <Camera className="w-4 h-4" />
            View Full Gallery →
          </Link>
        </div>
      </motion.div>

      {/* Marquee Gallery - responsive card widths */}
      <div className="relative w-full py-2 sm:py-3 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-3.5 sm:gap-5 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear' }}
        >
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 w-36 xs:w-40 sm:w-56 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-sm group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-4">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white text-primary text-[10px] sm:text-[11px] font-bold mb-1 sm:mb-1.5 self-start">
                  {item.badge}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">{item.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Expertise;
