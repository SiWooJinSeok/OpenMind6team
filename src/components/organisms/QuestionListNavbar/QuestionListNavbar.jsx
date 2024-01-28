import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import GoToAnswerButton from '../../atoms/Button/GoToAnswerButton/GoToAnswerButton';

/**
 *
 * @returns QuestionListNavbar Component
 */
export default function QuestionListNavbar() {
  const navigate = useNavigate();

  const handleGoToAnswerButtonClick = () => {
    const subjectId = localStorage.getItem('subjectId');
    if (subjectId === null) {
      return navigate('/');
    }
    return navigate(`/post/${subjectId}/answer`);
  };

  return (
    <Navbar>
      <LogoBox to="/">
        <img src={imageData.openMindLogo} alt="로고 이미지" />
      </LogoBox>
      <GoToAnswerButton
        text="답변하러가기"
        onClick={handleGoToAnswerButtonClick}
      />
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
