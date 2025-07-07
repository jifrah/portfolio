// src/components/projects/ProjectCard.tsx
import React from 'react';
import { Project } from '../../types';
import { TechIcon } from '../ui/TechIcon';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getCategoryLabel = (category: Project['category']) => {
    const labels = {
      dataScience: 'Data Science',
      product: 'Product',
      webDevelopment: 'Web Development'
    };
    return labels[category];
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          {/* Title with hover underline */}
          <h3 className="text-[24px] font-medium font-nunito text-[#050505] mb-3 group-hover:underline transition-all duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-[16px] font-normal font-nunito text-[#1D1D1F] mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack - Icons */}
          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies.map((tech) => (
              <div key={tech} className="flex flex-col items-center w-12">
                <TechIcon techName={tech} size={31} />
                <span className="text-[10px] font-semibold text-[#050505] font-nunito mt-1 text-center leading-tight h-8 flex items-center justify-center w-full">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          
          {/* Date */}
          <div className="text-[14px] font-normal font-nunito text-[#1D1D1F]">
            {project.year}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Image - 1/3 width */}
        <div className="w-1/3 aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content - 2/3 width */}
        <div className="w-2/3 p-8 flex flex-col justify-between">
          <div>
            {/* Title with hover underline */}
            <h3 className="text-[28px] font-medium font-nunito text-[#050505] mb-4 group-hover:underline transition-all duration-300">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-[16px] font-normal font-nunito text-[#1D1D1F] mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech Stack - Icons */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.technologies.map((tech) => (
                <div key={tech} className="flex flex-col items-center w-12">
                  <TechIcon techName={tech} size={31} />
                  <span className="text-[10px] font-semibold text-[#050505] font-nunito mt-1 text-center leading-tight h-8 flex items-center justify-center w-full">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Date */}
          <div className="text-[14px] font-normal font-nunito text-[#1D1D1F]">
            {project.year}
          </div>
        </div>
      </div>
    </div>
  );
};