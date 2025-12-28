import React from 'react';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-3">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-brand-primary rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;