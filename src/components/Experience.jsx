import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Mic, Users, ShieldCheck, Presentation, FileText } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const statIcons = [Award, BookOpen, Mic, Users];
const achievementIcons = [ShieldCheck, Presentation, FileText];

const Experience = () => {
  return (
    <section id="experience" className="py-10 lg:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-left max-w-2xl mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-mint-light p-5 rounded-2xl border-2 border-navy/12 shadow-[3px_3px_0px_#D0F4EB] hover:shadow-[4px_4px_0px_#00B894] flex flex-col items-start group hover:bg-mint transition-all duration-300"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-white p-5 rounded-2xl border-2 border-navy/15 shadow-[3px_3px_0px_#D0F4EB] hover:shadow-[4px_4px_0px_#00B894] hover:border-primary/40 transition-all duration-300"
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
