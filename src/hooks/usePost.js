import { useEffect, useState } from 'react';
import { getPostDetail } from '../services/posts';

export function usePost(id) {
  const [postDetail, setPostDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostDetail(id);
        setPostDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { postDetail, setPostDetail, loading, error, setError };
}
