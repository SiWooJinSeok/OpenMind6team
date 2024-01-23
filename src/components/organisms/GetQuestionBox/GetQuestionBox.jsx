import { useState } from 'react';
import styled from 'styled-components';
import AskQuestionButton from '../../atoms/Button/AskQuestionButton';
import InputField from '../../atoms/Input/InputField';

/**
 *
 * @returns 이름 입력, 질문 받기 버튼을 포함한 UI
 */
export default function GetQuestionBox() {
  // TODO(이시열) : InputField 에 들어갈 handler - 이름 입력 후 질문 받기 버튼을 누르면 api 호출 구현
  const [inputName, setInputName] = useState('');
  const handleInputName = (value) => {
    setInputName(value);
  };

  return (
    <Wrapper>
      <Container>
        <InputField value={inputName} handler={handleInputName} />
        <AskQuestionButton text="질문 받기" width="100%" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 400px;
  padding: 32px;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);
  @media (max-width: 767px) {
    & {
      padding: 24px;
      width: 305px;
    }
  }
`;
const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
