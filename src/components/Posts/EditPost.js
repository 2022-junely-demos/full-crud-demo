import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';

export default function EditPost() {
  const { id } = useParams();
  const { postDetail, loading, error } = usePost(id);
  console.log(postDetail);
  return <div></div>;
}
