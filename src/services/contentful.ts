import { createClient } from 'contentful';
import { Project, BlogPost } from '../types';
import { ContentfulProjectSkeleton, ContentfulBlogPostSkeleton } from '../types/contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || ''
});

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await client.getEntries<ContentfulProjectSkeleton>({
      content_type: 'project'
    });

    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description || '',
      image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : '',
      category: item.fields.category as Project['category'],
      technologies: item.fields.technologies || [],
      details: item.fields.details || '',
      link: '', // Since link field doesn't exist in Contentful, provide empty string
      year: item.fields.year || ''
    }));
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
    // Return mock data as fallback
    const { mockProjects } = await import('../data/mockData');
    return mockProjects;
  }
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries<ContentfulBlogPostSkeleton>({
      content_type: 'blogPost'
    });

    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      excerpt: item.fields.excerpt || '',
      date: item.fields.date ? new Date(item.fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '',
      image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : '',
      slug: item.fields.slug || ''
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    // Return mock data as fallback
    const { mockBlogPosts } = await import('../data/mockData');
    return mockBlogPosts;
  }
};