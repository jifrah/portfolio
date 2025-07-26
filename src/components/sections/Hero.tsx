import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-[#FCFCF9] py-[90px] px-[90px] md:py-[120px] md:px-[120px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 h-full">
          {/* Image - left side with enhanced shadows and smooth integration */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg h-[60vh] lg:h-[80vh] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/images/pictures/jeremy_0725_1735_vj2i0j.png" 
                alt="Jérémy Ifrah"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'contrast(1.05) brightness(1.02) saturate(1.1)'
                }}
              />
              
              {/* Enhanced gradient overlays for smooth background transition */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d5d7d5] via-transparent to-[#FCFCF9] opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCF9] via-transparent to-transparent opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCF9] via-transparent to-transparent opacity-15"></div>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-inner opacity-30"></div>
            </div>
          </div>
          
          {/* Text content - right side */}
          <div className="flex-1 max-w-3xl flex flex-col justify-center h-[60vh] lg:h-[80vh] gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <h1 className="text-[48px] md:text-[64px] lg:text-9xl font-nunito font-bold text-[#050505] leading-[0.8]">
                {/* Mobile/Tablet: Compact layout */}
                <span className="lg:hidden">
                  Make <em className="font-black italic text-[#050505]">Every</em><br />
                  Release Count
                </span>
                {/* Desktop: One word per line */}
                <span className="hidden lg:block">
                  <span className="block">Make</span>
                  <span className="block"><em className="font-black italic text-[#050505]">Every</em></span>
                  <span className="block">Release</span>
                  <span className="block">Count</span>
                </span>
              </h1>
            </div>
            
            <div className="flex-shrink-0 max-w-2xl">
              <h3 className="text-[20px] md:text-[28px] font-nunito text-[#1D1D1F] leading-relaxed">
                <span className="font-semibold text-[#050505]">Full Stack Product Manager</span><br />
                leading products from strategy to delivery
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};