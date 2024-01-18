import GoToAnswerButton from './GoToAnswerButton';

export default {
  title: 'GoToAnswerButton',
  component: GoToAnswerButton,
};

export const Default = () => (
  <GoToAnswerButton text="질문하러가기" width="auto" />
);

export const Long = () => (
  <GoToAnswerButton text="질문하러가기" width="1000px" />
);
