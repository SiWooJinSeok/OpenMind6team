import AskQuestionButton from './AskQuestionButton';

export default {
  title: 'Button/AskQuestionButton',
  component: AskQuestionButton,
};

export const Default = () => (
  <AskQuestionButton text="질문 받기" width="auto" />
);

export const Long = () => <AskQuestionButton text="질문 받기" width="1000px" />;
