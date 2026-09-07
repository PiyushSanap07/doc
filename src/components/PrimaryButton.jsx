import React from 'react';

const PrimaryButton = ({ children, onClick, icon: Icon, href, className = "" }) => {
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </>
  );

  const baseClasses = `inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl border-2 border-navy shadow-[3px_3px_0px_#123B53] hover:shadow-[5px_5px_0px_#123B53] hover:translate-x-[-1px] hover:translate-y-[-1px] active:shadow-[1px_1px_0px_#123B53] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-200 cursor-pointer ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }

  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};

export default PrimaryButton;
