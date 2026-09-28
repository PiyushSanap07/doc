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
  Sparkles,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const handleBookClick = () => {
    window.location.href = "tel:+917498314453";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 fallback
  if (!service) {
    return (
      <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark flex flex-col justify-between">
        <ScrollProgress />
        <Navbar onBookClick={handleBookClick} />
        <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex-1">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy mb-3">Service Not Found</h1>
          <p className="text-muted mb-6 text-sm sm:text-base leading-relaxed">
            The treatment you are looking for doesn't exist or has been updated.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Area */}
      <main className="pt-24 pb-12 md:pt-28 flex-1">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col">
          
          {/* Back to All Services link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-1 shrink-0"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>
          </motion.div>

          {/* Service Title & Department Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-3 pb-2 border-b border-navy/10 shrink-0"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-navy uppercase tracking-tight leading-tight">
              {service.name}
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3 h-3" />
              {service.category}
            </span>
          </motion.div>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column (4 Cols) - Portrait Treatment Image + Quick Info */}
            <motion.div
              className="lg:col-span-4 flex flex-col gap-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Portrait Image Frame */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-navy/10 bg-gradient-to-br from-mint-light/50 via-white to-mint/30 shadow-[4px_4px_0px_#160F14] flex items-center justify-center relative">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-6 text-center flex flex-col items-center justify-center relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-navy/10 flex items-center justify-center mb-3 shadow-xs">
                      <Camera className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full mb-1.5">
                      Portrait Visual Reference
                    </span>
                    <h4 className="text-base font-black text-navy mb-1">
                      {service.name}
                    </h4>
                    <p className="text-xs text-muted font-semibold max-w-[220px] leading-relaxed">
                      Clinical treatment photo slot (3:4 portrait view)
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Information Card - compact, always visible */}
              <div className="w-full bg-white rounded-2xl border-2 border-navy/10 p-4 shadow-[4px_4px_0px_#160F14] space-y-3 shrink-0">
                <div className="flex items-center justify-between pb-2 border-b border-navy/10">
                  <h2 className="text-base font-black text-navy uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Quick Information
                  </h2>
                  <span className="text-xs font-bold text-primary">In-Clinic Session</span>
                </div>

                {/* Duration & Sessions Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 bg-mint-light/40 rounded-xl border border-navy/10">
                    <div className="flex items-center gap-1.5 text-muted text-xs font-bold mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>Duration</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-navy block">{service.duration}</span>
                  </div>

                  <div className="p-2.5 bg-mint-light/40 rounded-xl border border-navy/10">
                    <div className="flex items-center gap-1.5 text-muted text-xs font-bold mb-0.5">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      <span>Sessions</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-navy block">{service.sessions}</span>
                  </div>
                </div>

                {/* Ideal For Tags */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted mb-1.5">
                    <Target className="w-3.5 h-3.5 text-primary" />
                    <span>Ideal For</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.idealFor.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-bold rounded-xl bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column (8 Cols) - Description, Key Benefits & After Care, Side Effects */}
            <motion.div
              className="lg:col-span-8 flex flex-col gap-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              
              {/* Description Card */}
              <div className="bg-white rounded-2xl border-2 border-navy/10 p-5 shadow-[4px_4px_0px_#160F14]">
                <h2 className="text-base sm:text-lg font-black text-navy uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-primary rounded-full" />
                  Description
                </h2>
                <p className="text-sm sm:text-base text-navy/90 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Key Benefits & After Care - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Key Benefits Card */}
                <div className="bg-white rounded-2xl border-2 border-navy/10 p-5 shadow-[4px_4px_0px_#160F14] flex flex-col">
                  <h2 className="text-base sm:text-lg font-black text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary rounded-full" />
                    Key Benefits
                  </h2>
                  <ul className="space-y-2">
                    {service.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-semibold text-navy leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Care Card */}
                <div className="bg-white rounded-2xl border-2 border-navy/10 p-5 shadow-[4px_4px_0px_#160F14] flex flex-col">
                  <h2 className="text-base sm:text-lg font-black text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary rounded-full" />
                    After Care Guidelines
                  </h2>
                  <ul className="space-y-2.5">
                    {service.afterCare.map((care, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-semibold text-navy leading-snug">
                        <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* What To Expect (Side Effects) Box */}
              <div className="rounded-2xl border-2 border-red-200 bg-red-50/70 p-5 shadow-[4px_4px_0px_#160F14]">
                <h3 className="text-base font-black text-red-600 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  What to Expect (Side Effects)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.sideEffects.map((effect, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white/75 border border-red-200 text-xs sm:text-sm font-bold text-red-900"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{effect}</span>
                    </div>
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

