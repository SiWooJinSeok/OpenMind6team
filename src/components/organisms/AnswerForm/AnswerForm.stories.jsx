import AnswerForm from './AnswerForm';

export default {
  title: 'Organisms/FeedCard/AnswerFrom',
  component: AnswerForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputValue: { control: 'text', defaultValue: '초기값' },
    setInputValue: { action: 'setState' },
  },
};

const Template = (args) => <AnswerForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  inputValue: '초기값',
};
