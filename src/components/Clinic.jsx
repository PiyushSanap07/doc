import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

const Clinic = () => {
  return (
    <section id="contact" className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* LEFT: Clinic Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-full h-[220px] xs:h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-white p-2 border border-gray-200/80 shadow-sm">
              <img
                src="/images/clinic.png"
                alt="Dr Neha Shinde Skin Clinic"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: Clinic Details */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div>
              <SectionLabel>VISIT MY CLINIC</SectionLabel>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-black leading-tight mt-0.5">
                Let's Take Care of Your{' '}
                <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                  Skin &amp; Health
                </span>
              </h2>
            </div>

            {/* Address Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3.5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8C486E]/10 to-[#C98664]/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Clinic Address</p>
                  <p className="text-sm sm:text-base font-bold text-black mt-0.5">{doctorData.clinic.name}</p>
                  <p className="text-xs sm:text-sm text-black leading-relaxed mt-0.5 font-normal">{doctorData.clinic.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8C486E]/10 to-[#C98664]/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-xs sm:text-sm">
                  <span className="font-bold text-black">Consultation Hours:</span>
                  <span className="text-black font-semibold">{doctorData.clinic.hours}</span>
                </div>
              </div>
            </div>

            {/* Call & Directions */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Direct Consultation Phone</p>
                  <a href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`} className="text-sm sm:text-base font-extrabold text-black hover:text-primary transition-colors">
                    {doctorData.clinic.phone}
                  </a>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row items-stretch gap-2 sm:gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-center px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-md hover:bg-primary-dark transition-all shadow-sm active:scale-95"
                >
                  Call for Appointment
                </a>
                <a
                  href={doctorData.clinic.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 border border-gray-300 rounded-md text-xs sm:text-sm font-bold text-black hover:border-primary hover:text-primary transition-colors active:scale-95"
                >
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
