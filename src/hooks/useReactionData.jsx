import requestApi from '../utils/requestApi';

const useReactionData = async (questionId, typeData) => {
  const postData = {
    type: typeData === 'like' ? 'like' : 'dislike',
  };

  const data = await requestApi(
    `questions/${questionId}/reaction/`,
    'post',
    postData,
  );

  return data;
};

export default useReactionData;
