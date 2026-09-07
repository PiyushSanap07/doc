import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, Award, BadgeCheck, Calendar } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const iconMap = { GraduationCap, Stethoscope, Award, BadgeCheck };

const Qualifications = () => {
  return (
    <section id="qualifications" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-left max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>QUALIFICATIONS & TIMELINE</SectionLabel>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
            Medical Education & Certification Timeline
          </h2>
        </motion.div>

        {/* Timeline Static Grid Container */}
        <div className="relative py-2">
          
          {/* Connecting Horizontal Line across timeline (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-accent to-primary z-0 rounded-full opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {doctorData.qualifications.map((item, index) => {
              const IconComp = iconMap[item.icon] || GraduationCap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Timeline Badge Node */}
                  <div className="flex items-center gap-2 mb-3 z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-primary border-2 border-navy text-primary group-hover:text-white shadow-[3px_3px_0px_#123B53] transition-all duration-300 flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Qualification Detail Card */}
                  <div className="w-full bg-white p-5 rounded-2xl border-2 border-navy/20 shadow-[4px_4px_0px_#D0F4EB] group-hover:shadow-[5px_5px_0px_#00B894] group-hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-black tracking-widest text-primary uppercase bg-mint px-2.5 py-0.5 rounded-md inline-block">
                          Step 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-navy bg-accent/20 px-2 py-0.5 rounded-full border border-accent/30">
                          <Calendar className="w-3 h-3 text-accent" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-navy group-hover:text-primary transition-colors leading-snug">
                        {item.degree}
                      </h3>
                      
                      <p className="text-xs text-muted font-semibold mt-1">
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
