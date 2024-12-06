import React, { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {children}
    </div>
  );
};

export default BlogLayout;
