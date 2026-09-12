import React from 'react';
import { ArrowRight } from 'lucide-react';

const SecondaryButton = ({ children, onClick, href, className = "", showArrow = true }) => {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center border-2 border-navy bg-white hover:bg-mint text-navy font-bold text-sm px-6 py-3 rounded-xl shadow-[3px_3px_0px_#321427] hover:shadow-[5px_5px_0px_#321427] hover:translate-x-[-1px] hover:translate-y-[-1px] active:shadow-[1px_1px_0px_#321427] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-200 cursor-pointer ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }

  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};

export default SecondaryButton;
