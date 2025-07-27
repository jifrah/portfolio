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
    <Section id="latest-work">
      <Container>
        {/* Title styled like the old h3 with decorative lines */}
        <div className="flex items-center mb-12">
          <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
          <h2 className="text-[22px] md:text-[32px] font-nunito font-semibold text-center px-6">
            Latest Work
          </h2>
          <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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