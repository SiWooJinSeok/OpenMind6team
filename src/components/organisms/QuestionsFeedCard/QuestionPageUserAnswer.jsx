import styled, { css } from 'styled-components';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import getElapsedTime from '../../../utils/getElapsedTime';

/**
 * (송상훈)
 * FeedCardAnswer 컴포넌트는 피드 카드 안에서 답변을 나타내는 컴포넌트입니다.
 * @param {Object} props.answerData - 답변 데이터 객체
 * @param {string} props.name - 사용자 이름
 * @param {string} props.imageSource - 이미지 소스
 * @returns {JSX.Element} 답변 컴포넌트
 */

export default function QuestionPageUserAnswer({
  answerData,
  name,
  imageSource,
}) {
  const { content, createdAt } = answerData;

  const elapsedTimeAnswer = getElapsedTime(createdAt);
  return (
    <AnswerSection>
      <UserProfileImage type="feedCard" imageSource={imageSource} />
      <AnswerDetail>
        <div>
          <span>{name}</span>
          <span>{elapsedTimeAnswer}</span>
        </div>
        <AnswerContent specialText={content === '답변거절'}>
          {content}
        </AnswerContent>
      </AnswerDetail>
    </AnswerSection>
  );
}
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

    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 18px;
    }
  }

  span:last-child {
    color: var(--Grayscale-40);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
    margin-left: 8px;
  }
`;
const AnswerContent = styled.p`
  color: var(--Grayscale-60);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;

  ${(props) =>
    props.specialText &&
    css`
      color: var(--Red-50);
    `}
`;
