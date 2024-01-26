import AnswerFeedCard from '../AnswerFeedCard/AnswerFeedCard';
import QuestionsFeedCard from '../QuestionsFeedCard/QuestionsFeedCard';

const getFeedCardType = (questionsData, name, imageSource, type = 'answer') => {
  const mockData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  if (type === 'answer') {
    return mockData.map((it) => <AnswerFeedCard key={it.id} />);
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
