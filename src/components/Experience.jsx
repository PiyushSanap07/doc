import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Mic, Users, ShieldCheck, Presentation, FileText } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const statIcons = [Award, BookOpen, Mic, Users];
const achievementIcons = [ShieldCheck, Presentation, FileText];

const Experience = () => {
  return (
    <section id="experience" className="py-8 lg:py-10 bg-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          className="text-left max-w-2xl mb-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          <SectionLabel>EXPERIENCE & ACHIEVEMENTS</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
            Trusted Experience. Proven Results.
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {doctorData.stats.map((stat, idx) => {
            const IconComp = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 100, damping: 13, delay: idx * 0.07 }}
                className="bg-mint-light p-5 rounded-2xl border-2 border-navy/12 shadow-[3px_3px_0px_#F0D5E2] hover:shadow-[4px_4px_0px_#8C486E] flex flex-col items-start group hover:bg-mint transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-primary flex items-center justify-center mb-2.5 shadow-xs group-hover:scale-110 transition-transform">
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-3xl font-black text-primary leading-none">{stat.value}</span>
                <span className="text-xs font-semibold text-navy mt-1.5">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctorData.achievements.map((item, idx) => {
            const AchIcon = achievementIcons[idx % achievementIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 95, damping: 13, delay: 0.1 + idx * 0.08 }}
                className="bg-white p-5 rounded-2xl border-2 border-navy/15 shadow-[3px_3px_0px_#F0D5E2] hover:shadow-[4px_4px_0px_#8C486E] hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-mint text-primary flex items-center justify-center mb-3">
                  <AchIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-navy mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
