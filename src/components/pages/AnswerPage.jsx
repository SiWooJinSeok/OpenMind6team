import styled from 'styled-components';
import Header from '../organisms/AnswerPageHeader/Header';
import DeleteButton from '../atoms/Button/DeleteButton';
import FeedCard from '../organisms/FeedCard/FeedCard';
import imageData from '../../assets/imageData';
// TODO(노진석) : 나중에 로직 만들 때 수정
export default function AnswerPage() {
  const questionCount = 3;
  const mockData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <DeleteButtonBox>
            <DeleteButton />
          </DeleteButtonBox>
          <QuestionBox>
            <Message>
              <MessageIcon src={imageData.messageIcon} alt="메세지 아이콘" />
              {questionCount}개의 질문이 있습니다
            </Message>
            {mockData.map((it) => (
              <FeedCard key={it.id} />
            ))}
          </QuestionBox>
        </Container>
      </Wrapper>
    </>
  );
}

const QuestionBox = styled.div`
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background: var(--Brown-10);
  width: 715px;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const MessageIcon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;
const Message = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Actor;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
`;

const Container = styled.div`
  margin: 0 clamp(32px, 100%, 256px);
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 716px;
  width: 100%;
`;

const DeleteButtonBox = styled.div`
  margin-left: auto;
`;
