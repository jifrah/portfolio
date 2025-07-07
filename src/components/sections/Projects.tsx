// src/components/sections/Projects.tsx
import React, { useState } from 'react';
import { Section, Container } from '../ui';
import { ProjectFilters } from '../projects/ProjectFilters';
import { ProjectCard } from '../projects/ProjectCard';
import { LoadMore } from '../ui/LoadMore';
import { useProjects } from '../../hooks/useContentful';
import { Project, ProjectCategory } from '../../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('dataScience');
  const [visibleCount, setVisibleCount] = useState(4);
  const { projects, loading, error } = useProjects();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = filteredProjects.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleFilterChange = (filter: ProjectCategory | 'all') => {
    setActiveFilter(filter);
    setVisibleCount(4); // Reset visible count when filter changes
  };

  // Handle project card click - navigate to project detail page
  const handleProjectClick = (project: Project) => {
    // Option 1: Navigate to project detail page using URL slug/ID
    window.location.href = `/project/${project.id}`;
    
    // Option 2: If you want to use React Router (requires installation)
    // navigate(`/project/${project.id}`);
    
    // Option 3: Open project in new tab
    // window.open(`/project/${project.id}`, '_blank');
  };

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
    <Section id="projects">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-left mb-12">
          Projects
        </h2>
        
        <ProjectFilters 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <LoadMore 
          hasMore={hasMoreProjects}
          onLoadMore={handleLoadMore}
        />
      </Container>
    </Section>
  );
};