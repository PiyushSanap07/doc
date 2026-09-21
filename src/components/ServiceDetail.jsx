import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Layers, 
  Target, 
  AlertTriangle, 
  Camera, 
  CheckCircle2,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 fallback
  if (!service) {
    return (
      <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col justify-between">
        <ScrollProgress />
        <Navbar />
        <div className="pt-28 pb-16 text-center max-w-md mx-auto px-4 flex-1">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF0F5] text-primary flex items-center justify-center mx-auto mb-3">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-black mb-2">Service Not Found</h1>
          <p className="text-black mb-5 text-sm leading-relaxed font-normal">
            The treatment you are looking for doesn't exist or has been updated.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-md hover:bg-primary-dark transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar />

      {/* Main Content Area: Focused on clinical facts, no redundant book appointment CTA */}
      <main className="pt-20 sm:pt-22 pb-14 flex-1">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col">
          
          {/* Top Breadcrumb */}
          <div className="mb-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Services</span>
            </Link>
          </div>

          {/* Service Title Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
          >
            <div>
              <SectionLabel className="!mb-1">{service.category}</SectionLabel>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
                {service.name}
              </h1>
            </div>

            <span className="text-xs font-bold text-primary bg-[#FAF0F5] px-3 py-1 rounded-md self-start sm:self-auto">
              Clinical Treatment
            </span>
          </motion.div>

          {/* Compact 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN (4 Cols): Prominent Duration & Sessions Metric Cards + Image + Ideal For */}
            <motion.div
              className="lg:col-span-4 flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Primary Factors: Duration & Sessions Highlight Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-2xl border-2 border-primary/20 shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C486E] to-[#C98664]" />
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Duration</span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-black block leading-tight">
                    {service.duration}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">Per Session</span>
                </div>

                <div className="p-4 bg-white rounded-2xl border-2 border-primary/20 shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C98664] to-[#8C486E]" />
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold mb-1">
                    <Layers className="w-4 h-4 text-primary" />
                    <span>Sessions</span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-black block leading-tight">
                    {service.sessions}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">Recommended</span>
                </div>
              </div>

              {/* Image Frame */}
              <div className="w-full aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/80 bg-white p-1.5 shadow-2xs">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#FDF6F9] to-[#F5E6EE] p-4 text-center flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-xs">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-white px-2.5 py-0.5 rounded shadow-2xs mb-1">
                      {service.category}
                    </span>
                    <h4 className="text-sm font-bold text-black line-clamp-1">
                      {service.name}
                    </h4>
                  </div>
                )}
              </div>

              {/* Ideal For Box */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black mb-2.5">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Ideal For</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.idealFor.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#FAF0F5] text-black border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN (8 Cols): Treatment Overview, Benefits, Aftercare & Expectations */}
            <motion.div
              className="lg:col-span-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              {/* Treatment Overview Card */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8C486E] to-[#C98664]" />
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
                  Treatment Overview
                </h2>
                <p className="text-sm text-black font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Side-by-Side: Benefits and Aftercare Guidelines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefits */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs">
                  <h2 className="text-xs font-bold text-black uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Key Benefits
                  </h2>
                  <ul className="space-y-2.5">
                    {service.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-black font-normal leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aftercare */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs">
                  <h2 className="text-xs font-bold text-black uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    After Care Guidelines
                  </h2>
                  <ul className="space-y-2.5">
                    {service.afterCare.map((care, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-black font-normal leading-snug">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What To Expect (Side Effects) Compact Tag Strip */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs">
                <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  What to Expect (Side Effects)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.sideEffects.map((effect, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-black"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {effect}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
