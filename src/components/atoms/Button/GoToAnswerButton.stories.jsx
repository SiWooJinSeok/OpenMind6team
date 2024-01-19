import GoToAnswerButton from './GoToAnswerButton';

export default {
  title: 'GoToAnswerButton',
  component: GoToAnswerButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <GoToAnswerButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '대답하러가기',
  width: '300px',
};
