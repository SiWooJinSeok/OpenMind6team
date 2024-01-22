import styled from 'styled-components';
import FeedCard from '../organisms/FeedCard/FeedCard';
import bannerImg from '../../assets/img/v-872-batch-5-nunny-041.png';
import UserProfileHeader from '../organisms/UserProfileHeader/UserProfileHeader';
import FloatingButton from '../atoms/Button/FloatingButton';

export default function QuestionPage({ questions }) {
  return (
    <QuestionPageWrapper>
      <BannerImg src={bannerImg} alt="배너이미지" />
      <ProfileContainer>
        <UserProfileHeader />
      </ProfileContainer>
      <MainSection>
        <FeedCard questions={questions} />
      </MainSection>
      <ButtonSection>
        <FloatingButton>질문 작성하기</FloatingButton>
      </ButtonSection>
    </QuestionPageWrapper>
  );
}

const QuestionPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grayscale-20);
`;

const BannerImg = styled.img`
  width: 1200px;
  height: 234px;
`;

const ProfileContainer = styled.div`
  position: absolute;
  top: 50px;
`;

const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--Grayscale-20);
  margin-top: 189px;
  margin-bottom: 136px;
`;

const ButtonSection = styled.div`
  position: relative;
  top: -24px;
  left: 472px;
`;
