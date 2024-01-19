import DisabledGoToAnswerButton from './DisabledGoToAnswerButton';

export default {
  title: 'Button/DisabledGoToAnswerButton',
  component: DisabledGoToAnswerButton,
};

export const Default = () => (
  <DisabledGoToAnswerButton text="질문하러가기" width="auto" />
);

export const Long = () => (
  <DisabledGoToAnswerButton text="질문하러가기" width="1000px" />
);
