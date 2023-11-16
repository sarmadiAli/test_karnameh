import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchQuestionDetail } from '../services';
import { questionType } from '../components/globalType';

const useEditQuestion = (id: number | string | string[]) => {
  const queryClient = useQueryClient();
  return useMutation(
    (body: questionType) => {
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
