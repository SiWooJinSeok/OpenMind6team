import AnswerFeedCard from './AnswerFeedCard';

export default {
  title: 'Organisms/FeedCard/AnswerFeedCard',
  component: AnswerFeedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <AnswerFeedCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  inputValue: '초기값',
  questionsData: {
    id: 41,
    subjectId: 23,
    content: '가장 좋아하는 동물이 궁금해요!',
    like: 9,
    dislike: 2,
    createdAt: '2023-10-31T09:27:59.497667Z',
    answer: {
      id: 22,
      content: '',
      isRejected: false,
      createdAt: '2023-11-01T00:43:56.863795Z',
    },
  },
};
