import styled from 'styled-components';
import AnswerForm from '../AnswerForm/AnswerForm';

const getAnswerType = ({ type, handleType, answer, setAnswer }) => {
  switch (type) {
    case 'Edit':
      return (
        <AnswerForm
          onClick={handleType}
          inputValue={answer}
          setInputValue={setAnswer}
        />
      );
    case 'Answer':
      if (answer === '답변거절') {
        return <NoAnswer>답변거절</NoAnswer>;
      }
      return <Paragraph>{answer}</Paragraph>;
    case 'NoAnswer':
      return <NoAnswer>답변거절</NoAnswer>;
    default:
      return null;
  }
};

export default getAnswerType;
const NoAnswer = styled.span`
  color: var(--Red-50);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;
const Paragraph = styled.p`
  color: var(--Grayscale-60);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;
`;
