import imageData from '../assets/imageData';
import requestApi from '../utils/requestApi';

const useResponseModify = ({ setCurrentType, item, questionId, setItem }) => {
  const updateClick = () => {
    setCurrentType('Edit');
  };
  const rejectClick = () => {
    setCurrentType('NoAnswer');
    const postData = {
      content: '답변거절',
      isRejected: true,
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

  const updateAnswer = {
    onClick: updateClick,
    text: '수정하기',
    imageSource: imageData.editIcon,
  };
  const rejectAnswer = {
    onClick: rejectClick,
    text: '답변거절',
    imageSource: imageData.rejectionIcon,
  };

  return { updateAnswer, rejectAnswer };
};

export default useResponseModify;
