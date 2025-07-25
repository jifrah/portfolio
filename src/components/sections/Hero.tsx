import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 734px)');

  return (
    <section id="hero" className="min-h-screen bg-[#FCFCF9] py-[90px] px-[90px] md:py-[120px] md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Text container */}
        <div className={`mb-12 md:mb-16 ${isMobile ? 'space-y-6' : 'flex justify-between items-end'}`}>
          {/* Heading - always on left */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#050505] font-nunito">
            Jérémy Ifrah
          </h1>
          
          {/* Quote - right on desktop, below on mobile */}
          <p className={`text-xl md:text-2xl lg:text-3xl font-normal tracking-tight text-[#1D1D1F] font-nunito ${
            isMobile ? '' : 'text-right max-w-md'
          }`}>
            Making great products happen
          </p>
        </div>
        
        {/* Image container */}
        <div className="w-full mx-auto" style={{ maxWidth: '1920px' }}>
          <div 
            className="relative mx-auto overflow-hidden rounded-[40px] bg-[#F5F5F7] flex justify-center items-center"
            style={{
              width: '87.5%',
              height: '60vh',
              minHeight: '300px',
              maxHeight: '1260px'
            }}
          >
            {/* Updated to use the specific photo requested */}
            <img
              src="/images/pictures/photo_Jeremy_About.png"
              alt="Jérémy Ifrah"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};