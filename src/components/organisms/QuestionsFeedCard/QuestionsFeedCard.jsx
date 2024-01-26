import styled from 'styled-components';
import getElapsedTime from '../../../utils/getElapsedTime';
import Badge from '../../atoms/Badge/Badge';
import ThumbsDown from '../../atoms/Reaction/ThumbsDown';
import ThumbsUp from '../../atoms/Reaction/ThumbsUp';
import QuestionPageUserAnswer from './QuestionPageUserAnswer';

// (송상훈)
export default function FeedCardItem({ questionData }) {
  const { content, like, dislike, answer, createdAt } = questionData;

  const elapsedTimeQuestion = getElapsedTime(createdAt);

  return (
    <Wrapper>
      <Badge isAnswered={!!answer} />
      <QuestionBox>
        <span>질문•{elapsedTimeQuestion}</span>
        <p>{content}</p>
      </QuestionBox>
      {answer && (
        <QuestionPageUserAnswer createdAt={createdAt} answer={answer} />
      )}
      <ThumbsSection>
        <ThumbsUp count={like} />
        <ThumbsDown count={dislike} />
      </ThumbsSection>
    </Wrapper>
  );
}

FeedCardItem.defaultProps = {
  questionData: {
    id: 41,
    subjectId: 23,
    content: '가장 좋아하는 동물이 궁금해요!',
    like: 9,
    dislike: 2,
    createdAt: '2023-10-31T09:27:59.497667Z',
    answer: {
      id: 22,
      content: '그들을 불러 귀는  ',
      isRejected: false,
      createdAt: '2023-11-01T00:43:56.863795Z',
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 684px;
  gap: 24px 0;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  background-color: var(--Grayscale-10);
`;

const QuestionBox = styled.section`
  display: flex;
  flex-direction: column;

  gap: 4px;

  span {
    color: var(--Grayscale-40);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }

  p {
    color: var(--Grayscale-60);
    font-family: Actor;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 22px;
    }
  }
`;

const ThumbsSection = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--Grayscale-30);
  padding-top: 24px;
  gap: 32px;
`;
