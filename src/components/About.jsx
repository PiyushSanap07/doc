import React from 'react';
import {
  HeartPulse,
  Sparkles,
  Sun,
  Feather,
  Flower2,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';
import DotPattern from './DotPattern';

const iconMap = {
  Sparkles,
  Sun,
  Feather,
  Flower2,
  Clock,
  ShieldAlert,
};

const About = () => {
  return (
    <section
      id="about"
      className="py-8 lg:py-10 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* =====================================================
              LEFT — DOCTOR PHOTO
          ====================================================== */}
          <motion.div
            className="lg:col-span-4 relative flex justify-start items-stretch h-full w-full"
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] lg:max-w-none h-[400px] sm:h-[450px] lg:h-full">
              {/* Orange Dots */}
              <div className="absolute -top-4 -right-3 z-0">
                <DotPattern rows={4} cols={4} />
              </div>

              {/* Orange Circle */}
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-accent z-0" />

              {/* PHOTO FRAME */}
              <div className="relative z-10 w-full h-full bg-primary rounded-3xl overflow-hidden shadow-[5px_5px_0px_#321427] border-2 border-navy p-1.5">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/images/doctor-about.png"
                    alt="Dr. Neha Shinde Consultation"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Heart */}
              <div className="absolute top-1/2 -right-4 z-20 -translate-y-1/2 bg-white p-2.5 rounded-xl shadow-floating border border-mint-border text-primary">
                <HeartPulse className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — ABOUT INFORMATION
          ====================================================== */}
          <motion.div
            className="lg:col-span-8 lg:pl-9 text-left flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.05 }}
          >
            {/* ABOUT HEADER */}
            <div className="space-y-2">
              <SectionLabel>ABOUT THE DOCTOR</SectionLabel>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.45rem] xl:text-[2.7rem] font-extrabold text-navy leading-[1.05] tracking-tight">
                Medicine with knowledge.
                <br />
                <span className="text-primary">Care with purpose.</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] lg:text-[16px] text-muted leading-[1.4] max-w-none">
                {doctorData.aboutText}
              </p>
            </div>

            {/* EXPERTISE */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              {/* Expertise Heading */}
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent shrink-0" />
                <h3 className="text-lg sm:text-xl font-extrabold text-navy">
                  Areas of Expertise & Specializations
                </h3>
              </div>

              {/* EXPERTISE CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {doctorData.expertise.map((item) => {
                  const IconComponent = iconMap[item.iconName] || Sparkles;

                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{
                        y: -2,
                        scale: 1.01
                      }}
                      className="bg-mint-light/70 px-3 py-2 rounded-xl border-2 border-navy/12 shadow-[2px_2px_0px_#F0D5E2] hover:shadow-[3px_3px_0px_#8C486E] hover:border-primary/40 transition-all flex items-center gap-3 min-h-[64px] group"
                    >
                      {/* ICON */}
                      <div className="w-8 h-8 rounded-lg bg-white border border-navy/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-xs">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* CARD CONTENT */}
                      <div className="min-w-0">
                        <h4 className="text-[13px] sm:text-[14px] font-bold text-navy group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-muted leading-tight mt-0.5">
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