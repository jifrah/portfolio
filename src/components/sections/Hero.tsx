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
              height: '80vh',
              minHeight: '680px',
              maxHeight: '1260px'
            }}
          >
            <picture className="w-full h-full">
              {/* Mobile images - portrait orientation */}
              <source 
                media="(max-width: 734px)" 
                srcSet={`
                  /images/jeremy-ifrah-portrait-mobile-550w.webp 550w,
                  /images/jeremy-ifrah-portrait-mobile-1100w.webp 1100w
                `}
                sizes="87.5vw"
              />
              {/* Desktop images - landscape orientation */}
              <source 
                media="(min-width: 735px)" 
                srcSet={`
                  /images/jeremy-ifrah-portrait-desktop-1200w.webp 1200w,
                  /images/jeremy-ifrah-portrait-desktop-1600w.webp 1600w,
                  /images/jeremy-ifrah-portrait-desktop-2400w.webp 2400w
                `}
                sizes="87.5vw"
              />
              {/* Fallback image */}
              <img
                src="/images/jeremy-ifrah-portrait-desktop-1600w.webp"
                alt="Jérémy Ifrah"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};