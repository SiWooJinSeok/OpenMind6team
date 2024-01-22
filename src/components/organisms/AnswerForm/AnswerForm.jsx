import React, { useState } from 'react';
import styled from 'styled-components';
import InputTextArea from '../../atoms/InputTextArea/InputTextArea';

/**
 *
 * @param {inputValue : state, setInputValue : setState, onClick: setState(typeChange)} param0
 * @returns AnswerEdit
 */
// TODO(노진석) : 나중에 변경 될 수 있음.
export default function AnswerForm({
  inputValue,
  setInputValue,
  onClick,
  placeholder = '답변을 입력해주세요',
  buttonText = '답변완료',
  inputAreaHeight = '154px',
}) {
  const [isAnswer, setIsAnswer] = useState(true);
  const handleAnswer = (value) => {
    setInputValue(value);
    if (value === '') {
      setIsAnswer(true);
      return;
    }
    setIsAnswer(false);
  };

  return (
    <Container>
      <InputTextArea
        value={inputValue}
        width="100%"
        height={inputAreaHeight}
        handler={handleAnswer}
        placeholder={placeholder}
      />
      <Button disabled={isAnswer} type="button" onClick={onClick}>
        {buttonText}
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
  font-size: 1.6rem;
`;
