import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AskQuestionButton from '../../atoms/Button/AskQuestionButton/AskQuestionButton';

import createSubject from '../../../utils/createSubject';
import InputField from '../../atoms/InputField/InputField';

/** 이름 입력후 질문 받기 버튼 클릭 시 API 호출 후 로컬 스토리지에 subjectId 저장.
 *  /post/{subjectId}/answer 로 페이지 이동.
 *
 * @returns 이름 입력, 질문 받기 버튼을 포함한 UI
 */
export default function GetQuestionBox() {
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();

  const handleInputName = (value) => {
    if (value.length > 30) {
      return;
    }
    setInputName(value);
  };
  const handleButtonClick = async () => {
    const { id } = await createSubject(inputName);
    navigate(`/post/${id}/answer`);
  };
  return (
    <Wrapper>
      <Container>
        <InputField value={inputName} handler={handleInputName} />
        <AskQuestionButton
          text="질문 받기"
          width="100%"
          handleButtonClick={handleButtonClick}
        />
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
