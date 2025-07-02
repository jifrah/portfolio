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
  const baseStyles = 'px-6 py-3 rounded-xl font-nunito font-semibold transition-all';
  const variants = {
    primary: 'bg-[#050505] text-[#F8F8F8] hover:bg-[#1D1D1F]',
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