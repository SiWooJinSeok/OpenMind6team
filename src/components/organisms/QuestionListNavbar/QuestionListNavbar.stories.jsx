import QuestionListNavbar from './QuestionListNavbar';

export default {
  title: 'QuestionListNavbar',
  component: QuestionListNavbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <QuestionListNavbar {...args} />;

export const Default = Template.bind({});
