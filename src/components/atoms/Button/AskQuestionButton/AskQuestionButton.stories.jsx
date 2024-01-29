import AskQuestionButton from './AskQuestionButton';

export default {
  title: 'Atoms/Button/AskQuestionButton',
  component: AskQuestionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <AskQuestionButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '질문하기',
  width: '300px',
};
