import React from 'react';

interface BlogPostProps {
  params: {
    id: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  const { id } = params;

  return <h1>Blog Post {id}</h1>;
}; 

export default BlogPost;
