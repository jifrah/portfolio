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
      {/* Image with specific shadow/translate effect */}
      <div className="aspect-square overflow-hidden rounded-2xl mb-4 transition-all duration-300 ease-out group-hover:-translate-y-1" 
           style={{ 
             boxShadow: '0 0 0 rgba(118, 126, 173, 0)', 
             transition: 'transform 300ms ease-out, box-shadow 300ms ease-out' 
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'translate(0, -4px)';
             e.currentTarget.style.boxShadow = '14px 14px 40px #767ead1f';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'translate(0, 0)';
             e.currentTarget.style.boxShadow = '0 0 0 rgba(118, 126, 173, 0)';
           }}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
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