import styled from 'styled-components';

import Header from '../components/organisms/AnswerPageHeader/Header';
import DeleteButton from '../components/atoms/Button/DeleteButton';

export default function AnswerPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <DeleteButtonBox>
            <DeleteButton />
          </DeleteButtonBox>
          <QuestionBox>아이템</QuestionBox>
        </Container>
      </Wrapper>
    </>
  );
}

const QuestionBox = styled.div`
  width: 715px;
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
