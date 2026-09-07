import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';
import PrimaryButton from './PrimaryButton';
import DotPattern from './DotPattern';

const Clinic = () => {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-mint-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Clinic Image Frame */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              {/* Decorative Orange Dots */}
              <div className="absolute -top-4 -left-4 z-0">
                <DotPattern rows={4} cols={4} />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent z-0" />

              {/* Photo Box */}
              <div className="relative z-10 w-full h-[300px] sm:h-[340px] bg-primary rounded-3xl overflow-hidden shadow-[5px_5px_0px_#123B53] border-2 border-navy p-1.5">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/images/clinic.png"
                    alt="Dr Neha Ande-Shinde Skin Clinic"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Pin Icon */}
              <div className="absolute bottom-5 -right-3 z-20 bg-white p-2.5 rounded-2xl shadow-floating border-2 border-navy text-primary">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Combined Clinic Details & Quick Action Bar */}
          <motion.div
            className="lg:col-span-7 space-y-4 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-1">
              <SectionLabel>VISIT MY CLINIC</SectionLabel>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                Let's Take Care of Your Skin
              </h2>
            </div>

            {/* COMBINED CLINIC ADDRESS & HOURS CARD */}
            <div className="bg-white p-5 rounded-2xl border-2 border-navy/15 shadow-[3px_3px_0px_#D0F4EB] space-y-4">
              
              {/* Address Header & Location Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-mint border border-navy/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-navy uppercase tracking-wider">Clinic Address</h3>
                  <p className="text-sm font-bold text-primary mt-0.5">{doctorData.clinic.name}</p>
                  <p className="text-xs text-muted leading-relaxed mt-1">{doctorData.clinic.address}</p>
                </div>
              </div>

              {/* Consultation Hours Pill */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3 bg-mint-light/60 p-3 rounded-xl border border-navy/10">
                <div className="w-8 h-8 rounded-lg bg-white border border-navy/10 text-accent flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                  <span className="font-extrabold text-navy">Consultation Hours:</span>
                  <span className="font-bold text-primary bg-white px-2.5 py-0.5 rounded-full border border-mint-border">
                    {doctorData.clinic.hours}
                  </span>
                </div>
              </div>

            </div>

            {/* DIRECT CALL & DIRECTIONS ACTION BAR */}
            <div className="bg-white p-4 rounded-2xl border-2 border-navy/15 shadow-[3px_3px_0px_#D0F4EB] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Phone info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs border border-navy/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-muted uppercase tracking-wider">Direct Consultation Phone</span>
                  <a
                    href="tel:+917498314453"
                    className="text-sm sm:text-base font-black text-navy hover:text-primary transition-colors"
                  >
                    +91 74983 14453
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                <PrimaryButton href="tel:+917498314453" icon={Phone} className="px-4 py-2.5 text-xs flex-1 sm:flex-none">
                  Book Appointment
                </PrimaryButton>

                <a
                  href={doctorData.clinic.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn inline-flex items-center justify-center gap-1.5 bg-white hover:bg-mint px-4 py-2.5 rounded-xl text-xs font-bold text-navy hover:text-primary transition-all shrink-0 border-2 border-navy"
                >
                  <span>Directions</span>
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
