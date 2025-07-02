import React from 'react';
import { ProjectCategory } from '../../types';

interface ProjectFiltersProps {
  activeFilter: ProjectCategory | 'all';
  onFilterChange: (filter: ProjectCategory | 'all') => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ 
  activeFilter, 
  onFilterChange 
}) => {
  const filters: Array<{ value: ProjectCategory | 'all'; label: string }> = [
    { value: 'product', label: 'Product Work' },
    { value: 'dataScience', label: 'Data Science' },
    { value: 'webDevelopment', label: 'Web Development' }
  ];

  return (
    <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all font-nunito ${
            activeFilter === filter.value 
              ? filter.value === 'dataScience' 
                ? 'bg-[#050505] text-[#FCFCF9]'
                : 'bg-[#FCFCF9] text-[#050505] border-2 border-[#050505]'
              : 'bg-transparent text-[#050505] border-2 border-[#050505]'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
