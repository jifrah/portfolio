// src/components/layout/Header.tsx
import React from 'react';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { BurgerButton } from './BurgerButton';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const isVisible = useScrollVisibility();
  const scrollToSection = useSmoothScroll();
  
  const handleNavClick = (item: string) => {
    if (item === 'Contact') {
      scrollToSection('lets-connect');
    } else {
      scrollToSection(item.toLowerCase().replace(' ', '-'));
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-[#050505] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isMenuOpen ? 'z-[60]' : 'z-50'}`}
    >
      <div className="px-6 md:px-12">
        <div className="flex items-center h-12 md:h-11">
          {/* Logo Section - Left Side */}
          <div className="flex items-center space-x-3">
            {/* JI Logo Circle */}
            <div className="w-8 h-8 bg-[#FCFCF9] rounded-full flex items-center justify-center">
              <span className="text-[#050505] text-sm font-nunito font-bold">JI</span>
            </div>
            
            {/* Text Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#CCCCCC] text-lg md:text-xl hover:text-[#F5F5F7] transition-colors font-nunito"
            >
              JEREMY IFRAH
            </button>
          </div>
          
          {/* Right-Aligned Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-[#CCCCCC] hover:text-[#FCFCF9] hover:underline transition-all font-medium font-nunito uppercase"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button - Right Side */}
          <div className="md:hidden ml-auto">
            <BurgerButton 
              isOpen={isMenuOpen} 
              onClick={onMenuClick} 
            />
          </div>
        </div>
      </div>
    </header>
  );
};