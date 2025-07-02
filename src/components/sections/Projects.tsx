import React, { useState } from 'react';
import { Section, Container } from '../ui';
import { ProjectFilters } from '../projects/ProjectFilters';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';
import { useProjects } from '../../hooks/useContentful';
import { Project, ProjectCategory } from '../../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('dataScience');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, loading, error } = useProjects();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  if (loading) {
    return (
      <Section id="projects">
        <Container>
          <div className="text-center">Loading projects...</div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="projects">
        <Container>
          <div className="text-center text-red-600">Error loading projects</div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section id="projects">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
            Projects
          </h2>
          
          <ProjectFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />

          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};