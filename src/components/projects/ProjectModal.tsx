import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Modal } from '../ui';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video object-cover rounded-t-3xl" 
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 font-playfair">{project.title}</h3>
          <p className="text-[#1D1D1F] mb-6 font-nunito">{project.details}</p>
          <div className="mb-6">
            <h4 className="font-semibold text-[#050505] mb-3 font-nunito">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-[#E5E5E5] text-[#050505] text-sm rounded-full font-nunito"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#050505] text-[#F8F8F8] px-6 py-3 rounded-xl font-semibold hover:bg-[#1D1D1F] transition-colors font-nunito"
          >
            View Project <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};