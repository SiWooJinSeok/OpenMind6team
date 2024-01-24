import styled from 'styled-components';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import getElapsedTime from '../../../utils/getElapsedTime';

export default function FeedCardAnswer({ answer, createdAt }) {
  const elapsedTimeAnswer = getElapsedTime(createdAt);
  return (
    <AnswerSection>
      <UserProfileImage type="feedCard" />
      <AnswerDetail>
        <div>
          <span>답변유저아이디</span>
          <span>{elapsedTimeAnswer}</span>
        </div>
        <p>{answer.content}</p>
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
  p {
    color: var(--Grayscale-60);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
  }
`;
