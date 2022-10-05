import { usePosts } from '../../hooks/usePosts';
import './Posts.css';

export default function Posts() {
  const { loading, error, posts } = usePosts();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
