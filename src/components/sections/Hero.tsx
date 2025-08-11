import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const Hero: React.FC = () => {
  const scrollToSection = useSmoothScroll();

  return (
    <header 
      id="hero" 
      className="min-h-screen bg-[#FCFCF9] flex items-center relative"
    >
      <div className="w-full px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,6vw,4rem)]">
        <div className="flex flex-col lg:flex-row items-center gap-[clamp(1.5rem,4vw,4rem)]">
          
          {/* Image */}
          <div className="w-full max-w-[min(90vw,520px)] lg:order-last">
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
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="mb-[clamp(1.25rem,2vw,2rem)] font-nunito font-bold text-[#050505] leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,5.75rem)]">
              Building AI products that make a real difference
            </h1>

            <h2 className="mb-[clamp(1.25rem,2vw,2.25rem)] font-nunito font-medium italic text-[#1D1D1F] tracking-wide text-[clamp(1.125rem,2vw,2.125rem)]">
              AI Product Leader • Startup-tested • Impact-driven
            </h2>

            <p className="max-w-[760px] mx-auto lg:mx-0 font-nunito text-[#050505] leading-relaxed text-[clamp(0.95rem,1.25vw,1.25rem)]">
              At Adie, I lead our AI-powered client portal — where credit scoring, document processing, and recommendations make finance more accessible.<br />
              Previously, I co-founded a startup and learned that impact is the only currency that counts.<br />
              I also teach machine learning at Code.org, because AI should empower people, not just impress them.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
