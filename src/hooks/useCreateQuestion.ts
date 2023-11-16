import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createQuestion } from '../services';
import { questionType } from '../components/globalType';

const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (body: Omit<questionType, 'id'>) => {
      return createQuestion('/questions', body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questions']);
      },
    }
  );
};
export default useCreateQuestion;
