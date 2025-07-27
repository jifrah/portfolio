// src/components/ui/LogoCarousel.tsx
import React, { useEffect, useRef } from 'react';

interface Company {
  name: string;
  logo: string;
  alt: string;
}

interface LogoCarouselProps {
  companies: Company[];
  speed?: number; // pixels per second
}

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ 
  companies, 
  speed = 30 // default speed (reduced for better viewing)
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    
    if (!container || !scrollElement) return;

    // Duplicate companies array for seamless loop
    const duplicatedCompanies = [...companies, ...companies];
    
    let scrollPos = 0;
    let animationId: number;

    const scroll = () => {
      scrollPos += speed / 60; // 60fps
      
      // Reset position when first set is completely scrolled
      if (scrollPos >= (scrollElement.scrollWidth / 2)) {
        scrollPos = 0;
      }
      
      scrollElement.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [companies, speed]);

  // Duplicate companies for seamless loop
  const displayCompanies = [...companies, ...companies];

  return (
    <div className="w-full overflow-hidden py-12 shadow-[0_-1px_0px_rgba(0,0,0,0.05),_0_1px_0px_rgba(0,0,0,0.05)]">
      <div className="relative max-w-full mx-auto" ref={containerRef}>
        <div 
          ref={scrollRef}
          className="flex items-center gap-16 md:gap-24"
          style={{ 
            willChange: 'transform',
            width: 'max-content'
          }}
        >
          {displayCompanies.map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="flex-shrink-0 px-4"
            >
              <img
                src={company.logo}
                alt={company.alt}
                className="h-8 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ maxWidth: '150px' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};