import React from 'react';

const FloatingBadge = ({ icon: Icon, title, subtitle, className = "" }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-3 px-4.5 border border-mint-border/80 shadow-floating flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}>
      {Icon && (
        <div className="w-9 h-9 rounded-xl bg-mint border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-xs">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <h4 className="text-xs font-bold text-navy leading-tight">{title}</h4>
        {subtitle && <p className="text-[11px] font-semibold text-primary mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
};

export default FloatingBadge;
