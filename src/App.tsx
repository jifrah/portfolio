// src/App.tsx
import React, { useState, useCallback } from 'react';
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
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Event handlers with useCallback for optimization
  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleContactModalOpen = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleContactModalClose = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const handleContactFromMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsContactModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      {/* Header Navigation */}
      <Header 
        onMenuClick={handleMobileMenuToggle}
        onContactClick={handleContactModalOpen}
        isMenuOpen={isMobileMenuOpen}
      />
      
      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onContactClick={handleContactFromMobileMenu}
      />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section - Secondary Background */}
        <About />
        
        {/* Projects Section - Primary Background */}
        <Projects />
        
        {/* Career Timeline Section - Secondary Background */}
        <Career />
        
        {/* Certifications Section - Primary Background */}
        <Certifications />
        
        {/* Tech Stack Section - Secondary Background */}
        <TechStack />
        
        {/* Blog Section - Primary Background */}
        <Blog />
        
        {/* Contact Section - Secondary Background */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Contact Modal - Triggered from Header */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
        title="Get In Touch"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default App;