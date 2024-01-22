import React, { useState } from 'react';
import styled from 'styled-components';
import InputTextArea from '../../atoms/InputTextArea/InputTextArea';

/**
 *
 * @param {answer : state, setAnswer : setState, onClick: setState(typeChange)} param0
 * @returns AnswerEdit
 */
// TODO(노진석) : 나중에 변경 될 수 있음.
export default function AnswerForm({ answer, setAnswer, onClick }) {
  const [isAnswer, setIsAnswer] = useState(true);
  const handleAnswer = (value) => {
    setAnswer(value);
    if (value === '') {
      setIsAnswer(true);
      return;
    }
    setIsAnswer(false);
  };

  return (
    <Container>
      <InputTextArea
        value={answer}
        width="100%"
        height="154px"
        handler={handleAnswer}
        placeholder="답변을 입력해주세요"
      />
      <Button disabled={isAnswer} type="button" onClick={onClick}>
        답변완료
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background: ${(props) =>
    props.disabled ? 'var(--Brown-30)' : 'var(--Brown-40)'};
  color: #fff;
`;
