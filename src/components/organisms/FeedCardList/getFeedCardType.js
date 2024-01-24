import AnswerFeedCard from '../AnswerFeedCard/AnswerFeedCard';
import QuestionFeedCard from '../QuestionsFeedCard/QuestionsFeedCard';

const getFeedCardType = (type = 'answer') => {
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
  return mockData.map((it) => <QuestionFeedCard key={it.id} />);
};

export default getFeedCardType;
