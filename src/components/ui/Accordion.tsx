import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleItemClick(index)}
            className="w-full py-4 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <h3 className="text-lg md:text-xl font-nunito font-semibold text-[#050505] pr-4">
              {item.title}
            </h3>
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#050505] flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#050505] flex-shrink-0" />
            )}
          </button>
          {activeIndex === index && (
            <div className="pb-4">
              <p className="text-sm md:text-base leading-relaxed text-[#1D1D1F] font-nunito">
                {item.content}
              </p>
            </div>
          )}
          {/* Separator line - not shown on last item */}
          {index < items.length - 1 && (
            <div className="border-b border-gray-200 my-2" />
          )}
        </div>
      ))}
    </div>
  );
};