import { useQuery } from '@tanstack/react-query';
import { getQuestionDetail } from '../services';

const useQuestionDetail = (id: number | string | string[]) => {
  return useQuery({
    queryKey: ['questionDetails'],
    queryFn: () => getQuestionDetail('/questions', id),
  });
};

export default useQuestionDetail;
