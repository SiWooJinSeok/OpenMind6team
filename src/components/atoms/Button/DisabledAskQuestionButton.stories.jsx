import DisabledAskQuestionButton from './DisabledAskQuestionButton';

export default {
  title: 'Button/DisabledAskQuestionButton',
  component: DisabledAskQuestionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <DisabledAskQuestionButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '질문하기',
  width: '300px',
};
