import QuestionListNextPageButton from './QuestionListNextPageButton';

export default {
  title: 'Organisms/QuestionListNextPageButton',
  component: QuestionListNextPageButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onNextPageButtonClick: { control: 'function' },
  },
};

export function Default(args) {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <QuestionListNextPageButton {...args} />
    </div>
  );
}
