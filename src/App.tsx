// src/App.tsx
import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, MobileMenu, Footer } from './components/layout';
import { 
  Hero, 
  Projects, 
  Blog, 
  Contact 
} from './components/sections';
import { Modal } from './components/ui';
import { ContactForm } from './components/ContactForm';
import { Adie, Riu } from './components/pages';

// Main Portfolio Page Component
const PortfolioPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

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
      <Header 
        onMenuClick={handleMobileMenuToggle}
        isMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onContactClick={handleContactFromMobileMenu}
      />
      
      <main>
        <Hero />
        {/* Add ExecutionSection here when you create it */}
        <Projects />
        <Blog />
        <Contact onContactClick={handleContactModalOpen} />
      </main>
      
      <Footer />
      
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

// Main App Component with Routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects/adie" element={<Adie />} />
        <Route path="/projects/riu" element={<Riu />} />
      </Routes>
    </Router>
  );
};

export default App;