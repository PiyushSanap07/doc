import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import SectionLabel from './SectionLabel';

// Curated selection — each maps to a real service so copy, image and
// category stay in sync with src/data/servicesData.js
const FEATURED = [
  {
    slug: 'acne-peel',
    title: 'Acne & Acne Scars',
    blurb: 'Medical acne control, chemical peels and laser resurfacing for lasting clarity.',
  },
  {
    slug: 'yellow-peel',
    title: 'Pigmentation & Skin Tone',
    blurb: 'Targeted correction for melasma, sun spots and uneven skin tone.',
  },
  {
    slug: 'prp-injection-hair',
    title: 'Hair & Scalp Disorders',
    blurb: 'PRP therapy, hair fall control, scalp rejuvenation and alopecia care.',
  },
  {
    slug: 'fillers',
    title: 'Cosmetic Dermatology',
    blurb: 'Botox, fillers and micro-needling for refined, natural-looking results.',
  },
  {
    slug: 'hifu',
    title: 'Anti-Aging Treatments',
    blurb: 'Collagen-boosting and skin tightening protocols for visible renewal.',
  },
  {
    slug: 'q-switch-laser',
    title: 'Laser Treatments',
    blurb: 'Advanced Q-switched and fractional lasers for scars, tone and clarity.',
  },
];

const treatments = FEATURED.map((item) => ({
  ...item,
  service: getServiceBySlug(item.slug),
})).filter((item) => item.service);

const Treatments = ({ onBookClick }) => {
  return (
    <section
      id="treatments"
      className="relative bg-white border-y border-line py-10 sm:py-14 lg:py-16"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <SectionLabel>SIGNATURE TREATMENTS</SectionLabel>
            <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink">
              Clinical expertise across{' '}
              <em className="font-normal italic text-primary">skin &amp; hair</em>
            </h2>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-3 self-start md:self-auto border border-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:bg-primary hover:text-white min-h-[48px] shrink-0"
          >
            All Services
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {treatments.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/services/${item.slug}`}
                className="group lux-card block h-full overflow-hidden flex flex-col"
              >
                <div className="relative h-40 sm:h-44 overflow-hidden bg-cream-deep">
                  <img
                    src={item.service.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  <span className="absolute left-0 top-0 bg-white/95 backdrop-blur-xs px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.service.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted font-normal leading-[1.8]">
                    {item.blurb}
                  </p>

                  <span className="mt-5 pt-4 border-t border-line inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Explore
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={onBookClick}
            className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-primary-dark active:scale-[0.98] min-h-[52px] w-full xs:w-auto cursor-pointer"
          >
            Book Appointment
            <span aria-hidden className="h-px w-6 bg-white/50 transition-all duration-300 group-hover:w-9" />
          </button>
          <p className="text-[10px] sm:text-xs text-muted font-normal text-center xs:text-left max-w-xs">
            Not sure which treatment suits you? Dr. Shinde assesses every skin concern personally
            before recommending a plan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
