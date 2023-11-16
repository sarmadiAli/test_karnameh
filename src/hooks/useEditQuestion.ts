import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchQuestionDetail } from '../services';

const useEditQuestion = (id: number | string | string[]) => {
  const queryClient = useQueryClient();
  return useMutation(
    (body) => {
      return patchQuestionDetail('/questions', id, body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questionDetails']);
      },
    }
  );
};
export default useEditQuestion;
