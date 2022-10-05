import { useHistory, useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';
import { updatePost } from '../../services/posts';

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const { postDetail, setPostDetail, loading, error, setError } = usePost(id);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = async () => {
    console.log('update post called');
    try {
      await updatePost(postDetail.id, postDetail.title, postDetail.description);
      history.push('/posts');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        value={postDetail.title}
        onChange={(e) => setPostDetail((prevPost) => ({ ...prevPost, title: e.target.value }))}
      />
      <label>Description</label>
      <input
        type="text"
        value={postDetail.description}
        onChange={(e) =>
          setPostDetail((prevPost) => ({ ...prevPost, description: e.target.value }))
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
