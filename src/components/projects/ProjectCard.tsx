// src/components/projects/ProjectCard.tsx
import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="bg-transparent">
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-2xl mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div>
        {/* Title */}
        <h3 className="text-[20px] font-semibold font-nunito text-[#050505] mb-3">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-[14px] font-normal font-nunito text-[#1D1D1F] leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Learn More Link - Only clickable element */}
        <button
          onClick={onClick}
          className="flex items-center text-[#050505] text-[16px] font-bold font-nunito hover:opacity-70 transition-opacity cursor-pointer"
        >
          <CircleArrowRight className="w-5 h-5 mr-1 5" strokeWidth={1} />
          Learn more
        </button>
      </div>
    </div>
  );
};