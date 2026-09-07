import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Sparkles, Sun, Feather, Flower2, Clock, ShieldAlert } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';
import DotPattern from './DotPattern';

const iconMap = {
  Sparkles, Sun, Feather, Flower2, Clock, ShieldAlert,
};

const About = () => {
  return (
    <section id="about" className="py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Doctor Photo Frame */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:pt-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
              {/* Top Right Orange Dots */}
              <div className="absolute -top-4 -right-3 z-0">
                <DotPattern rows={4} cols={4} />
              </div>
              {/* Bottom Left Accent Circle */}
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-accent z-0" />

              {/* Photo Frame Container */}
              <div className="relative z-10 w-full h-[360px] sm:h-[420px] bg-primary rounded-3xl overflow-hidden shadow-[5px_5px_0px_#123B53] border-2 border-navy p-1.5">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/images/doctor-about.png"
                    alt="Dr. Neha Shinde Consultation"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Heart Icon */}
              <div className="absolute top-1/2 -right-5 z-20 transform -translate-y-1/2 bg-white p-2.5 rounded-xl shadow-floating border border-mint-border text-primary">
                <HeartPulse className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: About Bio + Areas of Expertise */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Bio Header & Paragraph */}
            <div className="space-y-3">
              <SectionLabel>ABOUT THE DOCTOR</SectionLabel>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                Medicine with knowledge.<br />
                <span className="text-primary">Care with purpose.</span>
              </h2>

              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                {doctorData.aboutText}
              </p>
            </div>

            {/* Areas of Expertise Sub-Section */}
            <div className="pt-2 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-navy">
                  Areas of Expertise & Specializations
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctorData.expertise.map((item) => {
                  const IconComponent = iconMap[item.iconName] || Sparkles;
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="bg-mint-light/70 p-3.5 rounded-xl border-2 border-navy/12 shadow-[2px_2px_0px_#D0F4EB] hover:shadow-[3px_3px_0px_#00B894] hover:border-primary/40 transition-all flex items-start gap-3 h-full group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-navy/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-xs mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-navy group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-[12px] text-muted leading-snug mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
