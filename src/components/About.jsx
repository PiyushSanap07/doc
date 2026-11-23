import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
<<<<<<< HEAD
import doctorAboutImg from '../assets/images/doctor_about.jpeg';

const ABOUT_STATS = [
  { value: '5+', label: 'Years of Practice' },
  { value: 'MD', label: 'Dermatology' },
  { value: '5000+', label: 'Patients Treated' },
  { value: '20+', label: 'Publications' },
];

const EXPERTISE = [
  {
    title: 'Acne & Acne Scars',
    desc: 'Customised medical treatments, chemical peels and laser scar resurfacing for lasting clear skin.',
  },
  {
    title: 'Pigmentation & Skin Tone',
    desc: 'Targeted therapy for melasma, sun spots, hyperpigmentation and uneven skin tone correction.',
  },
  {
    title: 'Hair & Scalp Disorders',
    desc: 'PRP therapy, hair fall control, scalp rejuvenation and expert alopecia management.',
  },
  {
    title: 'Cosmetic Dermatology',
    desc: 'Skin glow therapies, Botox, fillers, micro-needling and advanced skin tightening treatments.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-white pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Intro — heading left, body right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>ABOUT THE DOCTOR</SectionLabel>
            <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink">
              Dr. Neha Shinde is dedicated to providing the{' '}
              <em className="font-normal italic text-primary">best dermatological care.</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm sm:text-base text-muted font-normal leading-[1.85] mb-4">
              {doctorData.aboutText}
            </p>
            <p className="text-sm sm:text-base text-muted font-normal leading-[1.85]">
              With an MD in Dermatology and a Fellowship in Aesthetic Medicine, Dr. Shinde combines
              evidence-based clinical science with a compassionate approach — ensuring every patient
              receives a personalised treatment plan that truly fits their unique skin needs.
=======

const About = () => {
  return (
    <section id="about" className="pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35 }}
          >
            <SectionLabel>ABOUT THE DOCTOR</SectionLabel>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-black leading-tight sm:leading-snug mt-1">
              Dr. Neha Shinde is dedicated to providing the{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                best dermatological care.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Single neat info paragraph + CTA button */}
          <motion.div
            className="lg:pt-2 space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <p className="text-sm sm:text-base text-black font-medium leading-relaxed text-justify">
              I am Dr. Neha Shinde, a Dermatologist and Aesthetic Physician (MD Dermatology, Fellowship in Aesthetic Medicine) practicing in Nashik. My approach combines evidence-based clinical science with compassionate, personalized care — diagnosing root causes and creating customized treatment plans that help every patient feel comfortable and confident in their skin.
>>>>>>> deaf20efb733590d4af6e3b8ae2fa52b4dfbb4ee
            </p>

<<<<<<< HEAD
        <div className="lux-rule mt-8 sm:mt-10" />

        {/* Portrait + clinical focus */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="hidden sm:block absolute -inset-3 border border-gold/25 pointer-events-none"
              />
              <div className="organic-arch relative w-full h-[300px] xs:h-[340px] sm:h-[440px] lg:h-[560px] overflow-hidden bg-cream border border-line">
                <img
                  src={doctorAboutImg}
                  alt="Dr. Neha Shinde Consultation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between gap-6 pb-6 border-b border-line">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Clinical focus</p>
                <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-snug text-ink">
                  Personalised care, grounded in science.
                </h3>
              </div>
              <span className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-light lg:block">
                {doctorData.role}
              </span>
            </div>

            {/* Stats — hairline columns, no boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 sm:py-7 ${i > 0 ? "sm:border-l sm:border-line sm:pl-6" : ""} ${i === 2 ? "border-t sm:border-t-0 border-line" : ""} ${i === 3 ? "border-t sm:border-t-0 border-line" : ""}`}
                >
                  <p className="font-display text-3xl sm:text-4xl font-medium leading-none text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-muted-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="lux-rule" />

            {/* Expertise list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 mt-2">
              {EXPERTISE.map((item) => (
                <div
                  key={item.title}
                  className="group border-b border-line py-6 transition-colors duration-300"
                >
                  <h4 className="font-display text-base sm:text-lg font-medium text-ink transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted font-normal leading-[1.8]">
                    {item.desc}
                  </p>
                </div>
              ))}
=======
            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#8C486E] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#733558] transition-all shadow-sm active:scale-98 group cursor-pointer"
              >
                <span>Learn More About Dr. Neha</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
>>>>>>> deaf20efb733590d4af6e3b8ae2fa52b4dfbb4ee
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
