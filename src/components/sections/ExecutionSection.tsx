// src/components/sections/ExecutionSection.tsx
import React from 'react';
import { Section, Container } from '../ui';
import { LogoCarousel } from '../ui/LogoCarousel';
import { ChevronDown } from 'lucide-react';

export const ExecutionSection: React.FC = () => {
  const companies = [
    { name: 'Microsoft Azure', logo: '/images/logo/companies/azure.png', alt: 'Microsoft Azure' },
    { name: 'Adie', logo: '/images/logo/companies/adie.svg', alt: 'Adie' },
    { name: 'Accenture', logo: '/images/logo/companies/accenture.svg', alt: 'Accenture' },
    { name: 'Rosewood', logo: '/images/logo/companies/rosewood.png', alt: 'Rosewood' },
    { name: 'Goodvest', logo: '/images/logo/companies/goodvest.png', alt: 'Goodvest' },
    { name: 'Code.org', logo: '/images/logo/companies/code.org.png', alt: 'Code.org' },
    { name: 'Peninsula', logo: '/images/logo/companies/peninsula.svg', alt: 'Peninsula' },
  ];

  const scrollToProjects = () => {
    const section = document.getElementById('latest-work');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="execution" variant="lighter">
      {/* HEADLINE + TEXT */}
      
        

      {/* ROTATING COMPANY LOGOS CAROUSEL */}
      <LogoCarousel companies={companies} speed={30} />
    </Section>
  );
};