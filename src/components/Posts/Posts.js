import { usePosts } from '../../hooks/usePosts';
import Post from './Post';
import './Posts.css';

export default function Posts() {
  const { loading, error, posts } = usePosts();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
}
