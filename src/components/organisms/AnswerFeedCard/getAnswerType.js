import styled from 'styled-components';
import AnswerForm from '../AnswerForm/AnswerForm';

const getAnswerType = ({ type, onClick, answer, setAnswer }) => {
  switch (type) {
    case 'Edit':
      return (
        <AnswerForm
          onClick={onClick}
          inputValue={answer}
          setInputValue={setAnswer}
        />
      );
    case 'Answer':
      if (answer.replaceAll(' ', '') === '답변거절') {
        return <NoAnswer>답변거절</NoAnswer>;
      }
      return <Paragraph>{answer}</Paragraph>;
    case 'NoAnswer':
      return <NoAnswer>답변거절</NoAnswer>;
    default:
      return null;
  }
};
export const getCurrentType = (content, isRejected) => {
  if (isRejected) {
    return 'NoAnswer';
  }
  if (content === '') {
    return 'Edit';
  }
  return 'Answer';
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
