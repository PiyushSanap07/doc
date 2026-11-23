import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import SectionLabel from './SectionLabel';
import clinicImg from '../assets/images/Clinic.jpeg';

const Clinic = () => {
  return (
    <section id="contact" className="relative bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Clinic image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div aria-hidden className="hidden sm:block absolute -inset-3 border border-gold/25 pointer-events-none" />
              <div className="relative w-full aspect-[3000/1633] overflow-hidden bg-cream border border-line">
                <img
                  src={clinicImg}
                  alt="Dr Neha Shinde Skin Clinic"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>VISIT MY CLINIC</SectionLabel>
            <h2 className="mt-5 font-display text-[1.75rem] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink">
              Let&rsquo;s take care of your{' '}
              <em className="font-normal italic text-primary">skin &amp; health</em>
            </h2>

            {/* Detail rows — hairline divided */}
            <dl className="mt-7 border-t border-line">
              <div className="flex items-start gap-5 py-6 border-b border-line">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-light">
                    Clinic Address
                  </dt>
                  <dd className="mt-2">
                    <p className="font-display text-base sm:text-lg text-ink">{doctorData.clinic.name}</p>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted font-normal leading-[1.85]">
                      {doctorData.clinic.address}
                    </p>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-5 py-6 border-b border-line">
                <Clock className="h-4 w-4 text-gold shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-light">
                    Consultation Hours
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base text-ink">{doctorData.clinic.hours}</dd>
                </div>
              </div>

              <div className="flex items-start gap-5 py-6 border-b border-line">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-light">
                    Direct Consultation Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-display text-base sm:text-lg text-ink hover:text-primary transition-colors duration-300"
                    >
                      {doctorData.clinic.phone}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Actions */}
            <div className="mt-6 flex flex-col xs:flex-row items-stretch gap-3 sm:gap-4">
              <a
                href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-primary-dark active:scale-[0.98] min-h-[52px]"
              >
                Call for Appointment
                <span aria-hidden className="h-px w-6 bg-white/50 transition-all duration-300 group-hover:w-9" />
              </a>
              <a
                href={doctorData.clinic.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary px-8 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:bg-primary hover:text-white min-h-[52px]"
              >
                Get Directions
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
