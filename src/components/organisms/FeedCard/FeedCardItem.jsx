import styled from 'styled-components';
import getElapsedTime from '../../../util/getElapsedTime';
import Badge from '../../atoms/Badge/Badge';
import ThumbsDown from '../../atoms/Reaction/ThumbsDown';
import ThumbsUp from '../../atoms/Reaction/ThumbsUp';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';

export default function FeedCardItem({ question }) {
  const elapsedTimeQuestion = getElapsedTime(question.createdAt);
  const elapsedTimeAnswer =
    question.answer && question.answer.createdAt
      ? getElapsedTime(question.answer.createdAt)
      : null;

  return (
    <FeedCardItemWrapper>
      <Badge isAnswered={!!question.answer} />
      <QuestionSection>
        <span>질문•{elapsedTimeQuestion}</span>
        <p>{question.content}</p>
      </QuestionSection>
      {question.answer && (
        <AnswerSection>
          <UserProfileImage />
          <AnswerDetail>
            <div>
              <span>답변유저아이디</span>
              <span>{elapsedTimeAnswer}</span>
            </div>
            <p>{question.answer.content}</p>
          </AnswerDetail>
        </AnswerSection>
      )}
      <ThumbsSection>
        <ThumbsUp count={question.like} />
        <ThumbsDown count={question.dislike} />
      </ThumbsSection>
    </FeedCardItemWrapper>
  );
}

const FeedCardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 684px;
  padding: 32px;
  gap: 32px 0;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  background-color: var(--Grayscale-10);
`;

const QuestionSection = styled.section`
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
  }
`;

const AnswerSection = styled.section`
  display: flex;
  gap: 12px;
`;

const AnswerDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span:first-child {
    color: var(--Grayscale-60);
    font-family: Actor;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 24px;
  }

  span:last-child {
    color: var(--Grayscale-40);
    font-size: 1.4rem
    font-weight: 500;
    line-height: 18px;
    margin-left:8px
  }

  p {
    color: var(--Grayscale-60);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
  }
`;

const ThumbsSection = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--Grayscale-30);
  padding-top: 24px;
  gap: 32px;
`;
