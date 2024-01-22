import styled from 'styled-components';
import Logo from '../../../assets/img/logo.svg';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import ShareButtonBox from '../ShareButtonBox';

export default function UserProfileHeader() {
  return (
    <Container>
      <LogoImg src={Logo} alt="메인 로고" />
      <UserProfileImage type="profile" />
      <UserName>유저아이디</UserName>
      <ShareButtonBox />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const LogoImg = styled.img`
  width: 170px;
  height: 67px;
`;

const UserName = styled.span`
  color: var(--Grayscale-60);
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;
