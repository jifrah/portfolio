export interface ContentfulProject {
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    category: string;
    technologies: string[];
    details: string;
    link: string;
    year: string;
  };
  sys: {
    id: string;
  };
}

export interface ContentfulBlogPost {
  fields: {
    title: string;
    excerpt: string;
    date: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string;
  };
  sys: {
    id: string;
  };
}