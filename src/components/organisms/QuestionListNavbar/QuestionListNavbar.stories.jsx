import QuestionListNavbar from './QuestionListNavbar';

export default {
  title: 'Organisms/QuestionListNavbar',
  component: QuestionListNavbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export function QuestionListNavbarStory(args) {
  return <QuestionListNavbar {...args} />;
}
