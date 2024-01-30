import styled from 'styled-components';
import getFeedCardType from './getFeedCardType';
import EmptyBox from '../../atoms/EmptyBox/EmptyBox';
import imageData from '../../../assets/imageData';

export default function FeedCardList({
  questionCount,
  questionsData,
  name,
  imageSource,
  type,
  setData,
  setCount = null,
}) {
  return (
    <Container>
      <MessageBox>
        <MessageIcon src={imageData.messageIcon} alt="메세지 아이콘" />
        {questionCount > 0
          ? `${questionCount}개의 질문이 있습니다.`
          : '아직 질문이 없습니다'}
      </MessageBox>
      {questionCount > 0 ? (
        getFeedCardType(
          questionsData,
          name,
          imageSource,
          type,
          setData,
          setCount,
        )
      ) : (
        <EmptyBox />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background: var(--Brown-10);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MessageIcon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
const MessageBox = styled.span`
  color: var(--Brown-40);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Actor;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 24px;
  }
`;
