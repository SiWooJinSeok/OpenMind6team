import { useState } from 'react';
import requestApi from '../utils/requestApi';
import imageData from '../assets/imageData';

const useDeleteQuestion = ({ setData, id, questionsData }) => {
  const [isClicked, setIsClicked] = useState();
  const deleteQuestion = async () => {
    if (isClicked) {
      return;
    }
    setIsClicked(true);
    await requestApi(`questions/${id}/`, 'delete');
    setData((preData) => {
      const currentData = preData.results.filter(
        (it) => it.id !== questionsData.id,
      );
      return {
        ...preData,
        results: currentData,
        count: preData.count - 1,
      };
    });
    setIsClicked(false);
  };

  const deleteButtons = {
    onClick: deleteQuestion,
    text: '삭제하기',
    imageSource: imageData.closeIcon,
  };

  return { deleteButtons };
};

export default useDeleteQuestion;
