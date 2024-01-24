import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import imageData from '../../../assets/imageData';

/**
 *
 * @param {userName : string, questionCount : number} param0
 * @returns UserCard
 */
export default function UserCard({
  id,
  userName,
  questionCount,
  ProfileImageSource,
}) {
  return (
    <Container to={`/post/${id}`}>
      <UserProfileImage type="userCard" imageSource={ProfileImageSource} />
      <UserName>{userName}</UserName>
      <MessageBox>
        <MessageIcon src={imageData.messageIcon} alt="메세지아이콘" />
        받은 질문
        <span>{questionCount}개</span>
      </MessageBox>
    </Container>
  );
}

UserCard.defualtprops = {
  userName: '아초는 고양이',
  questionCount: 0,
};

const Container = styled(Link)`
  max-width: 22rem;
  min-width: 186px;
  border-radius: 1.6rem;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 18rem;
  @media screen and (max-width: 768px) {
    padding: 1.6rem;
    width: 15.55rem;
    height: 16.8rem;
  }
`;

const UserName = styled.span`
  color: var(--Grayscale-60);
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  @media screen and (max-width: 768px) {
    line-height: 2.4rem;
    font-size: 1.8rem;
  }
`;

const MessageBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--Grayscale-40);
  span {
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const MessageIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  @media screen and (max-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
