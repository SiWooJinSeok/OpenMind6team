import styled from 'styled-components';
import getElapsedTime from '../../../utils/getElapsedTime';
import Badge from '../../atoms/Badge/Badge';
import ThumbsDown from '../../atoms/Reaction/ThumbsDown';
import ThumbsUp from '../../atoms/Reaction/ThumbsUp';
import QuestionPageUserAnswer from './QuestionPageUserAnswer';

/**
 * (송상훈)
 * QuestionsFeedCard 컴포넌트는 질문 피드 카드를 나타내는 컴포넌트입니다.
 * @param {Object} props.question - 질문 객체
 * @param {string} props.name - 답변자 이름(드릴링)
 * @param {string} props.imageSource - 답변자 프로필 이미지 소스(드릴링)
 * @returns {JSX.Element} 질문 피드 카드 컴포넌트
 */

export default function QuestionsFeedCard({ question, name, imageSource }) {
  const { content, like, dislike, answer, createdAt } = question;

  const elapsedTimeQuestion = getElapsedTime(createdAt);

  return (
    <Wrapper>
      <Badge isAnswered={!!answer} />
      <QuestionBox>
        <span>질문•{elapsedTimeQuestion}</span>
        <p>{content}</p>
      </QuestionBox>
      {answer && (
        <QuestionPageUserAnswer
          answerData={answer}
          name={name}
          imageSource={imageSource}
        />
      )}
      <ThumbsSection>
        <ThumbsUp count={like} />
        <ThumbsDown count={dislike} />
      </ThumbsSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 684px;
  gap: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  background-color: var(--Grayscale-10);
  @media (max-width: 767px) {
    padding: 24px;
    gap: 24px;
  }
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
