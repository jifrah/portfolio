import React from 'react';
import { Section, Container, Card, Button } from '../ui';
import { useBlogPosts } from '../../hooks/useContentful';

export const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Card key={post.id}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-sm text-[#515154] mb-3 font-nunito">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 font-playfair">{post.title}</h3>
                <p className="text-[#1D1D1F] mb-4 font-nunito">{post.excerpt}</p>
                <button className="font-semibold text-[#050505] hover:text-[#515154] transition-colors font-nunito">
                  Read More →
                </button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>View All Posts</Button>
        </div>
      </Container>
    </Section>
  );
};
