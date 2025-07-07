import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  variant?: 'light' | 'lighter';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  variant = 'light',
  children 
}) => {
  const bgColors = {
    light: 'bg-[#FCFCF9]',
    lighter: 'bg-[#F5F5F7]'
  };

  return (
    <section id={id} className={`py-[120px] px-[120px] md:py-[150px] md:px-[150px] ${bgColors[variant]} ${className}`}>
      {children}
    </section>
  );
};