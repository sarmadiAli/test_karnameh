import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createQuestion } from '../services';

const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (body) => {
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
