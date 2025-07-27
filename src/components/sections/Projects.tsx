import React, { useState } from 'react';
import { Section, Container } from '../ui';
import { ProjectCard } from '../projects/ProjectCard';
import { LoadMore } from '../ui/LoadMore';
import { useProjects } from '../../hooks/useContentful';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const { projects, loading, error } = useProjects();

  // Only get product projects (featured work)
  const productProjects = projects.filter(p => p.category === 'product');
  const displayedProjects = productProjects.slice(0, visibleCount);
  const hasMoreProjects = productProjects.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  // Handle project card click - navigate to project detail page
  const handleProjectClick = (project: Project) => {
    window.location.href = `/project/${project.id}`;
  };

  if (loading) {
    return (
      <Section id="latest-work">
        <Container>
          <div className="text-center">Loading projects...</div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="latest-work">
        <Container>
          <div className="text-center text-red-600">Error loading projects</div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="latest-work" variant="light">
      <Container className="max-w-none">
        <div className="mb-12">
          <h2 className="text-[30px] md:text-[36px] font-nunito font-semibold text-left">
            Latest Work
          </h2>
        </div>     
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 staggered-2-col">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="mt-12">
            <LoadMore 
              hasMore={hasMoreProjects}
              onLoadMore={handleLoadMore}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};