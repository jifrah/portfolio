import React from 'react';
import { Section, Container } from '../ui';
import { mockTimeline } from '../../data/mockData';

export const Career: React.FC = () => {
  return (
    <Section id="career" variant="lighter">
      <Container maxWidth="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
          My Career History
        </h2>
        
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#1D1D1F] font-nunito">
            Hello, I'm Jérémy Ifrah, an accomplished Senior Product Manager with extensive 
            business expertise and a solid foundation in data science.
          </p>
          <p className="text-[#1D1D1F] font-nunito">
            Known for my adaptability and quick learning, I excel in developing innovative 
            digital experiences that drive success.
          </p>
          <p className="text-[#1D1D1F] font-nunito">
            Let's transform challenges into opportunities and achieve excellence together!
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#050505]" />
          
          {/* Timeline items */}
          {mockTimeline.map((item) => (
            <div key={item.id} className="relative mb-12">
              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-3 h-3 bg-[#050505] rounded-full -translate-x-1/2 mt-2" />
                
                {/* Content */}
                <div className="ml-16">
                  <h3 className="font-bold text-lg mb-1 font-nunito">{item.company}</h3>
                  <p className="text-[#515154] mb-1 font-nunito">{item.period}</p>
                  <p className="font-semibold mb-4 font-nunito">{item.position}</p>
                  <div className="space-y-3">
                    {item.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-[#1D1D1F] font-nunito">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};