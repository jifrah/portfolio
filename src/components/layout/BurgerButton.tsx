import React from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="relative w-10 h-10 flex items-center justify-center"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      {/* Simple 2-bar burger that transforms to X */}
      <div className="w-5 h-3 relative">
        <span 
          className={`absolute left-0 w-full h-0.5 bg-[#CCCCCC] rounded-full transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'top-1/2 -translate-y-1/2 rotate-45' 
              : 'top-0'
          }`}
        />
        <span 
          className={`absolute left-0 w-full h-0.5 bg-[#CCCCCC] rounded-full transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'top-1/2 -translate-y-1/2 -rotate-45' 
              : 'bottom-0'
          }`}
        />
      </div>
    </button>
  );
};