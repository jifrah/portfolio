import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-[#FCFCF9] flex items-center py-[70px] px-[20px] md:py-[70px] md:px-[40px] lg:px-[70px] 2xl:px-[200px]">
      <div className="max-w-none mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6 h-full">
          {/* Text content - left side */}
          <div className="flex-1 max-w-3xl flex flex-col justify-center h-[60vh] lg:h-[80vh] gap-6 lg:gap-8 order-2 lg:order-1">
            <div className="flex-shrink-0">
              <h1 className="text-[48px] md:text-[64px] lg:text-7xl font-nunito font-bold text-[#050505] leading-[0.9] mb-4">
                Delivering impact —<br className="hidden sm:block" />
                <span className="text-[#666666]">not just features.</span>
              </h1>
              
              <p className="text-[18px] md:text-[22px] lg:text-[24px] font-nunito font-light text-[#1D1D1F] italic mb-6">
                Product Manager • AI Transformation • Startup Co-founder
              </p>
            </div>
            
            <div className="flex-shrink-0 max-w-2xl">
              <div className="text-[16px] md:text-[18px] lg:text-[20px] font-nunito text-[#050505] leading-relaxed space-y-4">
                <p>
                  Currently <strong className="font-semibold">leading AI transformation at Adie</strong> —  to make business loans as accessible as ordering coffee. <strong className="font-semibold">Ex-startup founder</strong> who learned that great tech means nothing without user love. <strong className="font-semibold">Teaching ML at Code.org</strong> because talent is universal, opportunity isn't. With my <strong className="font-semibold">MSc in Big Data</strong>, <strong className="font-semibold">International MBA</strong>, and certifications in <strong className="font-semibold">UX/UI Design, Business Development, DevOps and more</strong>, I'm always pushing to level up my game.
                </p>
                
              
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 flex gap-4">
                <Button 
                  variant="primary"
                  onClick={() => {
                    document.getElementById('latest-work')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="group"
                >
                  See my work
                  
                </Button>
                
              </div>
            </div>
          </div>
          
          {/* Image - right side with enhanced shadows and smooth integration */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-2xl h-[60vh] lg:h-[80vh] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/images/pictures/jeremy_0725_1735_vj2i0j.png" 
                alt="Jérémy Ifrah - Product Manager"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'contrast(1.05) brightness(1.02) saturate(1.1)'
                }}
              />
              
              {/* Enhanced gradient overlays for smooth background transition - reversed for right side */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#d5d7d5] via-transparent to-[#FCFCF9] opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCF9] via-transparent to-transparent opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCF9] via-transparent to-transparent opacity-15"></div>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-inner opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};