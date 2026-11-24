import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const testimonials = [
  {
    id: 1,
    name: "Pooja Deshmukh",
    treatment: "Acne & Scar Treatment",
    rating: 5,
    comment: "Dr. Neha took the time to explain my acne and put together a routine I could follow consistently. I felt heard at every visit.",
  },
  {
    id: 2,
    name: "Rahul Sonawane",
    treatment: "PRP Hair Therapy",
    rating: 5,
    comment: "The PRP sessions and the advice on hair care were explained clearly. I appreciated the ethical, honest guidance without any pressure.",
  },
  {
    id: 3,
    name: "Snehal Kulkarni",
    treatment: "Pigmentation & Glow",
    rating: 5,
    comment: "The chemical peel and laser toning were explained clearly before we started, and my pigmentation was reviewed carefully at each follow-up.",
  },
  {
    id: 4,
    name: "Amit Patil",
    treatment: "Eczema & Allergy Care",
    rating: 5,
    comment: "After chronic skin flare-ups, I appreciated how carefully my history was reviewed and how clearly the treatment plan and follow-up were explained.",
  },
  {
    id: 5,
    name: "Ananya Joshi",
    treatment: "Anti-Aging & Skin Boosters",
    rating: 5,
    comment: "The clinic was clean and comfortable, and the skin booster session and aftercare instructions were explained patiently.",
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
    <section id="experience" className="relative bg-cream py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <SectionLabel>EXPERIENCE &amp; PATIENT TRUST</SectionLabel>
            <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink">
              Consultation-led care.{' '}
              <em className="font-normal italic text-primary">Clear guidance.</em>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto border border-line bg-white px-5 py-3 shrink-0">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold stroke-gold" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-ink whitespace-nowrap">
              Patient Feedback &nbsp;·&nbsp; Private Consultations
            </span>
          </div>
        </motion.div>

        {/* Stats — editorial hairline columns */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-0">
          {doctorData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`px-0 sm:px-6 lg:px-8 ${idx > 0 ? "sm:border-l sm:border-line" : "sm:pl-0"} py-2`}
            >
              <p className="font-display text-4xl sm:text-5xl font-medium leading-none text-primary">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.16em] text-muted-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 sm:mt-12 flex items-center gap-3.5">
          <Quote className="h-4 w-4 text-gold shrink-0" />
          <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-ink">
            Patient Testimonials &amp; Stories
          </h3>
          <span aria-hidden className="hidden sm:block h-px flex-1 bg-line" />
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative w-full mt-8 py-2 overflow-hidden">
        <div aria-hidden className="absolute left-0 top-0 bottom-0 w-10 sm:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div aria-hidden className="absolute right-0 top-0 bottom-0 w-10 sm:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 items-stretch w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 50, ease: 'linear' }}
        >
          {infiniteTestimonials.map((t, index) => (
            <figure
              key={`${t.id}-${index}`}
              className="w-[290px] xs:w-[330px] sm:w-[380px] shrink-0 lux-card px-6 py-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex text-gold shrink-0">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold stroke-gold" />
                    ))}
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary text-right">
                    {t.treatment}
                  </span>
                </div>
                <blockquote className="font-display text-sm sm:text-base leading-[1.75] text-ink italic">
                  &ldquo;{t.comment}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 pt-4 border-t border-line flex items-center justify-between gap-3">
                <span className="font-display text-sm text-ink">{t.name}</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gold whitespace-nowrap">
                  Patient Feedback
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
