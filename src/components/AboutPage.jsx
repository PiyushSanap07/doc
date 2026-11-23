import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';
import doctorAboutImg from '../assets/images/doctor_about.jpeg';

/* ─── Static Data ──────────────────────────────────────────── */
const CLINICAL_METRICS = [
  { value: '10+',   label: 'Years Clinical Experience' },
  { value: 'MD',    label: 'Dermatology Specialist' },
  { value: '500+',  label: 'Happy Patients' },
  { value: '20+',   label: 'Published Research Papers' },
];

const SPECIALIZED_DOMAINS = [
  {
    category: 'Clinical Care',
    title: 'Acne Remodeling & Scar Revision',
    points: [
      'Targeted medical comedolytic protocols & active flare control',
      'Customized chemical peels & precision dermal subcision',
      'Fractional laser resurfacing for restored dermal texture',
    ],
  },
  {
    category: 'Skin Health',
    title: 'Pigmentation & Melasma Management',
    points: [
      'Multi-tiered melanin pathway inhibition for stubborn melasma',
      'Q-switched laser toning for sun spots & hyperpigmentation',
      'Tranexamic acid protocols & deep skin barrier restoration',
    ],
  },
  {
    category: 'Aesthetic Care',
    title: 'Aesthetic Medicine & Skin Boosters',
    points: [
      'Non-surgical facial rejuvenation & hyaluronic skin boosters',
      'Collagen biostimulators & medical-grade micro-needling',
      'Subtle micro-toxin therapies for natural, radiant glow',
    ],
  },
  {
    category: 'Hair & Scalp',
    title: 'Clinical Trichology & Scalp Health',
    points: [
      'In-depth trichoscopic scalp & hair follicle diagnostics',
      'Autologous PRP & Growth Factor Concentrate (GFC) therapy',
      'Targeted medical management for alopecia & acute hair fall',
    ],
  },
  {
    category: 'Prevention',
    title: 'Preventative Anti-Aging & Longevity',
    points: [
      'Scientifically validated collagen induction protocols',
      'Non-ablative tissue tightening & structural firmness care',
      'Cellular antioxidant regimens to slow photo-aging',
    ],
  },
  {
    category: 'Inflammatory Care',
    title: 'Inflammatory & Allergic Skin Conditions',
    points: [
      'Clinical diagnostic workups for atopic eczema & psoriasis',
      'Contact dermatitis & chronic urticaria allergy evaluations',
      'Long-term therapeutic management & soothing barrier care',
    ],
  },
];

const PRACTICE_PILLARS = [
  {
    title: 'Diagnostic Rigor First',
    desc: 'Every aesthetic or corrective recommendation begins with an in-depth clinical evaluation of your skin barrier integrity, health markers, and environmental stressors before initiating therapy.',
    icon: ShieldCheck,
  },
  {
    title: 'Ethical, Transparent Care',
    desc: 'We uphold strict medical ethics with clear treatment timelines, honest prognoses, and zero pressure for unneeded cosmetic procedures. Long-term skin health always precedes quick trends.',
    icon: HeartHandshake,
  },
  {
    title: 'US-FDA Cleared Technologies',
    desc: 'Our clinical suites maintain hospital-grade biomedical sterilization standards, equipped exclusively with certified dermatological laser platforms and authentic pharmaceutical formulations.',
    icon: Award,
  },
];

