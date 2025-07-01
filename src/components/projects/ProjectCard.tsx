import React from 'react';
import { Card } from '../ui';
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
    <Card onClick={onClick}>
      <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 font-playfair">{project.title}</h3>
        <div className="flex items-center gap-6 text-[#515154] mb-4">
          <span className="font-nunito">{project.year}</span>
          <span className="font-nunito">{getCategoryLabel(project.category)}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 bg-[#E5E5E5] text-[#050505] text-sm rounded-full font-medium font-nunito"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
