import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Stethoscope
} from 'lucide-react';
import { getCategoryBySlug, galleryCategories } from '../data/galleryData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import GalleryPhotoCard from './GalleryPhotoCard';

const iconMap = {
  Building2: Building2,
  Users: Users,
  Stethoscope: Stethoscope,
};

const GalleryDetail = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleBookClick = () => {
    window.location.href = "tel:+917498314453";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Keyboard navigation & adjacent photo preloading for lightbox
  useEffect(() => {
    if (!lightboxOpen || !category || category.photos.length === 0) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % category.photos.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + category.photos.length) % category.photos.length);
    };
    window.addEventListener('keydown', handleKey);

    // Preload next and previous images for instant navigation
    if (category.photos.length > 1) {
      const nextIdx = (lightboxIndex + 1) % category.photos.length;
      const prevIdx = (lightboxIndex - 1 + category.photos.length) % category.photos.length;
      const imgNext = new Image();
      imgNext.src = category.photos[nextIdx].image;
      const imgPrev = new Image();
      imgPrev.src = category.photos[prevIdx].image;
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex, category]);

  // 404 fallback
  if (!category) {
    return (
      <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark flex flex-col">
        <ScrollProgress />
        <Navbar onBookClick={handleBookClick} />
        <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex-1">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy mb-3">Gallery Not Found</h1>
          <p className="text-muted mb-6 text-sm sm:text-base leading-relaxed">
            The gallery category you are looking for doesn't exist.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComp = iconMap[category.icon];
  const otherCategories = galleryCategories.filter(c => c.slug !== slug);

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
            className="mb-3"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Gallery Photos</span>
            </Link>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-4 mb-3 pb-3 border-b border-navy/10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                category.color === 'accent'
                  ? 'bg-accent/15 text-accent border-2 border-accent/20'
                  : 'bg-primary/10 text-primary border-2 border-primary/20'
              }`}>
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-navy uppercase tracking-tight leading-tight">
                  {category.title} <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-sm text-muted font-medium mt-0.5">{category.photos.length} Photos • {category.subtitle}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-navy font-medium leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </motion.div>

          {/* Constant, Optimized Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {category.photos.map((photo, index) => (
                <GalleryPhotoCard
                  key={photo.id}
                  photo={{
                    ...photo,
                    category: category.title,
                    color: category.color
                  }}
                  index={index}
                  aspectRatio="aspect-[4/5]"
                  badgeText={`${index + 1}/${category.photos.length}`}
                  color={category.color}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Explore Other Categories at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 pt-8 border-t border-navy/10"
          >
            <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-5 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-primary rounded-full" />
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherCategories.map((cat) => {
                const CatIcon = iconMap[cat.icon];
                return (
                  <Link
                    key={cat.slug}
                    to={`/gallery/${cat.slug}`}
                    className="group"
                  >
                    <div className="relative bg-white rounded-2xl border-2 border-navy/10 overflow-hidden shadow-[3px_3px_0px_#160F14] hover:shadow-[5px_5px_0px_#8C486E] hover:border-primary transition-all duration-300 hover:-translate-y-1">
                      {/* Preview strip of 3 photos */}
                      <div className="flex h-32 overflow-hidden">
                        {cat.photos.slice(0, 3).map((photo) => (
                          <div key={photo.id} className="flex-1 overflow-hidden">
                            <img
                              src={photo.image}
                              alt={photo.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="p-4 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          cat.color === 'accent'
                            ? 'bg-accent/15 text-accent'
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <CatIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-black text-navy uppercase group-hover:text-primary transition-colors">
                            {cat.title} Gallery
                          </h3>
                          <p className="text-xs text-muted font-medium">{cat.photos.length} Photos</p>
                        </div>
                        <span className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
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

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev - 1 + category.photos.length) % category.photos.length);
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev + 1) % category.photos.length);
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={category.photos[lightboxIndex].image}
                alt={category.photos[lightboxIndex].title}
                decoding="async"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent rounded-b-2xl p-3 sm:p-5">
                <h3 className="text-sm sm:text-lg font-black text-white leading-tight">
                  {category.photos[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-medium line-clamp-2 sm:line-clamp-none mt-0.5">
                  {category.photos[lightboxIndex].caption}
                </p>
                <span className="text-[11px] sm:text-xs text-white/50 font-bold mt-1 block">
                  {lightboxIndex + 1} / {category.photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryDetail;
