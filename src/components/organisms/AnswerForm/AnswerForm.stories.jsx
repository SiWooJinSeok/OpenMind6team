import AnswerForm from './AnswerForm';

export default {
  title: 'FeedCard/AnswerFrom',
  component: AnswerForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    answer: { control: 'text', defaultValue: '초기값' },
    setAnswer: { action: 'setState' },
  },
};

const Template = (args) => <AnswerForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  answer: '초기값',
};
