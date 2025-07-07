// src/types/contentful.ts
import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Define the field structures as they actually appear in your Contentful setup
export interface ContentfulProjectFields {
  title: string;
  description?: string;
  image?: Asset;
  category: 'dataScience' | 'product'; // Match your Contentful validation
  technologies?: string[];
  details?: string;
  year?: string;
  url?: string; // Add the new URL field
}

export interface ContentfulBlogPostFields {
  title: string;
  excerpt?: string;
  date?: string;
  image?: Asset;
  slug?: string;
  content?: Document; // RichText field from Contentful
  url?: string; // Add URL field for blog posts too if needed
}

// Create skeleton types for Contentful v11
export interface ContentfulProjectSkeleton extends EntrySkeletonType {
  contentTypeId: 'project';
  fields: ContentfulProjectFields;
}

export interface ContentfulBlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: ContentfulBlogPostFields;
}

// Export the final types with proper locale specification
export type ContentfulProject = Entry<ContentfulProjectSkeleton, undefined, string>;
export type ContentfulBlogPost = Entry<ContentfulBlogPostSkeleton, undefined, string>;