import styled from 'styled-components';
import TopPanel from '../organisms/TopPanel/TopPanel';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import FloatingButton from '../atoms/Button/FloatingButton/FloatingButton';

export default function QuestionPage() {
  return (
    <>
      <TopPanel />
      <Wrapper>
        <FeedCard>
          <FeedCardList type="question" />
        </FeedCard>
        <ButtonSection>
          <FloatingButton>질문 작성하기</FloatingButton>
        </ButtonSection>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 780px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 54px 32px 0;
`;

const ButtonSection = styled.div`
  margin: 54px 32px 32px auto;
`;
