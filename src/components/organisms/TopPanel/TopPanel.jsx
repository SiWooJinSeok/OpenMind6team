import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import imageData from '../../../assets/imageData';
import ShareButtonBox from '../ShareButtonBox/ShareButtonBox';

/**
 *
 * @param {object} owner : 질문 받는 주인
 * @returns
 */
export default function TopPanel({ name, imageSource }) {
  return (
    <>
      <Background $bgImg={imageData.bgImg} />
      <Wrapper>
        <Container>
          <Link to="/">
            <Logo src={imageData.logo} alt="로고" />
          </Link>
          <UserProfileImage type="profile" imageSource={imageSource} />
          <UserName>{name}</UserName>
          <ShareButtonBox />
        </Container>
      </Wrapper>
    </>
  );
}

TopPanel.defaultProps = {
  name: '아초는고양이',
  imageSource: imageData.defaultProfile,
};

const Logo = styled.img`
  width: 170px;
  height: 67px;
  @media screen and (max-width: 768px) {
    width: 124px;
    height: 49px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.span`
  font-family: Actor;
  font-weight: 400;
  line-height: 40px;
  font-size: 3.2rem;
  @media screen and (max-width: 768px) {
    line-height: 30px;
    font-size: 2.4rem;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Background = styled.div`
  position: absolute;
  background: url(${(props) => props.$bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: hard-light;
  z-index: 1;
  width: 100%;
  height: 234px;
  @media screen and (max-width: 768px) {
    height: 177px;
  }
`;
