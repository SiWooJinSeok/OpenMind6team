import AnswerFeedCard from '../AnswerFeedCard/AnswerFeedCard';

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

  return null;
};

export default getFeedCardType;
