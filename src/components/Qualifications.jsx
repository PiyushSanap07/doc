import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Award, BadgeCheck } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const iconMap = { GraduationCap, Stethoscope, Award, BadgeCheck };

const Qualifications = () => {
  return (
    <section id="qualifications" className="relative bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>QUALIFICATIONS &amp; TIMELINE</SectionLabel>
          <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink">
            Medical education &amp;{' '}
            <em className="font-normal italic text-primary">certification timeline</em>
          </h2>
        </motion.div>

        {/* Editorial timeline: continuous hairline with markers */}
        <div className="relative mt-8 sm:mt-10">
          {/* Connecting rule — desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-line"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
            {doctorData.qualifications.map((item, index) => {
              const IconComp = iconMap[item.icon] || GraduationCap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative pl-6 lg:pl-0"
                >
                  {/* Marker */}
                  <div className="absolute left-0 top-[5px] lg:static lg:mb-8 flex items-center gap-3">
                    <span
                      aria-hidden
                      className="block h-[15px] w-[15px] shrink-0 rounded-full border border-gold bg-white transition-colors duration-300 group-hover:bg-gold"
                    />
                    <span className="lg:hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {item.period}
                    </span>
                  </div>

                  {/* Card */}
                  <div>
                    <span className="hidden lg:inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {item.period}
                    </span>

                    <div className="hidden lg:flex h-11 w-11 items-center justify-center text-primary transition-colors duration-300 group-hover:text-gold">
                      <IconComp className="h-5 w-5" strokeWidth={1.25} />
                    </div>

                    <div className="lg:mt-5">
                      <h3 className="font-display text-lg sm:text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                        {item.degree}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted font-normal leading-[1.8]">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
