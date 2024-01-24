import { useNavigate } from 'react-router-dom';

/**
 *
 * @returns handleGoToAnswerButtonClick : event handler
 */
const useGoToAnswerButtonClick = () => {
  const navigate = useNavigate();

  const handleGoToAnswerButtonClick = () => {
    const subjectId = localStorage.getItem('subjectId');
    if (subjectId === null) {
      return navigate('/');
    }
    return navigate(`/post/${subjectId}/answer`);
  };

  return { handleGoToAnswerButtonClick };
};

export default useGoToAnswerButtonClick;
