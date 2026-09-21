import React from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const About = () => {
  return (
    <section id="about" className="pt-14 sm:pt-18 lg:pt-20 pb-10 sm:pb-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Top Row — Bold statement with UI gradient heading + intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-14 items-start mb-8 sm:mb-10">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <SectionLabel>ABOUT THE DOCTOR</SectionLabel>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-black leading-tight mt-0.5">
              Dr. Neha Shinde is dedicated to provide the{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                best dermatological care.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:pt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <p className="text-sm sm:text-base text-black font-normal leading-relaxed mb-3">
              {doctorData.aboutText}
            </p>

            <p className="text-sm sm:text-base text-black font-normal leading-relaxed">
              With an MD in Dermatology and a Fellowship in Aesthetic Medicine, Dr. Shinde combines
              evidence-based clinical science with a compassionate approach — ensuring every patient
              receives a personalised treatment plan that truly fits their unique skin needs.
            </p>
          </motion.div>
        </div>

        {/* Middle Row — Doctor photo + Key info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

          {/* Doctor Photo */}
          <motion.div
            className="lg:col-span-4 h-full"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-full h-[300px] xs:h-[350px] sm:h-[400px] lg:h-full min-h-0 lg:min-h-[440px] rounded-2xl overflow-hidden bg-white p-2 border border-gray-200/80 shadow-sm relative group">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/images/doctor-about.png"
                  alt="Dr. Neha Shinde Consultation"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Information Section */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {[
                { value: '5+', label: 'Years of Practice' },
                { value: 'MD', label: 'Dermatology' },
                { value: '5000+', label: 'Patients Treated' },
                { value: '20+', label: 'Publications' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white p-3 sm:p-3.5 rounded-xl border border-gray-200/80 shadow-2xs relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8C486E] to-[#C98664]" />
                  <p className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#8C486E] to-[#C98664] bg-clip-text text-transparent leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-semibold text-black mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise Text Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-0.5">
              {[
                {
                  title: 'Acne & Acne Scars',
                  desc: 'Customised medical treatments, chemical peels and laser scar resurfacing for lasting clear skin.'
                },
                {
                  title: 'Pigmentation & Skin Tone',
                  desc: 'Targeted therapy for melasma, sun spots, hyperpigmentation and uneven skin tone correction.'
                },
                {
                  title: 'Hair & Scalp Disorders',
                  desc: 'PRP therapy, hair fall control, scalp rejuvenation and expert alopecia management.'
                },
                {
                  title: 'Cosmetic Dermatology',
                  desc: 'Skin glow therapies, Botox, fillers, micro-needling and advanced skin tightening treatments.'
                },
                {
                  title: 'Anti-Aging Treatments',
                  desc: 'Collagen-boosting treatments, fine line reduction and holistic youth restoration protocols.'
                },
                {
                  title: 'Skin Allergies & Eczema',
                  desc: 'Comprehensive allergy diagnostics, eczema control and soothing restorative therapies.'
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-100 hover:border-[#8C486E]/30 transition-all shadow-2xs group"
                >
                  <h4 className="text-sm sm:text-base font-bold text-black mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Professional Memberships */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-gray-200/80 shadow-2xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664]" />
              <p className="text-sm font-bold text-black mb-1 mt-0.5">
                Professional Memberships
              </p>
              <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
                Active member of the Indian Association of Dermatologists, Venereologists &amp; Leprologists (IADVL)
                and the Association of Cutaneous Surgeons of India (ACSI). Guest speaker and workshop trainer
                at national aesthetic medicine conferences.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;