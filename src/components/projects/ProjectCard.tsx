// src/components/projects/ProjectCard.tsx
import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-transparent cursor-pointer group"
      onClick={onClick}
    >
      {/* Image with fixed height 174px, no corner radius, and border */}
      <div className="h-[174px] overflow-hidden border border-[#E5E5E5] mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      
      {/* Content */}
      <div>
        {/* Title */}
        <h4 className="text-[20px] font-semibold font-nunito text-[#050505] mb-3 group-hover:underline transition-all duration-300">
          {project.title}
        </h4>
      </div>
    </div>
  );
};