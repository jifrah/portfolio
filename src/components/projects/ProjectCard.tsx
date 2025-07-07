import React from 'react';
import { Project } from '../../types';

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
          {/* Title */}
          <h3 className="text-[24px] font-medium font-nunito text-[#050505] mb-3">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-[16px] font-normal font-nunito text-[#1D1D1F] mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 bg-[#F5F5F7] text-[#050505] text-sm rounded-full font-medium font-nunito"
              >
                {tech}
              </span>
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
        <div className="w-2/3 m-w[469] p-8 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-[24px] font-medium font-nunito text-[#050505] mb-3">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-[16px] font-normal font-nunito text-[#1D1D1F] mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-[#F5F5F7] text-[#050505] text-sm rounded-full font-medium font-nunito"
                >
                  {tech}
                </span>
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