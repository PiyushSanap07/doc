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
import SectionLabel from './SectionLabel';

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
      <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
        <ScrollProgress />
        <Navbar onBookClick={handleBookClick} />
        <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4 flex-1">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF0F5] text-primary flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">Gallery Not Found</h1>
          <p className="text-black mb-6 text-sm sm:text-base leading-relaxed font-normal">
            The gallery category you are looking for doesn't exist.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-md hover:bg-primary-dark transition-all shadow-sm"
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
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="pt-20 sm:pt-24 pb-16 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="pt-4 mb-4"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black hover:text-primary transition-colors group"
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
            className="mb-10 pb-6 border-b border-gray-100"
          >
            <SectionLabel>{category.subtitle}</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1 mb-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                {category.title}{' '}
                <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              <span className="text-xs sm:text-sm font-bold text-primary bg-[#FAF0F5] px-3 py-1 rounded-md self-start sm:self-auto">
                {category.photos.length} Photos
              </span>
            </div>
            <p className="text-sm sm:text-base text-black font-normal leading-relaxed max-w-3xl mt-2">
              {category.description}
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
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

          {/* Explore Other Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-100"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-primary rounded-full" />
              Explore Other Galleries
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
                    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-md transition-all overflow-hidden p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF0F5] text-primary flex items-center justify-center shrink-0">
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-black group-hover:text-primary transition-colors">
                          {cat.title} Gallery
                        </h3>
                        <p className="text-xs text-gray-500 font-semibold mt-0.5">{cat.photos.length} Photos</p>
                      </div>
                      <span className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev - 1 + category.photos.length) % category.photos.length);
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev + 1) % category.photos.length);
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

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
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-2xl p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {category.photos[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                  {category.photos[lightboxIndex].caption}
                </p>
                <span className="text-[11px] text-white/50 font-semibold mt-1 block">
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
