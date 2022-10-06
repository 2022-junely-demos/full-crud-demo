import { useHistory } from 'react-router-dom';
import { createPost } from '../../services/posts';
import PostForm from './PostForm';

export default function NewPost() {
  const history = useHistory();
  const handleSubmit = async (title, description) => {
    console.log('handling submit!');
    // call service to add new form
    try {
      await createPost(title, description);
      history.push('/posts');
    } catch (e) {
      console.error(e.message);
    }
    // navigate back to posts
  };
  return <PostForm submitHandler={handleSubmit} />;
}
