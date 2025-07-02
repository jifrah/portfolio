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
    <section id={id} className={`py-20 px-6 ${bgColors[variant]} ${className}`}>
      {children}
    </section>
  );
};