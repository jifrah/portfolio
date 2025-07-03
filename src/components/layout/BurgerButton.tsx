import React from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="relative w-10 h-10 flex items-center justify-center group"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      <div className="relative w-5 h-4 flex flex-col justify-between">
        {/* Top bar */}
        <span 
          className={`absolute top-0 left-0 w-5 h-0.5 bg-[#CCCCCC] rounded-full transform origin-center transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'rotate-45 translate-y-[7px] bg-[#FCFCF9]' 
              : 'rotate-0 translate-y-0 group-hover:bg-[#FCFCF9]'
          }`}
        />
        {/* Bottom bar */}
        <span 
          className={`absolute bottom-0 left-0 w-5 h-0.5 bg-[#CCCCCC] rounded-full transform origin-center transition-all duration-300 ease-in-out ${
            isOpen 
              ? '-rotate-45 -translate-y-[7px] bg-[#FCFCF9]' 
              : 'rotate-0 translate-y-0 group-hover:bg-[#FCFCF9]'
          }`}
        />
      </div>
    </button>
  );
};