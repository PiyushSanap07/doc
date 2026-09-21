import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '../data/servicesData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';

const Services = () => {
  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1 pt-20 sm:pt-24 pb-16">
        {/* Header */}
        <section className="py-10 sm:py-12 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SectionLabel>OUR CLINICAL OFFERINGS</SectionLabel>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mt-1">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                  Specialized Services
                </span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-black max-w-xl mx-auto font-normal leading-relaxed">
                Where advanced clinical dermatology meets personalized skin and hair care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 items-start"
            >
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="px-4 py-3.5 border-b border-gray-100 bg-[#FAF0F5]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
                      {category.title}
                    </h2>
                  </div>

                  {/* Services List */}
                  <div className="px-3 py-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center justify-between py-2.5 px-2 text-xs sm:text-sm font-semibold text-black hover:text-primary rounded-md hover:bg-gray-50 transition-colors group"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
