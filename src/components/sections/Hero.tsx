import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-[#FCFCF9]">
      {/* H1 - Name */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-4 font-nunito text-[#050505]">
        Jérémy Ifrah
      </h1>
      
      {/* H2 - Welcome */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-12 font-nunito text-[#1D1D1F]">
        Welcome to my portfolio
      </h2>
      
      {/* Portrait Image with Apple-inspired design */}
      <div className="relative mb-12">
        {/* Main image container with sophisticated shadows */}
        <div className="relative">
          {/* Outer glow shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/5 to-[#050505]/10 rounded-[2rem] blur-3xl transform translate-y-4 scale-105"></div>
          
          {/* Image container with border and inner shadow */}
          <div className="relative bg-white p-1 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.08)]">
            <div className="relative rounded-[1.75rem] overflow-hidden">
              {/* Subtle inner border */}
              <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-[#050505]/5 ring-inset"></div>
              
              <img
                src="/images/jeremy-portrait-800w.webp"
                srcSet="
                  /images/jeremy-portrait-400w.webp 400w,
                  /images/jeremy-portrait-800w.webp 800w,
                  /images/jeremy-portrait-1200w.webp 1200w
                "
                sizes="(max-width: 834px) 280px, (max-width: 1024px) 320px, 360px"
                alt="Jeremy Ifrah - Product Manager"
                className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                loading="eager"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/3 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-[#050505]/8 to-[#050505]/4 rounded-full blur-sm"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-[#050505]/6 to-[#050505]/3 rounded-full blur-sm"></div>
        </div>
      </div>
      
      {/* Modern Blockquote with left accent */}
      <div className="relative max-w-3xl mx-auto mb-8">
        {/* Left accent border */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#050505] rounded-full"></div>
        
        <p className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[#050505] font-nunito pl-8 italic">
          Making great products <em className="font-medium">actually</em> happen
        </p>
      </div>
    </section>
  );
};