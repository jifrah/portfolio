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
      <Container>
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-[36px] md:text-[56px] font-nunito font-bold text-[#050505] leading-tight mb-6">
            I deliver value — not just features.
          </h2>

          <p className="text-[16px] md:text-[18px] font-nunito font-light italic text-[#1D1D1F] mb-8 leading-relaxed max-w-3xl mx-auto">
            "Only 48% of digital initiatives succeed in achieving desired business outcomes" — Gartner, 2022
          </p>

          <p className="text-[16px] md:text-[18px] font-nunito font-normal text-[#050505] leading-loose max-w-3xl mx-auto mb-6">
            Building a product roadmap is easy. Delivering business results? That's the hard part.
            As a <strong>startup cofounder</strong>, I learned to focus on what truly pays off — not just what looks good on paper.
            Execution isn't a checklist. It's knowing your team's strengths, timing every move, and adapting to change.
            Now, as a <strong>full-stack product manager</strong>, I bring that real-world urgency and clarity to every stage — turning vision into market impact.
          </p>
        </div>
      </Container>

      {/* ROTATING COMPANY LOGOS CAROUSEL */}
      <LogoCarousel companies={companies} speed={30} />

      {/* CTA BUTTON */}
      <Container>
        <div className="text-center mt-12">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-nunito font-medium text-[#1D1D1F] opacity-70 hover:opacity-100 transition-opacity duration-300 group"
          >
            See how I turn product vision into market reality
            <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </Container>
    </Section>
  );
};