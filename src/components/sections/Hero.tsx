import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const Hero: React.FC = () => {
  const scrollToSection = useSmoothScroll();

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-[#FCFCF9] flex items-center relative"
    >
      {/* Main Container - matching Projects section padding */}
      <div className="w-full max-w-none px-6 md:px-12 py-8 md:py-12 lg:py-16">
        {/* Content Wrapper - Reduced top padding for header compensation */}
        <div className="pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 md:gap-12 lg:gap-12 xl:gap-14">
            
            {/* Profile Image - Full width on mobile, constrained on desktop */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 order-first lg:order-last">
              <div className="relative mx-auto lg:mx-0 w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E7] shadow-2xl">
                  <img 
                    src="/images/pictures/jeremy_0725_1735_vj2i0j.png"
                    alt="Jeremy Ifrah"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle decorative accent */}
                <div className="absolute -z-10 top-6 right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#050505]/3 via-transparent to-transparent blur-xl" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 w-full text-center lg:text-left">
              {/* Hero Title */}
              <div className="mb-5 lg:mb-6">
                <h1 className="text-[42px] sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[76px] 2xl:text-[84px] font-nunito font-bold text-[#050505] leading-[0.95] tracking-tight">
                  Delivering impact<br />
                  <span className="text-[#666666]">not just features.</span>
                </h1>
              </div>
              
              {/* Role/Title */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[25px] 2xl:text-[27px] font-nunito font-normal text-[#1D1D1F] italic tracking-wide">
                  Product Manager • AI Transformation • Startup Co-founder
                </h3>
              </div>
              
              {/* Bio Description */}
              <div className="max-w-[540px] mx-auto lg:mx-0">
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] font-nunito text-[#050505] leading-[1.7] space-y-4">
                  <p>
                    Leading AI transformation at Adie and helping shape the next generation by teaching machine learning at Code.org. Former startup founder with an MBA, MSc in Big Data, and certifications across front-end development, UX/UI design, DevOps, and more.
                  </p>
                  <p className="font-medium">
                    I build products with purpose — combining strategic thinking and hands-on execution to deliver scalable solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};