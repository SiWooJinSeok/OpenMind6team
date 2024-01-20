import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import GoToAnswerButton from '../../atoms/Button/GoToAnswerButton';

// TODO LogoBox를 Link 태그로 바꿔야함

export default function QuestionListNavbar() {
  return (
    <Navbar>
      <Wrapper>
        <LogoBox>
          <img src={imageData.openMindLogo} alt="로고 이미지" />
        </LogoBox>
        <GoToAnswerButton text="답변하러가기" />
      </Wrapper>
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 146px;
  height: 57px;

  img {
    width: 100%;
    height: 100%;
  }
`;
