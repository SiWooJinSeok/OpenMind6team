import QuestionListNavbar from './QuestionListNavbar';

export default {
  title: 'Organisms/QuestionListNavbar',
  component: QuestionListNavbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <QuestionListNavbar {...args} />;

export const Default = Template.bind({});
