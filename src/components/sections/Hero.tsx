import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const Hero: React.FC = () => {
  const scrollToSection = useSmoothScroll();

  return (
    <header 
      id="hero" 
      className="min-h-screen bg-[#FCFCF9] flex items-center relative"
    >
      <div className="w-full px-5 md:px-10 lg:px-[70px] 2xl:px-[200px] py-[clamp(2rem,6vw,4rem)]">
        <div className="flex flex-col lg:flex-row items-center gap-[clamp(1.5rem,4vw,4rem)]">
          
          {/* Image */}
          <div className="w-full max-w-[min(90vw,520px)] lg:order-first">
            <div className="relative mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E7] shadow-2xl">
                <img 
                  src="/images/pictures/jeremy_0725_1735_vj2i0j.png"
                  alt="Portrait of Jeremy Ifrah"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -z-10 top-6 right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#050505]/3 via-transparent to-transparent blur-xl" />
            </div>
          </div>
          
          {/* Text */}
          <div className="flex-1 w-full text-center">
            <h1 className="mb-[clamp(1.25rem,2vw,2rem)] font-nunito font-bold text-[#050505] leading-[0.95] tracking-tight text-[clamp(3rem,8vw,4rem)]">
              Who is Jeremy?
            </h1>

            <h2 className="mb-[clamp(1.25rem,2vw,2.25rem)] font-nunito font-semibold text-[#1D1D1F] tracking-wide text-[clamp(1.75rem,4vw,3rem)]">
              Jeremy Ifrah
            </h2>

            <h3 className="mb-[clamp(1rem,1.5vw,1.5rem)] font-nunito font-medium text-[#1D1D1F] italic text-[clamp(1.125rem,2vw,1.5rem)]">
              Product Manager | Product Owner
            </h3>

            <p className="max-w-[760px] mx-auto font-nunito text-[#050505] leading-relaxed text-[clamp(0.95rem,1.25vw,1.25rem)]">
              I'm a passionate Product Manager who gets genuinely excited about building things that actually work for people. I love the challenge of turning messy, complex problems into elegant solutions that users can't imagine living without. Currently obsessed with making AI work quietly to create seamless user journeys.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};