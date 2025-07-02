import React from 'react';
import { Section, Container } from '../ui';
import { mockTechnologies } from '../../data/mockData';

export const TechStack: React.FC = () => {
  return (
    <Section id="tech-stack" variant="lighter">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {mockTechnologies.map((tech) => (
            <div key={tech.id} className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-[#FCFCF9] rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-[#050505]">
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <p className="text-xs text-[#1D1D1F] font-nunito">{tech.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};