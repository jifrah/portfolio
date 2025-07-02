import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-[#F5F5F7] rounded-3xl overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-lg transition-all' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};