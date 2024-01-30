import AnswerFeedCard from '../AnswerFeedCard/AnswerFeedCard';
import QuestionsFeedCard from '../QuestionsFeedCard/QuestionsFeedCard';

const getFeedCardType = (
  questionsData,
  name,
  imageSource,
  type,
  setData = null,
  setCount = null,
) => {
  if (type === 'answer') {
    return questionsData?.map((it) => (
      <AnswerFeedCard
        key={it.id}
        questionsData={it}
        name={name}
        imageSource={imageSource}
        setData={setData}
        setCount={setCount}
      />
    ));
  }
  return questionsData
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((question) => (
      <QuestionsFeedCard
        key={question.id}
        question={question}
        name={name}
        imageSource={imageSource}
      />
    ));
};

export default getFeedCardType;
