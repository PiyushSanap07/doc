import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Sparkles } from 'lucide-react';

/**
 * GalleryPhotoCard
 * Optimized and constant aspect-ratio photo card for gallery grids.
 * Features:
 * - Constant uniform aspect ratio (default 4:5 portrait)
 * - Skeleton shimmer placeholder during image load (prevents CLS)
 * - Lazy loading + async decoding for optimized memory and network
 * - Smooth fade-in on load
 * - Neo-brutalist styling consistent with the design system
 * - Accessible keyboard interaction
 */
const GalleryPhotoCard = React.memo(({ 
  photo, 
  index, 
  onClick, 
  aspectRatio = 'aspect-[4/5]',
  badgeText,
  color = 'primary'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const cardColor = photo.color || color;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.3, 
        delay: Math.min(index * 0.02, 0.25)
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${photo.title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group relative rounded-2xl overflow-hidden border-2 border-navy/10 shadow-[3px_3px_0px_#160F14] hover:shadow-[5px_5px_0px_#8C486E] hover:border-primary transition-all duration-300 cursor-pointer bg-mint-light/60 ${aspectRatio} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
    >
      {/* Skeleton Shimmer Placeholder (visible while loading) */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-mint-light via-mint-border/30 to-mint-light animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}

      {/* Actual Image with Lazy Loading & Async Decoding */}
      {!hasError ? (
        <img
          src={photo.image}
          alt={photo.title || 'Doctor gallery image'}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-mint/50">
          <Sparkles className="w-6 h-6 text-primary/40 mb-2" />
          <span className="text-xs font-bold text-muted">Image preview</span>
        </div>
      )}

      {/* Top badges: Index badge & Category badge */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
        {(photo.category || badgeText) ? (
          <span className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-xs backdrop-blur-sm truncate max-w-[80%] ${
            cardColor === 'accent'
              ? 'bg-accent text-navy border border-navy/10'
              : 'bg-primary text-white border border-white/20'
          }`}>
            {photo.category || badgeText}
          </span>
        ) : <div />}

        {/* Zoom indicator icon */}
        <div className="w-7 h-7 rounded-full bg-navy/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 group-hover:scale-110 shadow-xs">
          <ZoomIn className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Permanent subtle bottom gradient + hover caption expansion */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 pointer-events-none">
        <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug drop-shadow-xs line-clamp-1 mb-0.5">
          {photo.title}
        </h3>
        {photo.caption && (
          <p className="text-[11px] text-white/80 font-medium line-clamp-1">
            {photo.caption}
          </p>
        )}
      </div>

      {/* Active hover outline frame */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-2xl pointer-events-none transition-colors duration-300" />
    </motion.div>
  );
});

GalleryPhotoCard.displayName = 'GalleryPhotoCard';

export default GalleryPhotoCard;
