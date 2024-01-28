import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import requestApi from '../utils/requestApi';

/**
 * 질문 대상에게 작성된 질문의 갯수와 질문들을 반환,
 * 질문을 보내면 isModalClicked 상태가 바뀌어 QuestionPage 재렌더링
 * @param {boolean} isModalClicked 모달창이 띄워져 있는지 여부
 * @returns count, questions
 */
const useQuestionData = (isModalClicked, offset) => {
  const limit = 8;

  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (!hasNext) return;

    const getData = async () => {
      const questionsData = await requestApi(
        `subjects/${id}/questions/?limit=${limit}&offset=${offset}`,
        'get',
      );
      setCount(questionsData?.count || 0);
      if (offset === 0) {
        setQuestions(questionsData?.results || []);
      } else {
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          ...(questionsData?.results || []),
        ]);

        if (!questionsData?.next) {
          setHasNext(false);
        }
      }
    };

    getData();
  }, [isModalClicked, offset]);

  return { count, questions };
};

export default useQuestionData;
