import React from 'react';
import { Section, Container } from '../ui';
import { mockTimeline } from '../../data/mockData';

export const Career: React.FC = () => {
  return (
    <Section id="career" variant="lighter">
      <Container maxWidth="lg">
        {/* H2 with design system styling and left alignment */}
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-left mb-12">
          Career
        </h2>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Desktop vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#E5E5E5]" />
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {mockTimeline.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline content card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="bg-[#FCFCF9] rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Company logo and info */}
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      {/* Company logo */}
                      <div className="w-12 h-12 rounded-[12px] bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      
                      {/* Company and period */}
                      <div className={`flex-grow ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <h3 className="font-nunito font-semibold text-[18px] text-[#050505] leading-tight">
                          {item.company}
                        </h3>
                        <p className="font-nunito text-[14px] text-[#515154]">
                          {item.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <p className={`font-nunito font-semibold text-[16px] text-[#050505] mb-3 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {item.position}
                    </p>
                    
                    {/* Description */}
                    <div className={`space-y-2 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {item.description.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="font-nunito text-[14px] md:text-[16px] text-[#1D1D1F] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Center dot - visible on desktop */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 bg-[#050505] rounded-full" />
                </div>
                
                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12" />
                
                {/* Mobile timeline indicator */}
                <div className="md:hidden absolute left-0 top-0 w-2 h-2 bg-[#050505] rounded-full" />
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-[#E5E5E5]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};