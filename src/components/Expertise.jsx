import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Gallery photos using new galleryimages
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
    <section id="expertise" className="pt-8 sm:pt-10 pb-8 sm:pb-14 bg-white">

      {/* Header */}
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-2 sm:space-y-2.5 mb-5 sm:mb-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex justify-center">
          <SectionLabel>DOCTOR GALLERY &amp; CLINICAL MOMENTS</SectionLabel>
        </div>
        <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
          Doctor in{' '}
          <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p className="text-xs sm:text-base text-black max-w-xl mx-auto leading-relaxed font-normal">
          Explore a visual showcase of Dr. Neha Shinde's clinical practice, specialized treatments, and modern aesthetic environment.
        </p>
        <div className="pt-1">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-lg sm:rounded-md bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-dark transition-all shadow-sm active:scale-95 min-h-[44px]"
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
                alt={`Clinic and procedure ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                width="224"
                height="298"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Expertise;
