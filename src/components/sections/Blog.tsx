// src/components/sections/Blog.tsx
import React from 'react';
import { Section, Container, Card, Button } from '../ui';
import { useBlogPosts } from '../../hooks/useContentful';

export const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  const handlePostClick = (post: any) => {
    // Navigate to blog post detail page
    window.location.href = `/blog/${post.id}`;
  };

  if (loading) {
    return (
      <Section id="blog">
        <Container>
          <div className="text-center">Loading blog posts...</div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="blog">
        <Container>
          <div className="text-center text-red-600">Error loading blog posts</div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="blog">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-left mb-12">
          Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              alt={post.title}
              readTime="6 min read"
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="primary">View All Posts</Button>
        </div>
      </Container>
    </Section>
  );
};