import React from 'react';
import { X } from 'lucide-react';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] md:hidden">
      <div className="flex justify-between items-center p-6">
        <span className="text-[#FCFCF9] text-lg font-nunito">Menu</span>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-[#FCFCF9]" />
        </button>
      </div>
      <nav className="px-6">
        {[...NAVIGATION_ITEMS, 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="block w-full text-left text-[#FCFCF9] text-2xl py-4 border-b border-[#1D1D1F] hover:text-[#F5F5F7] transition-colors font-nunito"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};