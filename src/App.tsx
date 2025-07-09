// src/App.tsx
import React, { useState, useCallback } from 'react';
import { Header, MobileMenu, Footer } from './components/layout';
import { 
  Hero, 
  About, 
  Projects, 
  Blog, 
  Contact 
} from './components/sections';
import { Modal } from './components/ui';
import { ContactForm } from './components/ContactForm'; // Import from separate ContactForm file

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
        
        {/* My Work Section - Primary Background */}
        <Projects />
        
        {/* Articles Section - Secondary Background */}
        <Blog />
        
        {/* Let's Connect Section - Primary Background */}
        <Contact onContactClick={handleContactModalOpen} />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Contact Modal - Triggered from Header */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
        title="Let's Connect"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default App;