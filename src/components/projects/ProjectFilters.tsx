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
    { value: 'all', label: 'All' },
    { value: 'product', label: 'Product Work' },
    { value: 'dataScience', label: 'Data Science' }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-nunito font-semibold text-[22px] text-[#050505]">
          Filters:
        </span>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-6 h-[31px] rounded-full font-medium whitespace-nowrap transition-all font-nunito ${
                activeFilter === filter.value 
                  ? 'bg-[#050505] text-[#FCFCF9]'
                  : 'bg-[#F5F5F7] text-[#050505] hover:bg-[#E5E5E5]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};