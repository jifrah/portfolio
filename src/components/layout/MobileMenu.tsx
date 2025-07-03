import React, { useEffect } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { BurgerButton } from './BurgerButton';

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
      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-50 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Header with close button - no logo */}
        <div className="flex justify-end items-center h-12 px-6 pt-2">
          <BurgerButton isOpen={isOpen} onClick={onClose} />
        </div>
        
        {/* Navigation items - left aligned, top positioned */}
        <nav className="px-6 pt-8">
          {[...NAVIGATION_ITEMS, 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left text-[#CCCCCC] hover:text-[#FCFCF9] hover:underline text-3xl py-3 font-nunito font-medium transition-colors transform${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Click anywhere to close */}
        <div 
          className="absolute inset-0 -z-10"
          onClick={onClose}
        />
      </div>
    </>
  );
};