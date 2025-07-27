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
    <section id={id} className={`py-[20px] px-[20px] md:py-[70px] md:px-[40px] lg:px-[70px] 2xl:px-[200px] ${bgColors[variant]} ${className}`}>
      {children}
    </section>
  );
};