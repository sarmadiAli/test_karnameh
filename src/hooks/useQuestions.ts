import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'src/services';

const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts('/posts'),
  });
};

export default usePosts;
