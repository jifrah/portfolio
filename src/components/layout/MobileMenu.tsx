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
    if (item === 'Contact') {
      onContactClick();
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
    <>
      {/* Full Screen Menu Overlay with sliding background */}
      <div 
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Animated background - slides down from top */}
        <div 
          className={`absolute inset-0 bg-[#050505] transition-transform duration-700 ease-in-out origin-top ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        />
        
        {/* Optional: Add a secondary layer for more depth */}
        <div 
          className={`absolute inset-0 bg-[#050505] transition-all duration-500 delay-100 ease-out ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        />
        
        {/* Navigation items - left aligned, with space for header */}
        <nav className="relative px-6 pt-20 z-10"> {/* Added z-10 to ensure nav items are above overlay */}
          {[...NAVIGATION_ITEMS, 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleNavClick(item);
              }}
              className={`block w-full text-left text-[#CCCCCC] hover:text-[#FCFCF9] hover:underline text-3xl py-3 font-nunito font-medium transition-all duration-500 ease-out transform relative z-10 ${
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
        
        {/* Click anywhere to close - positioned behind navigation */}
        <div 
          className="absolute inset-0 z-0"
          onClick={onClose}
        />
      </div>
    </>
  );
};