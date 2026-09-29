import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

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
            </p>

            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#8C486E] text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-[#733558] transition-all shadow-sm active:scale-98 group cursor-pointer"
              >
                <span>Learn More About Dr. Neha</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;