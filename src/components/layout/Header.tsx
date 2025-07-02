import React from 'react';
import { Mail, Menu } from 'lucide-react';
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
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#FCFCF9] text-lg md:text-xl hover:text-[#F5F5F7] transition-colors font-nunito"
          >
            Jérémy Ifrah
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-[#FCFCF9] hover:text-[#F5F5F7] transition-colors font-medium font-nunito"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button
            onClick={onContactClick}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#FCFCF9] hover:bg-[#F5F5F7] transition-colors"
          >
            <Mail className="w-5 h-5 text-[#050505]" />
          </button>
          
          <button onClick={onMenuClick} className="md:hidden">
            <Menu className="w-6 h-6 text-[#FCFCF9]" />
          </button>
        </div>
      </div>
    </header>
  );
};