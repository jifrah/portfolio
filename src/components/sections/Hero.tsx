import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 734px)');

  return (
    <section id="hero" className="relative min-h-screen bg-[#FCFCF9] overflow-hidden">
      {/* Content container with proper padding and centering */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        {/* Main content grid */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              {/* Name with refined typography */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#050505] font-nunito mb-8 md:mb-12">
                Jérémy Ifrah
              </h1>
              
              {/* Tagline with better spacing and hierarchy */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] font-nunito leading-tight">
                Making great products{' '}
                <em className="font-medium text-[#050505] not-italic">actually</em>{' '}
                happen
              </p>
            </div>
            
            {/* Portrait container - refined design */}
            <div className="relative mt-12 md:mt-0">
              <div className="relative mx-auto w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] to-transparent rounded-3xl blur-3xl scale-110 opacity-60" />
                
                {/* Image wrapper with aspect ratio container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#F5F5F7]">
                  <img
                    src="/images/jeremy-ifrah-portrait-1200w.webp"
                    srcSet={`
                      /images/jeremy-ifrah-portrait-400w.webp 400w,
                      /images/jeremy-ifrah-portrait-800w.webp 800w,
                      /images/jeremy-ifrah-portrait-1200w.webp 1200w
                    `}
                    sizes="(max-width: 834px) 280px, (max-width: 1280px) 400px, 500px"
                    alt="Jérémy Ifrah"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />
                  
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional: Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
    </section>
  );
};