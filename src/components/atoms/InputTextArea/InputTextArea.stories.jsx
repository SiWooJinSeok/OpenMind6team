import InputTextArea from './InputTextArea';

export default {
  title: 'InputTextArea',
  component: InputTextArea,
};

export function name() {
  return (
    <InputTextArea
      width="30.4rem"
      height="10.8rme"
      placeholder="이름을 입력하세요"
    />
  );
}
export function answer() {
  return (
    <InputTextArea
      width="50rem"
      height="15.4rem"
      placeholder="답변을 입력하세요"
    />
  );
}
export function question() {
  return (
    <InputTextArea
      width="50rem"
      height="14.8rem"
      placeholder="질문을 입력하세요"
    />
  );
}
