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
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-2xl mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
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