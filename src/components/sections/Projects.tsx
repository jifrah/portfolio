import React, { useState } from 'react';
import { Section, Container } from '../ui';
import { ProjectCard } from '../projects/ProjectCard';
import { LoadMore } from '../ui/LoadMore';
import { useProjects } from '../../hooks/useContentful';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const { projects, loading, error } = useProjects();

  // Split projects by category
  const productProjects = projects.filter(p => p.category === 'product');
  const dataScienceProjects = projects.filter(p => p.category === 'dataScience');
  
  const displayedProductProjects = productProjects.slice(0, visibleCount);
  const displayedDataScienceProjects = dataScienceProjects.slice(0, visibleCount);
  
  const hasMoreProjects = (productProjects.length + dataScienceProjects.length) > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  // Handle project card click - navigate to project detail page
  const handleProjectClick = (project: Project) => {
    window.location.href = `/project/${project.id}`;
  };

  if (loading) {
    return (
      <Section id="my-work">
        <Container>
          <div className="text-center">Loading projects...</div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="my-work">
        <Container>
          <div className="text-center text-red-600">Error loading projects</div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="my-work">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-left mb-12">
          My Work
        </h2>
        
        {/* Featured Work Section */}
        {productProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
              <h3 className="text-[22px] md:text-[32px] font-nunito font-semibold text-center px-6">
                Featured Work
              </h3>
              <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedProductProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Data Science Section */}
        {dataScienceProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
              <h3 className="text-[22px] md:text-[32px] font-nunito font-semibold text-center px-6">
                Data Science
              </h3>
              <div className="flex-1 h-[1px] bg-[#050505] opacity-70"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedDataScienceProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Load More Button */}
        <LoadMore 
          hasMore={hasMoreProjects}
          onLoadMore={handleLoadMore}
        />
      </Container>
    </Section>
  );
};