import React from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';
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
  {
    title: 'Anti-Aging Treatments',
    desc: 'Collagen-boosting treatments, fine line reduction and holistic youth restoration protocols.',
  },
  {
    title: 'Skin Allergies & Eczema',
    desc: 'Comprehensive allergy diagnostics, eczema control and soothing restorative therapies.',
  },
];

const About = () => {
  return (
    <section id="about" className="pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-14 items-start mb-6 sm:mb-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }}>
            <SectionLabel>ABOUT THE DOCTOR</SectionLabel>
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-black leading-tight sm:leading-snug mt-0.5">
              Dr. Neha Shinde is dedicated to providing the{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">best dermatological care.</span>
            </h2>
          </motion.div>

          <motion.div className="lg:pt-6" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: 0.1 }}>
            <p className="text-sm sm:text-base text-black font-normal leading-relaxed mb-2.5 sm:mb-3">{doctorData.aboutText}</p>
            <p className="text-sm sm:text-base text-black font-normal leading-relaxed">
              With an MD in Dermatology and a Fellowship in Aesthetic Medicine, Dr. Shinde combines evidence-based clinical science with a compassionate approach — ensuring every patient receives a personalised treatment plan that truly fits their unique skin needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-10">
          <motion.div className="lg:col-span-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35 }}>
            <div className="w-full h-[260px] xs:h-[300px] sm:h-[380px] lg:aspect-[4/5] lg:h-auto rounded-2xl overflow-hidden bg-white p-2 border border-gray-200/80 shadow-sm relative group">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img src={doctorAboutImg} alt="Dr. Neha Shinde Consultation" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-8 min-h-[360px] pt-2 sm:min-h-[520px] sm:pt-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.1 }}>
            <div className="flex items-end justify-between gap-4 border-b border-mint-border pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Clinical focus</p>
                <h3 className="mt-1 text-xl font-extrabold text-navy sm:text-2xl">Personalised care, grounded in science.</h3>
              </div>
              <span className="hidden text-xs font-bold text-primary sm:block">{doctorData.role}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="border-b border-mint-border py-3 sm:py-4">
                  <p className="text-xl font-extrabold leading-none text-primary sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold text-gray-600 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {EXPERTISE.slice(0, 4).map((item) => (
                <div key={item.title} className="border-b border-mint-border py-4 transition-colors hover:border-primary sm:py-5 group">
                  <h4 className="text-sm font-bold text-black transition-colors group-hover:text-primary sm:text-base">{item.title}</h4>
                  <p className="mt-1 text-xs font-normal leading-relaxed text-gray-600 sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;