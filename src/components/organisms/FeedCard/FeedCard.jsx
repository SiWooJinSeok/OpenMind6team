import styled from 'styled-components';
import FeedCardItem from './FeedCardItem';
import MessagesImg from '../../../assets/img/Messages_Brown.svg';

export default function FeedCard({ questions }) {
  const numberOfQuestions = questions.length;

  return (
    <FeedCardWrapper>
      <QuestionsCount>
        <img src={MessagesImg} alt="메세지 이미지" />
        {numberOfQuestions}개의 질문이 있습니다
      </QuestionsCount>
      <QuestionsList>
        {questions.map((question) => {
          return (
            <li>
              <FeedCardItem question={question} />
            </li>
          );
        })}
      </QuestionsList>
    </FeedCardWrapper>
  );
}

const FeedCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background-color: var(--Brown-10);
  width: 716px;
  height: 1138px;
  overflow: auto;

  @media (max-width: 1200px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const QuestionsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: 8px;
  color: var(--Brown-40);
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;

const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  gap: 20px;
`;