/* ─── Main Component ────────────────────────────────────────── */
const AboutPage = () => {
  const navigate = useNavigate();
  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'About Dr. Neha Shinde | Dermatologist & Aesthetic Physician | Nashik';
    return () => { document.title = prevTitle; };
  }, []);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col text-left">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1 pt-20 sm:pt-24 pb-14 sm:pb-20 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-left">

          {/* Back Arrow */}
          <div className="pt-1 pb-4 sm:pb-6 flex items-center text-left">
            <button
              type="button"
              onClick={handleBack}
              aria-label="Go back"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:text-primary hover:border-primary/50 hover:bg-[#FAF0F5] transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* BLOCK 1: Doctor Image Beside Main Bio Content */}
          <section className="mb-12 sm:mb-16 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center text-left">
              {/* Doctor Image Card */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full aspect-[4/5] max-h-[460px] rounded-2xl overflow-hidden bg-white p-2 border border-gray-300 shadow-sm relative group mx-auto">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={doctorAboutImg}
                      alt="Dr. Neha Shinde Consultation"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main Bio Content */}
              <motion.div
                className="lg:col-span-7 space-y-4 text-left"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <SectionLabel>ABOUT DR. NEHA SHINDE</SectionLabel>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-black leading-tight sm:leading-snug text-left">
                  Advancing Clinical Dermatology with{' '}
                  <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                    Evidence, Precision &amp; Care.
                  </span>
                </h1>

                <p className="text-base sm:text-[17px] text-black font-medium leading-relaxed text-justify">
                  I am Dr. Neha Shinde, a Consultant Dermatologist, Dermatosurgeon, and Aesthetic Physician practicing in Nashik, Maharashtra. Having completed my MBBS and MD in Dermatology alongside specialized international fellowships in laser and aesthetic medicine, I established my practice on a commitment to providing evidence-driven, scientifically sound care for skin and hair health.
                </p>

                <p className="text-base sm:text-[17px] text-black font-medium leading-relaxed text-justify">
                  I believe healthy skin is the cornerstone of comfort and genuine confidence. Rather than relying on superficial fixes or transient trends, I prioritize root-cause diagnostics, cellular barrier restoration, and bespoke therapeutic plans — backed by 20+ published clinical research contributions and US-FDA-cleared technologies to deliver natural, enduring results.
                </p>

                {/* Clean Credentials Badges in High Contrast Dark Black & Primary */}
                <div className="flex flex-wrap gap-2 pt-1 text-left">
                  <span className="text-xs sm:text-sm font-bold text-black bg-[#FAF8F7] border border-gray-300 px-3.5 py-1 rounded-md">
                    MBBS
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-primary bg-[#FAF0F5] border border-primary/30 px-3.5 py-1 rounded-md">
                    MD (Dermatology)
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-black bg-[#FAF8F7] border border-gray-300 px-3.5 py-1 rounded-md">
                    Fellowship in Aesthetic Medicine
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-black bg-white border border-gray-300 px-3.5 py-1 rounded-md">
                    Nashik, Maharashtra
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* BLOCK 2: Key Clinical Metrics Strip */}
          <section className="mb-12 sm:mb-16 text-left">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
              {CLINICAL_METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-[#FAF8F7] p-5 sm:p-6 rounded-2xl border border-gray-300 hover:border-primary/50 hover:shadow-xs transition-all text-left"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary leading-none text-left">
                    {metric.value}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-black mt-2 text-left">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* BLOCK 3: Specialized Practice Domains - Editorial Matrix with Readable Black Points */}
          <section className="mb-14 sm:mb-18 text-left">
            <div className="mb-6 sm:mb-8 text-left">
              <SectionLabel>CLINICAL METHODOLOGY &amp; SPECIALIZATIONS</SectionLabel>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black leading-tight mt-0.5 text-left">
                Focused Care Across Clinical &amp; Aesthetic Dermatology
              </h2>
            </div>

            {/* 3-Column x 2-Row Horizontal Editorial Matrix with Scannable Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 text-left">
              {SPECIALIZED_DOMAINS.map((domain, idx) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group text-left"
                >
                  {/* Category Label */}
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary block mb-1">
                    {domain.category}
                  </span>

                  {/* Specialization Heading */}
                  <h3 className="text-base sm:text-[17px] font-extrabold text-black tracking-normal leading-snug group-hover:text-primary transition-colors text-left">
                    {domain.title}
                  </h3>

                  {/* Thin Subtle Accent Line */}
                  <div className="w-9 h-[2px] bg-[#8C486E] mt-2 mb-3 transition-all duration-300 group-hover:w-14" />

                  {/* Readable Bullet Points */}
                  <ul className="space-y-2 text-left">
                    {domain.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-sm sm:text-[14.5px] font-semibold text-black leading-snug text-left">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* BLOCK 4: Standards of Care & Practice Pillars */}
          <section className="pt-8 sm:pt-10 border-t border-gray-200 text-left">
            <div className="mb-6 sm:mb-8 text-left">
              <SectionLabel>STANDARDS OF CARE</SectionLabel>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black leading-tight mt-0.5 text-left">
                Core Foundations Guiding Every Patient Treatment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
              {PRACTICE_PILLARS.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-300 shadow-xs hover:border-primary/50 hover:shadow-sm transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 text-primary">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-black mb-1.5 text-left">{pillar.title}</h3>
                    <p className="text-sm font-medium text-black leading-relaxed text-left">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
