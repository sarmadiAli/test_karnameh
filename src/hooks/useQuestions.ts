import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services';

const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts('/posts'),
  });
};

export default usePosts;
