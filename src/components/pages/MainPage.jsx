import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import imageData from '../../assets/imageData';
import GoToAnswerButton from '../atoms/Button/GoToAnswerButton/GoToAnswerButton';
import GetQuestionBox from '../organisms/GetQuestionBox/GetQuestionBox';
/**
 *
 * @returns MainPage
 */

export default function MainPage() {
  // TODO: MainPageImage top 위치 동적으로 지정
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/list');
  };
  return (
    <Wrapper>
      <Container>
        <MainLogo src={imageData.logo} />
        <StyledGoToAnswerButton
          text="질문하러 가기"
          onClick={handleButtonClick}
        />
        <GetQuestionBox />
      </Container>
      <MainPageImage src={imageData.mainPageImage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--Grayscale-20, #f9f9f9);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 160px;
  z-index: 1;
`;
const MainLogo = styled.img`
  width: 456px;
  height: 180px;
  @media (max-width: 767px) {
    & {
      width: 248px;
      height: 98px;
    }
  }
`;
const StyledGoToAnswerButton = styled(GoToAnswerButton)`
  @media (min-width: 767px) {
    & {
      position: fixed;
      top: 45px;
      right: 130px;
    }
  }
`;
const MainPageImage = styled.img`
  position: fixed;
  width: 100%;
  top: 205px;
`;
