import AnswerFeedCard from './AnswerFeedCard';

export default {
  title: 'FeedCard/FeedCard',
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
};
