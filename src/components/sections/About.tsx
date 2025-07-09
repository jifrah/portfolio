// src/components/sections/About.tsx
import React from 'react';
import { Section, Container, Accordion, Button } from '../ui';

const accordionItems = [
  {
    title: "Culture-first product strategy",
    content: "Before product management, I spent years leading disruptive projects in luxury hospitality—environments where the bar is high, the pace is relentless, and change only sticks when it's deeply aligned with people and values. That experience shaped how I work today: I treat stakeholder alignment and cultural integration as core parts of product strategy. Because even the smartest roadmap will fail if the teams behind it aren't bought in."
  },
  {
    title: "Relentless focus on impact",
    content: "My entrepreneurial background taught me that velocity means nothing without value. When resources are limited, every sprint, experiment, and release has to earn its place. I bring that mindset into every product I touch—prioritizing outcomes over output, validating assumptions early, and building lean to learn fast. It's a discipline that proves invaluable in mission-driven, resource-constrained environments where smart trade-offs make all the difference."
  },
  {
    title: "Always in beta",
    content: "I believe great product managers are systems thinkers and lifelong learners. Alongside formal training in business, data, and innovation—including a top-tier MBA in Technology and Innovation and an MSc in Big Data with deep learning specialization—I continuously upskill in full-stack development, DevOps, design thinking, and product strategy. This technical fluency helps me partner closely with engineers, ask better questions, and turn complexity into clarity for users and stakeholders."
  }
];

export const About: React.FC = () => {
  const handleMoreAboutMeClick = () => {
    // Placeholder for future link functionality
    console.log('More About Me clicked - link to be added');
  };

  return (
    <Section id="about" variant="lighter">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-left mb-12">
          About Me
        </h2>
        
        {/* Container with background and rounded corners taking full width */}
        <div className="bg-[#FCFCF9] rounded-[40px] p-6 md:p-8">
          {/* Desktop layout: image on left, accordion on right */}
          <div className="flex flex-col h-auto lg:flex-row min-h-[60vh] gap-6">
            {/* Image - full width on mobile, left side on desktop */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#F5F5F7]">
                <img 
                  src="/images/photo_Jeremy_About.png" 
                  alt="Jérémy Ifrah - About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Accordion and Button - below image on mobile, right side on desktop */}
            <div className="w-full lg:w-1/2 self-center">
              <Accordion items={accordionItems} />
              
              {/* More About Me Button */}
              <div className="mt-8 flex justify-center">
                <Button 
                  variant="secondary" 
                  onClick={handleMoreAboutMeClick}
                >
                  More About Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};