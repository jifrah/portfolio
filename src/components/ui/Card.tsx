// src/components/ui/Card.tsx
import React from 'react';
import { CircleArrowRight } from 'lucide-react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
  title?: string;
  date?: string;
  excerpt?: string;
  alt?: string;
  readTime?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  image,
  title,
  date,
  excerpt,
  alt,
  readTime
}) => {
  // If we have image, title, etc. props, render the new ProjectCard-style design
  if (image && title) {
    return (
      <div className={`bg-transparent group cursor-pointer ${className}`} onClick={onClick}>
        {/* Image */}
        <div className="h-[174px] overflow-hidden border border-[#E5E5E5] mb-4">
          <img 
            src={image} 
            alt={alt || title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div>
          {/* Title */}
          <h3 className="text-[20px] font-semibold font-nunito text-[#050505] mb-3 group-hover:underline">
            {title}
          </h3>
          
          {/* Excerpt */}
          {excerpt && (
            <p className="text-[14px] font-normal font-nunito text-[#1D1D1F] leading-relaxed mb-4">
              {excerpt}
            </p>
          )}
          
          {/* Date and read time */}
          {(date || readTime) && (
            <p className="text-[14px] font-light font-nunito text-[#1D1D1F]">
              {date}
              {date && readTime && ' · '}
              {readTime}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Fallback to original Card design for other use cases
  return (
    <div
      className={`bg-[#F5F5F7] rounded-3xl overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-lg transition-all' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};