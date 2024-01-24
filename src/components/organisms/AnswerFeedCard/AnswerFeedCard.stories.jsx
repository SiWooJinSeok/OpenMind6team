import FeedCard from './AnswerFeedCard';

export default {
  title: 'FeedCard/FeedCard',
  component: FeedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <FeedCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  inputValue: '초기값',
};
