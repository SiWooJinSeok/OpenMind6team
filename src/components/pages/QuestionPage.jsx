import styled from 'styled-components';
import FeedCard from '../organisms/QuestionsFeedCard/QuestionsFeedCard';
import bannerImg from '../../assets/img/v-872-batch-5-nunny-041.png';
import UserProfileHeader from '../organisms/UserProfileHeader/UserProfileHeader';
import FloatingButton from '../atoms/Button/FloatingButton/FloatingButton';
import questions from '../../mock.json';

export default function QuestionPage() {
  return (
    <QuestionPageWrapper>
      <BannerImg src={bannerImg} alt="배너이미지" />
      <ProfileContainer>
        <UserProfileHeader />
      </ProfileContainer>
      <MainSection>
        <FeedCard questions={questions} />
        <ButtonSection>
          <FloatingButton>질문 작성하기</FloatingButton>
        </ButtonSection>
      </MainSection>
    </QuestionPageWrapper>
  );
}

const QuestionPageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grayscale-20);
`;

const BannerImg = styled.img`
  width: 1200px;
  height: 234px;

  @media (max-width: 768px) {
    width: 906px;
    height: 177px;
  }
`;

const ProfileContainer = styled.div`
  position: absolute;
  top: 50px;

  @media (max-width: 768px) {
    top: 40px;
  }
`;

const MainSection = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 189px;
  background-color: var(--Grayscale-20);

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 176px;
  }
`;

const ButtonSection = styled.div`
  margin: 58px 24px 24px auto;
`;
