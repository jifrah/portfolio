// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 h-[37px] rounded-[24px] font-nunito font-semibold transition-all flex items-center justify-center';
  const variants = {
    primary: 'bg-[#050505] text-[#F8F8F8] hover:bg-transparent hover:text-[#050505] hover:border-2 hover:border-[#050505] active:bg-[#050505] active:text-[#FCFCF9]',
    secondary: 'bg-transparent text-[#050505] border-2 border-[#050505] hover:bg-[#050505] hover:text-[#F8F8F8]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};