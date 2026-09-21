import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Camera, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { galleryCategories } from '../data/galleryData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import GalleryPhotoCard from './GalleryPhotoCard';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleBookClick = () => {
    window.location.href = "tel:+917498314453";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Display all photos across all categories
  const displayPhotos = galleryCategories.flatMap(cat => 
    cat.photos.map(photo => ({ 
      ...photo, 
      category: cat.title, 
      categorySlug: cat.slug, 
      color: cat.color 
    }))
  );

  // Lightbox keyboard navigation & adjacent photo preloading
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % displayPhotos.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + displayPhotos.length) % displayPhotos.length);
    };
    window.addEventListener('keydown', handleKey);

    // Preload next and previous images for instant navigation
    if (displayPhotos.length > 1) {
      const nextIdx = (lightboxIndex + 1) % displayPhotos.length;
      const prevIdx = (lightboxIndex - 1 + displayPhotos.length) % displayPhotos.length;
      const imgNext = new Image();
      imgNext.src = displayPhotos[nextIdx].image;
      const imgPrev = new Image();
      imgPrev.src = displayPhotos[prevIdx].image;
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex, displayPhotos]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="pt-24 pb-16 md:pt-28 md:pb-20 flex-1">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                <Camera className="w-3.5 h-3.5" />
                Visual Portfolio & Clinical Moments
              </span>
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-navy uppercase tracking-tight leading-tight mb-3">
              Doctor <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              Explore our visual portfolio showcasing Dr. Neha Shinde's modern clinic facility, real patient transformations, 
              and advanced dermatological procedures.
            </p>
          </motion.div>

          {/* Constant, Optimized Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && displayPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev - 1 + displayPhotos.length) % displayPhotos.length);
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev + 1) % displayPhotos.length);
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Preview */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={displayPhotos[lightboxIndex].image}
                alt={displayPhotos[lightboxIndex].title}
                decoding="async"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent rounded-b-2xl p-3 sm:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    displayPhotos[lightboxIndex].color === 'accent' ? 'bg-accent text-navy' : 'bg-primary text-white'
                  }`}>
                    {displayPhotos[lightboxIndex].category}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/50 font-bold">
                    {lightboxIndex + 1} / {displayPhotos.length}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-black text-white leading-tight">
                  {displayPhotos[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-medium line-clamp-2 sm:line-clamp-none mt-0.5">
                  {displayPhotos[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
