import { useParams } from 'react-router-dom';
import useRequestApi from './useRequestApi';

const useQuestionData = () => {
  const { id } = useParams();

  const { data: questionsData } = useRequestApi(
    `subjects/${id}/questions/?limit=5&offset=0`,
    'get',
  );
  const count = questionsData?.count || 0;
  const questions = questionsData?.results || [];

  return { count, questions };
};

export default useQuestionData;
