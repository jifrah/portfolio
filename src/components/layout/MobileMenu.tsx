// src/components/layout/MobileMenu.tsx
import React, { useEffect } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onContactClick }) => {
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (item: string) => {
    // All navigation items including Contact go to their respective sections
    if (item === 'Contact') {
      scrollToSection('lets-connect'); // Goes to contact section
    } else {
      scrollToSection(item.toLowerCase().replace(' ', '-'));
    }
    onClose();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Single animated background */}
      <div 
        className={`absolute inset-0 bg-[#050505] transition-transform duration-700 ease-in-out origin-top ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      />
      
      {/* Navigation items */}
      <nav className="relative px-6 pt-20 z-10">
        {NAVIGATION_ITEMS.map((item, index) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`block w-full text-left text-[#CCCCCC] hover:text-[#FCFCF9] hover:underline text-3xl py-3 font-nunito font-medium transition-all duration-500 ease-out transform ${
              isOpen ? 'translate-y-0 opacity-100 translate-x-0' : 'translate-y-4 opacity-0 -translate-x-4'
            }`}
            style={{
              transitionDelay: isOpen ? `${100 + (index * 40)}ms` : '0ms'
            }}
          >
            {item}
          </button>
        ))}
      </nav>
      
      {/* Click anywhere to close */}
      <div 
        className="absolute inset-0 z-0"
        onClick={onClose}
      />
    </div>
  );
};