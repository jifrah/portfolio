// src/components/projects/ProjectCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void; // Keep this optional for backward compatibility
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // For now, hardcode the Adie project navigation
    // Later you can use project.slug when you add it to your Project type
    if (project.title.includes('Microfinance') || project.id === '3') {
      navigate('/projects/adie');
    } else {
      // For other projects, fall back to onClick if provided
      if (onClick) {
        onClick();
      }
    }
  };
  
  return (
    <div 
      className="bg-transparent cursor-pointer group"
      onClick={handleClick}
    >
      {/* Image with specific shadow/translate effect */}
      <div className="aspect-[2/1] overflow-hidden rounded-xl mb-4 transition-all duration-300 ease-out group-hover:-translate-y-1" 
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
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Content */}
      <div>
        {/* Title */}
        <h3 className="text-[24px] md:text-[28px] font-semibold font-nunito text-[#050505] mb-3 group-hover:underline transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-[14px] md:text-[16px] font-nunito font-medium opacity-80 text-[#1D1D1F]">{project.description}</p>
      </div>
    </div>
  );
};