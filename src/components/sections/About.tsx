import React from 'react';
import { Section, Container } from '../ui';

export const About: React.FC = () => {
  return (
    <Section id="about" variant="lighter">
      <Container maxWidth="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          About Me
        </h2>
        
        <div className="text-center space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-[#1D1D1F] font-nunito">
            Hello, I'm Jérémy Ifrah, an accomplished Senior Product Manager with extensive 
            business expertise and a solid foundation in data science.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-[#1D1D1F] font-nunito">
            Known for my adaptability and quick learning, I excel in developing innovative 
            digital experiences that drive success.
          </p>
          
          <p className="text-base md:text-lg font-semibold text-[#050505] font-nunito">
            Let's transform challenges into opportunities and achieve excellence together!
          </p>
        </div>
      </Container>
    </Section>
  );
};