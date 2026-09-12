import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Heart,
  Smile
} from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SecondaryButton from './SecondaryButton';
import DotPattern from './DotPattern';
import FloatingBadge from './FloatingBadge';

const Hero = ({ onBookClick }) => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 bg-gradient-to-b from-mint-light via-white to-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-5 lg:space-y-6 text-left py-6 lg:py-0"
            initial={{ opacity: 0, x: -60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14
            }}
          >
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-primary uppercase bg-mint px-4 py-2 rounded-full border border-mint-border">
                {doctorData.eyebrow}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-extrabold text-navy tracking-tight leading-[1.08] whitespace-nowrap">
                {doctorData.name}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-primary">
                {doctorData.role}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {doctorData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <SecondaryButton href="#about">
                Learn More
              </SecondaryButton>
            </div>

            {/* Credential Strip */}
            <div className="pt-5 grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-100">
              {[
                {
                  Icon: GraduationCap,
                  title: 'MBBS',
                  sub: 'B.P. Koirala Inst.'
                },
                {
                  Icon: Stethoscope,
                  title: 'MD',
                  sub: 'Dermatology'
                },
                {
                  Icon: Briefcase,
                  title: '5+ Years',
                  sub: 'Experience'
                }
              ].map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-center gap-2.5 bg-white p-3 rounded-xl border-2 border-navy/20 shadow-[2px_2px_0px_#F0D5E2] hover:shadow-[3px_3px_0px_#8C486E] hover:border-primary/40 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-mint flex items-center justify-center text-primary shrink-0">
                    <cred.Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-navy leading-tight">
                      {cred.title}
                    </span>

                    <span className="block text-[11px] font-medium text-muted truncate">
                      {cred.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DOCTOR IMAGE */}
          <motion.div
            className="relative flex justify-center lg:justify-center items-center py-6 lg:py-0 lg:-translate-x-0.5"
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.1
            }}
          >
            <div className="relative flex justify-center">

              {/* Decorative Orange Dots */}
              <div className="absolute -top-4 -left-4 z-0">
                <DotPattern rows={5} cols={5} />
              </div>

              {/* Orange Circle Top */}
              <div
                className="absolute top-6 left-12 w-12 h-12 rounded-full bg-accent z-0 shadow-md animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              {/* Orange Circle Bottom Right */}
              <div className="absolute -bottom-3 right-2 w-14 h-14 rounded-full bg-accent z-0 shadow-lg" />

              {/* Green Arch Image Frame */}
              <div
                className="
                  relative z-10
                  w-[240px] sm:w-[290px] md:w-[340px] lg:w-[380px] xl:w-[410px]
                  h-[320px] sm:h-[380px] md:h-[430px] lg:h-[475px] xl:h-[510px]
                  bg-primary organic-arch
                  overflow-hidden
                  shadow-2xl
                  flex items-end justify-center
                "
              >
                <img
                  src="/images/doctor-hero.png"
                  alt="Dr. Neha Ande-Shinde - Dermatologist & Aesthetic Physician"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge: Healthy Skin / Happy You */}
              <div className="absolute top-10 -right-4 sm:-right-8 z-20">
                <FloatingBadge
                  icon={Heart}
                  title="Healthy Skin"
                  subtitle="Happy You"
                />
              </div>

              {/* Floating Smile Icon */}
              <div className="absolute top-1/2 -left-5 sm:-left-10 z-20 transform -translate-y-1/2">
                <div className="bg-white p-3 rounded-xl shadow-floating border border-mint-border text-primary">
                  <Smile className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Dots */}
              <div className="absolute -bottom-6 left-4 z-0">
                <DotPattern rows={3} cols={5} />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;