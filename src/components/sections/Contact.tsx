import React from 'react';
import { Section, Container, Button } from '../ui';
import { Linkedin, Github } from 'lucide-react';

interface ContactProps {
  onContactClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/jeremy-ifrah/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/jifrah', '_blank');
  };

  const handleContactButtonClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback: dispatch a custom event that App.tsx can listen to
      window.dispatchEvent(new CustomEvent('openContactModal'));
    }
  };

  return (
    <Section id="lets-connect" variant="light">
      <Container maxWidth="md">
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-center mb-8">
          Let's Connect
        </h2>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={handleLinkedInClick}
            className="p-3 rounded-full hover:bg-[#F5F5F7] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-[#050505]" />
          </button>
          <button
            onClick={handleGitHubClick}
            className="p-3 rounded-full hover:bg-[#F5F5F7] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-[#050505]" />
          </button>
        </div>
        
        {/* Description Text */}
        <p className="text-[16px] md:text-[18px] font-nunito text-[#1D1D1F] text-center mb-10 leading-relaxed max-w-2xl mx-auto">
          Please don't hesitate to reach out if you would like to chat about work or side project opportunities, 
          share your feedback and input, or just connect. I am always open to new conversations and will do my 
          best to respond to you in a timely manner. Cheers!
        </p>
        
        {/* Contact Button */}
        <div className="flex justify-center">
          <Button 
            variant="primary"
            onClick={handleContactButtonClick}
          >
            Contact Me
          </Button>
        </div>
      </Container>
    </Section>
  );
};