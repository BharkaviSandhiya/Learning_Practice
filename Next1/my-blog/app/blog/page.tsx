import Link from 'next/link';

const posts = [
  { slug: 'post-1', title: 'First Post' },
  { slug: 'post-2', title: 'Second Post' },
];

export default function Blog() {
  return (
    <div>
      {posts.map(post => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
