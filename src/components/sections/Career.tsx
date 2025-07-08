import React from 'react';
import { Section, Container } from '../ui';

// Streamlined timeline data with unified layout
const timelineData = [
  {
    id: '1',
    company: 'Adie',
    logo: '/images/logo/adie.svg',
    location: 'Paris, France',
    period: '2023 - now',
    position: 'Senior Product Manager',
    description: 'Transforming nonprofit lending through digital innovation. Leading development of a loan management platform democratizing microfinance access.',
    isEducation: false
  },
  {
    id: '2',
    company: 'IE School of Science and Technology',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid, Spain',
    period: '2022 - 2023',
    position: "Master's in Business Analytics & Big Data",
    description: 'Specialized in deep learning and advanced analytics. Mastered AI/ML, data engineering, and predictive modeling.',
    isEducation: true
  },
  {
    id: '3',
    company: 'Microsoft Azure',
    logo: '/images/logo/microsoft_azure-icon.svg',
    location: 'Madrid, Spain',
    period: '2022',
    position: 'Azure Cloud Strategy Consultant',
    description: 'Architected enterprise cloud transformation for RIO Hotels & Resorts. Designed scalable infrastructure and migration strategies.',
    isEducation: false
  },
  {
    id: '4',
    company: 'IE Business School',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid, Spain',
    period: '2021 - 2022',
    position: 'International MBA',
    description: 'Innovation & Technology specialization. Developed expertise in digital transformation and strategic management.',
    isEducation: true
  },
  {
    id: '5',
    company: 'Institut-2L',
    logo: '/images/logo/2l-I.png',
    location: 'Paris, France',
    period: '2018 - 2021',
    position: 'Co-founder & Head of Product',
    description: 'Built omnichannel consulting platform from zero to market leader. Pioneered seamless integration between digital tools and human expertise.',
    isEducation: false
  },
  {
    id: '6',
    company: 'Rosewood Hotels',
    logo: '/images/logo/rosewood.svg',
    location: 'London, UK',
    period: '2016 - 2018',
    position: 'Senior Project Manager',
    description: 'Led high-stakes transformation projects in luxury hospitality. Developed expertise in stakeholder alignment and cultural integration under relentless pace and exacting standards.',
    isEducation: false
  },
  {
    id: '7',
    company: 'Peninsula Hotels',
    logo: '/images/logo/Peninsula.svg',
    location: 'Paris, France',
    period: '2014 - 2016',
    position: 'Project Manager',
    description: 'Delivered complex change initiatives where precision and buy-in were non-negotiable. Mastered stakeholder management and cultural alignment in demanding luxury environment.',
    isEducation: false
  }
];

export const Career: React.FC = () => {
  return (
    <Section id="career" variant="lighter">
      <Container maxWidth="lg">
        {/* Header */}
        <h2 className="text-[28px] lg:text-[48px] font-nunito font-semibold text-left mb-16">
          Career
        </h2>
        
        {/* Timeline container - unified design for all screen sizes */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-[#E5E5E5]" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline content card */}
                <div className="ml-16">
                  <div className="bg-[#FCFCF9] rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E5E5E5]/30">
                    
                    {/* Two column layout */}
                    <div className="flex items-start gap-5">
                      {/* Column 1: Logo (smaller) */}
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`}
                          className="w-8 h-8 object-contain filter drop-shadow-sm"
                        />
                      </div>
                      
                      {/* Column 2: Company info (line by line) */}
                      <div className="flex-grow min-w-0">
                        {/* Company name */}
                        <h3 className="font-nunito font-bold text-[20px] lg:text-[22px] text-[#050505] leading-tight mb-1">
                          {item.company}
                        </h3>
                        
                        {/* Title */}
                        <h4 className="font-nunito font-semibold text-[18px] text-[#050505] mb-1">
                          {item.position}
                        </h4>
                        
                        {/* Location and period */}
                        <p className="font-nunito text-[16px] lg:text-[16px] text-[#515154] font-medium mb-3">
                          {item.location} • {item.period}
                        </p>
                        
                        {/* Description */}
                        <p className="font-nunito text-[15px] lg:text-[16px] text-[#1D1D1F] leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-5 top-2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 bg-[#FCFCF9] rounded-full border-2 border-[#E5E5E5] transition-all duration-300 ${
                    item.isEducation ? 'shadow-lg' : 'shadow-sm'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline end indicator */}
          <div className="flex justify-start ml-6 mt-12">
            <div className="w-12 h-12 rounded-full bg-[#F5F5F7] border-2 border-[#E5E5E5] flex items-center justify-center shadow-lg transform -translate-x-1/2">
              <div className="w-6 h-6 rounded-full bg-[#FCFCF9] shadow-inner"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};