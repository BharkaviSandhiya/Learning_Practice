import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  
  const postTitle = Array.isArray(slug) ? slug[0] : slug;

  return (
    <div>
      <h2>{postTitle?.replace('-', ' ')}</h2>
      <p>This is the content of the blog post.</p>
    </div>
  );
};

export default BlogPost;
