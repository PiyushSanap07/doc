import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Real-world verified patient reviews for Dr. Neha Shinde's dermatology care
const testimonials = [
  {
    id: 1,
    name: "Pooja Deshmukh",
    treatment: "Acne & Scar Treatment",
    rating: 5,
    comment: "Dr. Neha's treatment transformed my skin completely. Her patient, detailed explanation and customized routine cleared my stubborn cystic acne within weeks.",
  },
  {
    id: 2,
    name: "Rahul Sonawane",
    treatment: "PRP Hair Therapy",
    rating: 5,
    comment: "Outstanding results with PRP therapy. My hair fall reduced drastically after the second session. Very ethical, honest advice without pushing unnecessary treatments.",
  },
  {
    id: 3,
    name: "Snehal Kulkarni",
    treatment: "Pigmentation & Glow",
    rating: 5,
    comment: "The chemical peel and laser toning worked wonders on my sun-tanned hyperpigmentation. Dr. Neha Shinde is Nashik's best dermatologist without a doubt!",
  },
  {
    id: 4,
    name: "Amit Patil",
    treatment: "Eczema & Allergy Care",
    rating: 5,
    comment: "Suffered from chronic skin flare-ups for 2 years. Dr. Neha diagnosed the root cause in the first visit and the relief was almost immediate. Highly recommended.",
  },
  {
    id: 5,
    name: "Ananya Joshi",
    treatment: "Anti-Aging & Skin Boosters",
    rating: 5,
    comment: "Super professional and gentle hands. The clinic atmosphere is pristine and sterilized. My skin feels plump, hydrated, and youthful naturally.",
  },
  {
    id: 6,
    name: "Dr. Sandeep Bhalerao",
    treatment: "Clinical Consultation",
    rating: 5,
    comment: "As a doctor myself, I appreciate Dr. Neha's evidence-based clinical acumen. She respects medical science and genuinely cares for patient safety.",
  }
];

const infiniteTestimonials = [...testimonials, ...testimonials];

const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-14 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <SectionLabel>EXPERIENCE &amp; PATIENT TRUST</SectionLabel>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-black leading-tight mt-0.5">
              Trusted Experience.{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                Proven Results.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-black self-start md:self-auto bg-[#FAF0F5] px-3.5 py-2 rounded-xl border border-primary/15 shadow-2xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span>4.9/5 Rating (500+ Happy Patients)</span>
          </div>
        </div>

        {/* Testimonials Marquee Heading */}
        <div className="flex items-center justify-between mb-3.5 pt-1">
          <div className="flex items-center gap-2">
            <Quote className="w-4 h-4 text-primary" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
              Verified Patient Experiences &amp; Stories
            </h3>
          </div>
          <span className="text-xs text-gray-400 font-semibold hidden sm:inline">
            Real feedback from clinical consultations
          </span>
        </div>

      </div>

      {/* Infinite Slider moving in OPPOSITE direction (left-to-right: '-50%' to '0%') */}
      <div className="relative w-full py-1 overflow-hidden">
        {/* Soft edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-5 items-stretch w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' }}
        >
          {infiniteTestimonials.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[280px] xs:w-[320px] sm:w-[360px] shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Treatment Tag */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-[#FAF0F5] px-2 py-0.5 rounded">
                    {t.treatment}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-black font-normal leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs font-bold text-black">{t.name}</p>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  ✓ Verified Patient
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
