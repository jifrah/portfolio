import React from 'react';
import { Section, Container } from '../ui';

export const ExecutionSection: React.FC = () => {
  return (
    <Section id="execution" variant="lighter">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-center mb-8">
          Execution that delivers real results
        </h2>
        <p className="text-[16px] md:text-[20px] font-nunito font-light text-center text-[#1D1D1F] max-w-4xl mx-auto leading-relaxed">
          I deliver real results because I've always been accountable for them. 
          With a full-stack PM background, startup founder experience, and a bias 
          for impact under pressure, I don't just plan—I ship what matters. 
          Go-to-market strategy is part of how I build from day one. Want to see 
          how that translates into real work? Jump into the projects below.
        </p>
      </Container>
    </Section>
  );
};
