import { useHistory } from 'react-router-dom';
import { createPost } from '../../services/posts';
import PostForm from './PostForm';

export default function NewPost() {
  const history = useHistory();
  const addNewPost = async (title, description) => {
    console.log(title, description);
    // call supabase with title description
    // navigate back to /posts
    try {
      await createPost(title, description);
      history.push('/posts');
    } catch (e) {
      console.error(e.message);
    }
  };
  return <PostForm submitHandler={addNewPost} />;
}
