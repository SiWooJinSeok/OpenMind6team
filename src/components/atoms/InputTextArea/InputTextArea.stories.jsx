import InputTextArea from './InputTextArea';

export default {
  title: 'InputTextArea',
  component: InputTextArea,
};

export const name = () => (
  <InputTextArea width="304px" height="108px" placeholder="이름을 입력하세요" />
);
export const answer = () => (
  <InputTextArea width="500px" height="154px" placeholder="답변을 입력하세요" />
);
export const question = () => (
  <InputTextArea width="500px" height="148px" placeholder="질문을 입력하세요" />
);
