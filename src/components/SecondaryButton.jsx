import React from 'react';
import { ArrowRight } from 'lucide-react';

const SecondaryButton = ({ children, onClick, href, className = "", showArrow = true }) => {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center border border-mint-border bg-white hover:bg-mint/70 text-navy font-semibold text-sm px-6 py-3 rounded-xl shadow-xs hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }

  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};

export default SecondaryButton;
