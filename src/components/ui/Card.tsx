import React from 'react';

interface CardProps {
  image: string;
  title: string;
  date?: string;
  excerpt?: string;
  alt?: string;
  readTime?: string;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  image,
  title,
  date,
  excerpt,
  alt,
  readTime,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`
        bg-transparent group cursor-pointer transition-all duration-300 
        hover:-translate-y-1 hover:shadow-[14px_14px_40px_#767ead1f] 
        rounded-[24px] overflow-hidden
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image with rounded corners */}
      <div className="h-[174px] mb-4 overflow-hidden rounded-[24px]">
        <img 
          src={image} 
          alt={alt || title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content with padding */}
      <div className="px-4 pb-4">
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
};

// ============================================================================
// 3. ALTERNATIVE: GENERIC CARD (IF NEEDED)
// ============================================================================

// If you need a generic card component elsewhere, create a separate one:
// src/components/ui/GenericCard.tsx

interface GenericCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GenericCard: React.FC<GenericCardProps> = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <div
      className={`bg-[#F5F5F7] rounded-3xl overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-lg transition-all' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};