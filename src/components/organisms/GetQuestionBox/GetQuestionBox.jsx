import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getFetch from '../../../utils/getFetch';
import AskQuestionButton from '../../atoms/Button/AskQuestionButton';
import InputField from '../../atoms/Input/InputField';

const HOST = 'openmind-api.vercel.app';
/**
 *
 * @returns 이름 입력, 질문 받기 버튼을 포함한 UI
 */
export default function GetQuestionBox() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');

  const handleInputName = (value) => {
    setInputName(value);
  };

  const handleButtonClick = async () => {
    const subjectName = { name: inputName };
    const data = await getFetch(HOST, 'subjects', 'post', subjectName);
    localStorage.setItem('subjectId', data.id);
    navigate(`/post/${data.id}/answer`);
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
