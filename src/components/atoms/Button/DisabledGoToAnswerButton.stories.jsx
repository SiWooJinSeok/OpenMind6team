import DisabledGoToAnswerButton from './DisabledGoToAnswerButton';

export default {
  title: 'DisabledGoToAnswerButton',
  component: DisabledGoToAnswerButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <DisabledGoToAnswerButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '대답하러가기',
  width: '300px',
};
