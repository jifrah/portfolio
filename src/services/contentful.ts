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
      content_type: 'project',
      include: 2  // This resolves linked assets up to 2 levels deep
    });

    return response.items.map(item => {
      const image = item.fields.image as any;
      const imageUrl = image?.fields?.file?.url;
      return {
        id: item.sys.id,
        title: item.fields.title,
        description: item.fields.description || '',
        image: imageUrl ? `https:${imageUrl}` : '',
        category: item.fields.category as Project['category'],
        technologies: item.fields.technologies || [],
        details: item.fields.details || '',
        link: '', // Since link field doesn't exist in Contentful, provide empty string
        year: item.fields.year || ''
      };
    });
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
      content_type: 'blogPost',
      include: 2  // This resolves linked assets up to 2 levels deep
    });

    return response.items.map(item => {
      const image = item.fields.image as any;
      const imageUrl = image?.fields?.file?.url;
      return {
        id: item.sys.id,
        title: item.fields.title,
        excerpt: item.fields.excerpt || '',
        date: item.fields.date ? new Date(item.fields.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : '',
        image: imageUrl ? `https:${imageUrl}` : '',
        slug: item.fields.slug || ''
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    // Return mock data as fallback
    const { mockBlogPosts } = await import('../data/mockData');
    return mockBlogPosts;
  }
};