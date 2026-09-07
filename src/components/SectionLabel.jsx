import React from 'react';

const SectionLabel = ({ children, className = "" }) => {
  return (
    <span className={`inline-block text-xs font-bold tracking-widest text-primary uppercase mb-2 ${className}`}>
      {children}
    </span>
  );
};

export default SectionLabel;
