import React from 'react';
import { Button } from '../ui/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const Hero: React.FC = () => {
  const scrollToSection = useSmoothScroll();
  
  const handleGetInTouchClick = () => {
    scrollToSection('lets-connect');
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-[#FCFCF9] flex items-center relative"
    >
      {/* Container with responsive padding */}
      <div className="w-full px-[20px] md:px-[40px] lg:px-[70px] 2xl:px-[200px] py-[70px] md:py-[90px]">
        {/* Add extra top padding to account for fixed header */}
        <div className="pt-[48px] md:pt-[44px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Text content - left side */}
            <div className="flex-1 w-full lg:max-w-3xl">
              {/* Title Section */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-nunito font-bold text-[#050505] leading-[0.9] mb-4">
                  Delivering impact —<br className="hidden sm:block" />
                  <span className="text-[#666666]">not just features.</span>
                </h1>
                
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-nunito font-light text-[#1D1D1F] italic">
                  Product Manager • AI Transformation • Startup Co-founder
                </p>
              </div>
              
              {/* Description Section */}
              <div className="mb-8 lg:mb-10">
                <div className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-nunito text-[#050505] leading-relaxed space-y-4">
                  <p>
                    Currently <strong className="font-semibold">leading AI transformation at Adie</strong> — to make business loans as accessible as ordering coffee. <strong className="font-semibold">Ex-startup founder</strong> who learned that great tech means nothing without user love. <strong className="font-semibold">Teaching ML at Code.org</strong> because talent is universal, opportunity isn't. With my <strong className="font-semibold">MSc in Big Data</strong>, <strong className="font-semibold">International MBA</strong>, and certifications in <strong className="font-semibold">UX/UI Design, Business Development, DevOps and more</strong>, I'm always pushing to level up my game.
                  </p>
                  <p>
                    I thrive on building products that deliver real impact — blending strategic thinking with hands-on execution to ship solutions that scale. <strong className="font-semibold">From product to code to growth</strong> — I do what it takes to make things happen.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex">
                <Button 
                  variant="primary" 
                  onClick={handleGetInTouchClick}
                  className="min-h-[44px]" // Ensure minimum touch target size
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            
            {/* Image - right side */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg order-first lg:order-last">
              <div className="relative w-full">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#F5F5F7] shadow-lg">
                  <img 
                    src="/api/placeholder/600/600"
                    alt="Jeremy Ifrah"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Optional: Add decorative elements */}
                <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#050505]/5 to-transparent" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};