import React from 'react';

const FloatingBadge = ({ icon: Icon, title, subtitle, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl p-3 px-4 border-2 border-navy shadow-[3px_3px_0px_#321427] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-mint border border-primary/30 flex items-center justify-center text-primary shrink-0">
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
