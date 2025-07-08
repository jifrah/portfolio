import React from 'react';
import { Section, Container } from '../ui';

// Updated timeline data with proper content
const timelineData = [
  {
    id: '1',
    company: 'Adie',
    logo: '/images/logo/adie.svg',
    location: 'Paris',
    period: '2023 - Present',
    position: 'Senior Product Manager',
    description: 'Transforming nonprofit lending through digital innovation. Leading the development of a loan management platform that democratizes access to microfinance for underserved entrepreneurs, driving financial inclusion and social impact.',
    isEducation: false
  },
  {
    id: '2',
    company: 'IE School of Science and Technology',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid',
    period: '2022 - 2023',
    position: "Master's in Business Analytics & Big Data",
    description: 'Specialized in deep learning and advanced analytics. Mastered cutting-edge techniques in AI/ML, data engineering, and predictive modeling to drive data-informed product decisions.',
    isEducation: true
  },
  {
    id: '3',
    company: 'Microsoft Azure',
    logo: '/images/logo/microsoft_azure-icon.svg', // You'll need to add this logo
    location: 'Madrid',
    period: '2022',
    position: 'Azure Cloud Strategy Consultant',
    description: 'Architected enterprise cloud transformation for RIO Hotels & Resorts. Designed scalable cloud infrastructure and migration strategies that enhanced operational efficiency and guest experiences.',
    isEducation: false
  },
  {
    id: '4',
    company: 'IE Business School',
    logo: '/images/logo/IE_University_logo.svg.png',
    location: 'Madrid',
    period: '2021 - 2022',
    position: 'International MBA',
    description: 'Innovation & Technology specialization. Developed expertise in digital transformation, strategic management, and entrepreneurship within tech-driven ecosystems.',
    isEducation: true
  },
  {
    id: '5',
    company: 'Institut-2L',
    logo: '/images/logo/2l-I.png',
    location: 'Paris',
    period: '2018 - 2021',
    position: 'Co-founder & Head of Product',
    description: 'Built an omnichannel consulting platform from zero to market leader. Pioneered seamless integration between digital tools and human expertise, revolutionizing how consultants deliver value.',
    isEducation: false
  },
  {
    id: '6',
    company: 'Rosewood Hotels',
    logo: '/images/logo/rosewood.svg',
    location: 'London',
    period: '2016 - 2018',
    position: 'Senior Project Manager',
    description: 'Elevated luxury hospitality standards, securing multiple prestigious industry awards. Orchestrated cross-functional initiatives that enhanced guest experiences and operational excellence.',
    link: 'https://www.rosewoodhotels.com/en/london/overview/awards',
    linkText: 'View Awards'
  },
  {
    id: '7',
    company: 'Peninsula Hotels',
    logo: '/images/logo/Peninsula.svg',
    location: 'Paris',
    period: '2014 - 2016',
    position: 'Project Manager',
    description: 'Instrumental in achieving the coveted Palace distinction. Led strategic projects that elevated service standards and positioned the property among France\'s most prestigious hotels.',
    isEducation: false
  }
];

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
            {timelineData.map((item, index) => (
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
                      <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      
                      {/* Company and location */}
                      <div className={`flex-grow ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <h3 className="font-nunito font-semibold text-[18px] text-[#050505] leading-tight">
                          {item.company}
                        </h3>
                        <p className="font-nunito text-[14px] text-[#515154]">
                          {item.location} • {item.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Position with education badge if applicable */}
                    <div className={`mb-3 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <p className="font-nunito font-semibold text-[16px] text-[#050505] inline">
                        {item.position}
                      </p>
                      {item.isEducation && (
                        <span className="ml-2 inline-block px-2 py-1 bg-[#F5F5F7] rounded-full text-[12px] font-nunito text-[#515154]">
                          Education
                        </span>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className={`font-nunito text-[14px] md:text-[16px] text-[#1D1D1F] leading-relaxed ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {item.description}
                    </p>
                    
                    {/* Link if available */}
                    {item.link && (
                      <div className={`mt-3 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-nunito text-[14px] text-[#050505] hover:text-[#515154] transition-colors duration-300"
                        >
                          {item.linkText}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Center dot - visible on desktop */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-6 h-6 bg-[#F5F5F7] rounded-full border-2 border-[#C5C5C5]" />
                </div>
                
                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12" />
                
                {/* Mobile timeline indicator */}
                <div className="md:hidden absolute left-0 top-0 w-2 h-2 bg-[#F5F5F7] rounded-full border-2" />
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-[#E5E5E5]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};