import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories } from '../data/galleryData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import GalleryPhotoCard from './GalleryPhotoCard';
import SectionLabel from './SectionLabel';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const displayPhotos = galleryCategories.flatMap(cat =>
    cat.photos.map(photo => ({ ...photo, category: cat.title, categorySlug: cat.slug, color: cat.color }))
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % displayPhotos.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + displayPhotos.length) % displayPhotos.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex, displayPhotos]);

  const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true); };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="pt-20 sm:pt-24 pb-16 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Breadcrumb */}
          <div className="pt-4 mb-4">
            <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-10 pb-6 border-b border-gray-100"
          >
            <SectionLabel>VISUAL JOURNEY &amp; PRACTICE</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mt-1 mb-2">
              Clinic &amp; Treatment{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-sm sm:text-base text-black max-w-lg font-normal leading-relaxed">
              Explore our state-of-the-art clinic, expert procedures, and remarkable patient transformations.
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {displayPhotos.map((photo, index) => (
                <GalleryPhotoCard
                  key={photo.id}
                  photo={photo}
                  index={index}
                  aspectRatio="aspect-[4/5]"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </AnimatePresence>
          </div>

        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && displayPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev - 1 + displayPhotos.length) % displayPhotos.length); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev + 1) % displayPhotos.length); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={displayPhotos[lightboxIndex].image}
                alt={displayPhotos[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl p-4 sm:p-5">
                <span className="text-[10px] text-white/60 font-semibold block mb-1">{lightboxIndex + 1} / {displayPhotos.length}</span>
                <h3 className="text-sm sm:text-base font-bold text-white">{displayPhotos[lightboxIndex].title}</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-0.5">{displayPhotos[lightboxIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
