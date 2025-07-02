import React from 'react';
import { Send, Menu } from 'lucide-react';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../utils/constants';

interface HeaderProps {
  onMenuClick: () => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onContactClick }) => {
  const isVisible = useScrollVisibility();
  const scrollToSection = useSmoothScroll();
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#050505] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-6 md:px-12">
        <div className="flex items-center justify-between h-12 md:h-11">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#CCCCCC] text-lg md:text-xl hover:text-[#F5F5F7] transition-colors font-nunito"
          >
            JI
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-[#CCCCCC] hover:text-[#FCFCF9] hover:underline transition-all font-medium font-nunito"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button
            onClick={onContactClick}
            className="hidden md:flex items-center justify-center p-2 hover:bg-[#1D1D1F] rounded-lg transition-colors"
          >
            <Send className="w-5 h-5 text-[#CCCCCC] hover:text-[#F5F5F7]" />
          </button>
          
          <button onClick={onMenuClick} className="md:hidden">
            <Menu className="w-6 h-6 text-[#FCFCF9]" />
          </button>
        </div>
      </div>
    </header>
  );
};