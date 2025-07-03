import React, { useState } from 'react';
import { Header, MobileMenu, Footer } from './components/layout';
import { 
  Hero, 
  About, 
  Projects, 
  Career, 
  Certifications, 
  TechStack, 
  Blog, 
  Contact 
} from './components/sections';
import { Modal } from './components/ui';
import { Contact as ContactForm } from './components/sections/Contact';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      <Header 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle instead of just true
        onContactClick={() => setIsContactModalOpen(true)}
        isMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onContactClick={() => {
          setIsMobileMenuOpen(false);
          setIsContactModalOpen(true);
        }}
      />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Career />
        <Certifications />
        <TechStack />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Contact Modal for desktop header */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get In Touch"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default App;