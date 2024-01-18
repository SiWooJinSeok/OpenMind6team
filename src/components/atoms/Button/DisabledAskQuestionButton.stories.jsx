import DisabledAskQuestionButton from './DisabledAskQuestionButton';

export default {
  title: 'DisabledAskQuestionButton',
  component: DisabledAskQuestionButton,
};

export const Default = () => (
  <DisabledAskQuestionButton text="질문 받기" width="auto" />
);

export const Long = () => (
  <DisabledAskQuestionButton text="질문 받기" width="1000px" />
);
