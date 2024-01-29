import { useState } from 'react';
import requestApi from '../utils/requestApi';

const useRespondAnswer = ({
  setCurrentType,
  item,
  setItem,
  questionId,
  content,
}) => {
  const [answer, setAnswer] = useState(content);
  const respondAnswer = () => {
    setCurrentType('Answer');
    const postData = {
      content: answer,
      isRejected: false,
    };
    if (!item) {
      postData.questionId = questionId;
      requestApi(`questions/${questionId}/answers/`, 'post', postData).then(
        (result) => setItem(result),
      );
      return;
    }
    requestApi(`answers/${item.id}/`, 'patch', postData);
  };

  return { respondAnswer, answer, setAnswer };
};

export default useRespondAnswer;
