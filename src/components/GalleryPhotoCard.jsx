import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const GalleryPhotoCard = React.memo(({
  photo,
  index,
  onClick,
  aspectRatio = 'aspect-[4/5]',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.2) }}
      role="button"
      tabIndex={0}
      aria-label={`View ${photo.title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group relative rounded-xl overflow-hidden border border-gray-100 cursor-pointer bg-gray-50 ${aspectRatio} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
    >
      {/* Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}

      {/* Image */}
      {!hasError ? (
        <img
          src={photo.image}
          alt={photo.title || 'Gallery image'}
          loading={index < 4 ? 'eager' : 'lazy'}
          fetchPriority={index < 4 ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => { setHasError(true); setIsLoaded(true); }}
          className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-mint/50">
          <Sparkles className="w-6 h-6 text-primary/40 mb-2" />
          <span className="text-xs text-muted">Image preview</span>
        </div>
      )}
    </motion.div>
  );
});

GalleryPhotoCard.displayName = 'GalleryPhotoCard';

export default GalleryPhotoCard;
