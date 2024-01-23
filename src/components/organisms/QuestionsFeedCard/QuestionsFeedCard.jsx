import styled from 'styled-components';
import FeedCardItem from './QuestionsFeedCardItem';
import MessagesImg from '../../../assets/img/Messages_Brown.svg';
import boxImg from '../../../assets/img/box.svg';

export default function FeedCard({ questions }) {
  const numberOfQuestions = questions.length;

  return (
    <FeedCardWrapper>
      <QuestionsCount>
        <img src={MessagesImg} alt="메세지 이미지" />
        {numberOfQuestions > 0
          ? `${numberOfQuestions}개의 질문이 있습니다`
          : '아직 질문이 없습니다.'}
      </QuestionsCount>
      {numberOfQuestions > 0 ? (
        <QuestionsList>
          {questions.map((question) => {
            return (
              <li>
                <FeedCardItem question={question} />
              </li>
            );
          })}
        </QuestionsList>
      ) : (
        <BoxImg src={boxImg} alt="박스이미지" />
      )}
    </FeedCardWrapper>
  );
}

const FeedCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background-color: var(--Brown-10);
  width: 716px;
  height: ${(props) => (props.hasQuestions ? '1138px' : '330px')};
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

const BoxImg = styled.img`
  width: 170px;
  height: 174px;
  margin-top: 45px;
`;
