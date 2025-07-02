import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-16 font-playfair">
        Jérémy Ifrah
      </h1>
      
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-12 font-playfair">
        A Product Manager On A Continuous Quest For Innovation
      </h2>
      
      <p className="text-lg md:text-xl italic text-[#1D1D1F] font-nunito">
        Be flexible on processes and firm in your vision.
      </p>
    </section>
  );
};
