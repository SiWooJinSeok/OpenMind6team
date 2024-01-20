import QuestionListNavbar from './QuestionListNavbar';

export default {
  title: 'QuestionListNavbar',
  component: QuestionListNavbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => <QuestionListNavbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '대답하러가기',
  width: '300px',
};
