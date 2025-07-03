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
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#FCFCF9] z-50 md:hidden transform transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
        style={{ maxHeight: '100vh' }}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center h-12 px-6 border-b border-[#E5E5E5]">
          <span className="text-[#050505] text-lg font-nunito font-semibold">JI</span>
          <BurgerButton isOpen={isOpen} onClick={onClose} />
        </div>
        
        {/* Navigation items */}
        <nav className="px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 48px)' }}>
          {[...NAVIGATION_ITEMS, 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left text-[#050505] text-2xl py-4 border-b border-[#E5E5E5] hover:text-[#1D1D1F] transition-all duration-200 font-nunito font-semibold transform ${
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
      </div>
    </>
  );
};