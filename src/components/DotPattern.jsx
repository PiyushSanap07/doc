import React from 'react';

const DotPattern = ({ rows = 4, cols = 6, className = "" }) => {
  const dots = [];
  for (let i = 0; i < rows * cols; i++) {
    dots.push(i);
  }

  return (
    <div 
      className={`grid gap-2.5 ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` 
      }}
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <span 
          key={dot} 
          className="w-1.5 h-1.5 rounded-full bg-accent inline-block opacity-90 transition-transform duration-300 hover:scale-125"
        />
      ))}
    </div>
  );
};

export default DotPattern;
