import React from 'react';

const SectionLabel = ({ children, className = "", center = false }) => {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-primary ${center ? "justify-center" : ""} ${className}`}
    >
      <span aria-hidden className="h-px w-6 sm:w-8 bg-gold/70" />
      {children}
    </span>
  );
};

export default SectionLabel;
