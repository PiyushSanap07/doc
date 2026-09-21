import React from 'react';

const PrimaryButton = ({ children, onClick, icon: Icon, href, className = "" }) => {
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </>
  );

  const baseClasses = `inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }

  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};

export default PrimaryButton;
