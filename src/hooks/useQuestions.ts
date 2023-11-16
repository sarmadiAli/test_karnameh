import { useQuery } from '@tanstack/react-query';
import { getQuestion } from '../services';

const useQuestion = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestion('/questions'),
  });
};

export default useQuestion;
