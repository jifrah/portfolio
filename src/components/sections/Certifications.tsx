import React from 'react';
import { Section, Container } from '../ui';
import { mockCertifications } from '../../data/mockData';

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mockCertifications.map((cert) => (
            <div key={cert.id} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-[#F5F5F7] rounded-xl flex items-center justify-center">
                <span className="text-xs font-bold text-[#050505]">{cert.logo[0]}</span>
              </div>
              <p className="text-xs text-[#515154] mb-1 font-nunito">{cert.org}</p>
              <h3 className="font-semibold text-sm text-[#050505] font-nunito">{cert.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};