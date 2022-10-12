import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { usePosts } from '../../hooks/usePosts';
import PostCard from './PostCard';
import './Posts.css';

export default function Posts() {
  const { loading, error, posts } = usePosts();
  const { user } = useUser();
  if (!user) return <Redirect to="/auth/sign-in" />;
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
