import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import GoToAnswerButton from '../../atoms/Button/GoToAnswerButton';

// TODO : 답변하러가기 navigate 함수 붙여줘야 합니다
export default function QuestionListNavbar() {
  return (
    <Navbar>
      <LogoBox to="/">
        <img src={imageData.openMindLogo} alt="로고 이미지" />
      </LogoBox>
      <GoToAnswerButton text="답변하러가기" />
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;

  @media (max-width: 1300px) {
    max-width: none;
    padding: 0 50px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 54px;
  }
`;

const LogoBox = styled(Link)`
  width: 146px;
  height: 57px;

  img {
    width: 100%;
    height: 100%;
  }
`;
