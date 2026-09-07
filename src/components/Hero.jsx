import React from 'react';
import { motion } from 'framer-motion';
import { Phone, GraduationCap, Stethoscope, Briefcase, Heart, Smile } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import DotPattern from './DotPattern';
import FloatingBadge from './FloatingBadge';

const Hero = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-gradient-to-b from-mint-light via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          
          {/* LEFT COLUMN: Slides in from LEFT (re-triggers continuously on scroll) */}
          <motion.div
            className="flex-1 max-w-xl space-y-4 text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest text-primary uppercase bg-mint px-3 py-1.5 rounded-full border border-mint-border">
                {doctorData.eyebrow}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy tracking-tight leading-[1.1]">
                {doctorData.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-primary">
                {doctorData.role}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-[15px] sm:text-base text-muted max-w-lg leading-relaxed">
              {doctorData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <PrimaryButton onClick={onBookClick} icon={Phone}>
                Book Appointment
              </PrimaryButton>
              <SecondaryButton href="#about">
                Learn More
              </SecondaryButton>
            </div>

            {/* Credential Strip */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-md border-t border-slate-100">
              {[
                { Icon: GraduationCap, title: "MBBS", sub: "B.P. Koirala Inst." },
                { Icon: Stethoscope, title: "MD", sub: "Dermatology" },
                { Icon: Briefcase, title: "5+ Years", sub: "Experience" },
              ].map((cred) => (
                <div key={cred.title} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border-2 border-navy/20 shadow-[2px_2px_0px_#D0F4EB] hover:shadow-[3px_3px_0px_#00B894] hover:border-primary/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-mint flex items-center justify-center text-primary shrink-0">
                    <cred.Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-navy leading-tight">{cred.title}</span>
                    <span className="block text-[10px] font-medium text-muted truncate">{cred.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DOCTOR IMAGE (Slides in from RIGHT continuously on scroll) */}
          <motion.div
            className="flex-shrink-0 relative flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="relative flex justify-center">
              
              {/* Decorative Orange Dots */}
              <div className="absolute -top-2 -left-2 z-0">
                <DotPattern rows={4} cols={4} />
              </div>

              {/* Orange Circle Top */}
              <div className="absolute top-4 left-10 w-10 h-10 rounded-full bg-accent z-0 shadow-md animate-pulse" style={{ animationDuration: '4s' }} />

              {/* Orange Circle Bottom Right */}
              <div className="absolute -bottom-2 right-0 w-12 h-12 rounded-full bg-accent z-0 shadow-lg" />

              {/* Green Arch Image Frame */}
              <div className="relative z-10 w-64 sm:w-72 md:w-80 h-[340px] sm:h-[380px] md:h-[400px] bg-primary organic-arch overflow-hidden shadow-2xl flex items-end justify-center">
                <img
                  src="/images/doctor-hero.png"
                  alt="Dr. Neha Ande-Shinde - Dermatologist & Aesthetic Physician"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge: Healthy Skin / Happy You */}
              <div className="absolute top-8 -right-6 sm:-right-10 z-20">
                <FloatingBadge icon={Heart} title="Healthy Skin" subtitle="Happy You" />
              </div>

              {/* Floating Smile Icon */}
              <div className="absolute top-1/2 -left-5 sm:-left-8 z-20 transform -translate-y-1/2">
                <div className="bg-white p-2.5 rounded-xl shadow-floating border border-mint-border text-primary">
                  <Smile className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Dots */}
              <div className="absolute -bottom-4 left-4 z-0">
                <DotPattern rows={3} cols={4} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
