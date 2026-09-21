import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Award, BadgeCheck } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const iconMap = { GraduationCap, Stethoscope, Award, BadgeCheck };

const Qualifications = () => {
  return (
    <section id="qualifications" className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <SectionLabel>QUALIFICATIONS &amp; TIMELINE</SectionLabel>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-black leading-tight mt-0.5">
            Medical Education &amp;{' '}
            <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
              Certification Timeline
            </span>
          </h2>
        </div>

        {/* Timeline Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {doctorData.qualifications.map((item, index) => {
            const IconComp = iconMap[item.icon] || GraduationCap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 hover:border-[#8C486E]/40 hover:shadow-md transition-all group relative overflow-hidden"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#8C486E]/10 to-[#C98664]/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                  <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-primary uppercase bg-[#FAF0F5] px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md">
                    Step 0{index + 1}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-black">{item.period}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black leading-snug">{item.degree}</h3>
                <p className="text-xs sm:text-sm text-black mt-1 sm:mt-1.5 font-normal leading-relaxed">{item.institution}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Qualifications;
