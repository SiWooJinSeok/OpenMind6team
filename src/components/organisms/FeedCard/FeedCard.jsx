import styled from 'styled-components';
import Badge from '../../atoms/Badge/Badge';
import EditableDropdown from '../../atoms/Dropdown/EditableDropdown';
import FeedCardAnswer from './FeedCardAnswer';
import ThumbsUp from '../../atoms/Reaction/ThumbsUp';
import ThumbsDown from '../../atoms/Reaction/ThumbsDown';
// TODO(노진석) : 기능 구현하기
export default function FeedCard() {
  return (
    <Wrapper>
      <StateBox>
        <Badge />
        <EditableDropdown />
      </StateBox>
      <QuestionBox>
        질문 · 2주전
        <QuestionContent>좋아하는 동물은?</QuestionContent>
      </QuestionBox>
      <FeedCardAnswer currentType="NoAnswer" />
      <Hr />
      <ReactionBox>
        <ThumbsUp />
        <ThumbsDown />
      </ReactionBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 16px;
  background: var(--Grayscale-10);
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const StateBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1.4rem;
  color: var(--Grayscale-40);
  font-weight: 500;
  line-height: 18px;
`;

const QuestionContent = styled.span`
  font-size: 1.8rem;
  color: var(--Grayscale-60);
  font-weight: 400;
  line-height: 24px;
`;
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--Grayscale-30);
`;

const ReactionBox = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 32px;
`;
