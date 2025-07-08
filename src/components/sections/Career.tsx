import React from 'react';
import { Section, Container } from '../ui';

// Streamlined timeline data focusing on core information
const timelineData = [
  {
    id: '1',
    company: 'Adie',
    logo: '/images/logo/adie.svg',
    location: 'Paris',
    period: '2023 - Present',
    position: 'Senior Product Manager',
    description: 'Transforming nonprofit lending through digital innovation. Leading the development of a loan management platform that democratizes access to microfinance for underserved entrepreneurs.',
    isEducation: false
  },
  {
    id: '2',
    company: 'IE School of Science and Technology',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid',
    period: '2022 - 2023',
    position: "Master's in Business Analytics & Big Data",
    description: 'Specialized in deep learning and advanced analytics. Mastered cutting-edge techniques in AI/ML, data engineering, and predictive modeling.',
    isEducation: true
  },
  {
    id: '3',
    company: 'Microsoft Azure',
    logo: '/images/logo/microsoft_azure-icon.svg',
    location: 'Madrid',
    period: '2022',
    position: 'Azure Cloud Strategy Consultant',
    description: 'Architected enterprise cloud transformation for RIO Hotels & Resorts. Designed scalable cloud infrastructure and migration strategies.',
    isEducation: false
  },
  {
    id: '4',
    company: 'IE Business School',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid',
    period: '2021 - 2022',
    position: 'International MBA',
    description: 'Innovation & Technology specialization. Developed expertise in digital transformation, strategic management, and entrepreneurship.',
    isEducation: true
  },
  {
    id: '5',
    company: 'Institut-2L',
    logo: '/images/logo/2l-I.png',
    location: 'Paris',
    period: '2018 - 2021',
    position: 'Co-founder & Head of Product',
    description: 'Built an omnichannel consulting platform from zero to market leader. Pioneered seamless integration between digital tools and human expertise.',
    isEducation: false
  },
  {
    id: '6',
    company: 'Rosewood Hotels',
    logo: '/images/logo/rosewood.svg',
    location: 'London',
    period: '2016 - 2018',
    position: 'Senior Project Manager',
    description: 'Elevated luxury hospitality standards through strategic project leadership. Orchestrated cross-functional initiatives that enhanced guest experiences.',
    isEducation: false
  },
  {
    id: '7',
    company: 'Peninsula Hotels',
    logo: '/images/logo/Peninsula.svg',
    location: 'Paris',
    period: '2014 - 2016',
    position: 'Project Manager',
    description: 'Instrumental in achieving prestigious industry recognition. Led strategic projects that elevated service standards and operational excellence.',
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
        
        {/* Timeline container */}
        <div className="relative">
          {/* Desktop gradient timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#E5E5E5]" />
          
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-6 top-0 w-[2px] h-full bg-[#E5E5E5]" />
          
          {/* Timeline items */}
          <div className="space-y-12 lg:space-y-16">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative group ${
                  index % 2 === 0 
                    ? 'lg:flex lg:flex-row-reverse' 
                    : 'lg:flex lg:flex-row'
                } flex flex-col lg:items-center`}
              >
                {/* Timeline content card */}
                <div className={`w-full lg:w-[45%] ml-16 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                }`}>
                  <div className="bg-[#FCFCF9] rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-[1.01] border border-[#E5E5E5]/30">
                    
                    {/* Company header */}
                    <div className={`flex items-start gap-5 mb-6 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row lg:text-left'
                    }`}>
                      {/* Company logo */}
                      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`}
                          className="w-12 h-12 object-contain filter drop-shadow-sm"
                        />
                      </div>
                      
                      {/* Company info */}
                      <div className="flex-grow min-w-0">
                        <h3 className="font-nunito font-bold text-[20px] lg:text-[22px] text-[#050505] leading-tight mb-2">
                          {item.company}
                        </h3>
                        
                        {/* Location and period on separate lines */}
                        <div className="space-y-1">
                          <p className="font-nunito text-[14px] text-[#515154] font-medium">
                            {item.location}
                          </p>
                          <p className="font-nunito text-[14px] text-[#515154] font-medium">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Position with education badge */}
                    <div className={`mb-4 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="font-nunito font-semibold text-[18px] text-[#050505]">
                          {item.position}
                        </h4>
                        
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="font-nunito text-[15px] lg:text-[16px] text-[#1D1D1F] leading-relaxed lg:text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Desktop center timeline dot with shadow variations */}
                <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className={`w-8 h-8 bg-[#FCFCF9] rounded-full border-2 border-[#E5E5E5] transition-all duration-300 group-hover:scale-110 ${
                    item.isEducation 
                      ? 'shadow-lg group-hover:shadow-2xl' 
                      : 'shadow-lg group-hover:shadow-xl'
                  }`}>
                    <div className="w-full h-full rounded-full bg-[#F5F5F7]/30 group-hover:bg-[#F5F5F7]/50 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Mobile timeline dot */}
                <div className="lg:hidden absolute left-5 top-8 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 bg-[#FCFCF9] rounded-full border-2 border-[#E5E5E5] ${
                    item.isEducation ? 'shadow-lg' : 'shadow-sm'
                  }`}></div>
                </div>
                
                {/* Desktop spacer */}
                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
          
          {/* Timeline end indicator */}
          <div className="flex justify-center mt-12">
            <div className="w-12 h-12 rounded-full bg-[#F5F5F7] border-2 border-[#E5E5E5] flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 rounded-full bg-[#FCFCF9] shadow-inner"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};