import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import SectionLabel from './SectionLabel';

import img1 from '../assets/galleryimages/gallery(1).jpeg';
import img2 from '../assets/galleryimages/gallery(2).jpeg';
import img3 from '../assets/galleryimages/gallery(3).jpeg';
import img4 from '../assets/galleryimages/gallery(4).jpeg';
import img5 from '../assets/galleryimages/gallery(5).jpeg';
import img6 from '../assets/galleryimages/gallery(6).jpeg';
import img7 from '../assets/galleryimages/gallery(7).jpeg';
import img8 from '../assets/galleryimages/gallery(8).jpeg';

const galleryPhotos = [
  { id: 1, image: img1, title: 'Modern Clinic Facility', badge: 'Patient First' },
  { id: 2, image: img2, title: 'Consultation & Diagnostics', badge: 'Expert Care' },
  { id: 3, image: img3, title: 'Dermatological Treatment Room', badge: 'Advanced Tech' },
  { id: 4, image: img4, title: 'Laser & Aesthetics Suite', badge: 'Laser Therapy' },
  { id: 5, image: img5, title: 'Clinical Hygiene & Sterilization', badge: 'Hygiene Standard' },
  { id: 6, image: img6, title: 'Comfortable Waiting Lounge', badge: 'Patient Comfort' },
  { id: 7, image: img7, title: 'Advanced Clinical Care', badge: 'Evidence Based' },
  { id: 8, image: img8, title: 'Specialized Skincare', badge: 'Personalized' },
];

const marqueeList = [...galleryPhotos, ...galleryPhotos];

const Expertise = () => {
  return (
    <section id="expertise" className="relative bg-cream py-10 sm:py-14 lg:py-16 overflow-hidden">

      {/* Header */}
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-center">
          <SectionLabel center>DOCTOR GALLERY &amp; CLINICAL MOMENTS</SectionLabel>
        </div>
        <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-tight tracking-[-0.01em] text-ink">
          The doctor in{' '}
          <em className="font-normal italic text-primary">practice</em>
        </h2>
        <p className="mt-5 text-xs sm:text-base text-muted font-normal leading-[1.85] max-w-xl mx-auto">
          Explore a visual showcase of Dr. Neha Shinde's clinical practice, specialized treatments,
          and modern aesthetic environment.
        </p>
        <div className="mt-8">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-primary hover:text-white min-h-[48px]"
          >
            <Camera className="h-4 w-4" />
            View Full Gallery
            <span aria-hidden className="h-px w-0 bg-white transition-all duration-300 group-hover:w-6" />
          </Link>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full mt-8 sm:mt-10 py-2 overflow-hidden">
        <div aria-hidden className="absolute left-0 top-0 bottom-0 w-10 sm:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div aria-hidden className="absolute right-0 top-0 bottom-0 w-10 sm:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 sm:gap-6 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'linear' }}
        >
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 w-40 xs:w-44 sm:w-64 aspect-[4/5] overflow-hidden bg-white border border-line"
            >
              <img
                src={item.image}
                alt={`${item.title} — Dr. Neha Shinde Skin Clinic`}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                width="256"
                height="320"
                className="w-full h-full object-cover object-center grayscale-[35%] hover:grayscale-0 hover:scale-[1.06] transition-all duration-700"
              />
              {/* Caption reveal */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent px-4 pb-4 pt-10">
                <p className="text-[9px] uppercase tracking-[0.2em] text-gold-light">{item.badge}</p>
                <p className="mt-1 font-display text-sm sm:text-base text-white leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
