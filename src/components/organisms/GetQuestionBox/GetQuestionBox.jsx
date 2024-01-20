import styled from 'styled-components';
import InputField from '../../atoms/Input/InputField';
import AskQuestionButton from '../../atoms/Button/AskQuestionButton';

/**
 *
 * @returns 이름 입력, 질문 받기 버튼을 포함한 UI
 */
export default function GetQuestionBox() {
  // TODO(이시열) : InputField 에 들어갈 handler - 이름 입력 후 질문 받기 버튼을 누르면 폼 제출 구현
  return (
    <Wrapper>
      <Container>
        <InputField />
        <AskQuestionButton text="질문 받기" width="100%" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 32px;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);
`;
const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
