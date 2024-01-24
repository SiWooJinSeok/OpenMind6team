import styled from 'styled-components';
import TopPanel from '../organisms/TopPanel/TopPanel';
import DeleteButton from '../atoms/Button/DeleteButton';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';

// TODO(노진석) : 나중에 로직 만들 때 수정
export default function AnswerPage() {
  return (
    <>
      <TopPanel />
      <Wrapper>
        <Container>
          <DeleteButtonBox>
            <DeleteButton />
          </DeleteButtonBox>
          <FeedCardList type="answer" />
        </Container>
      </Wrapper>
    </>
  );
}

const Container = styled.div`
  margin: 0 32px 100px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 716px;
  width: 100%;
`;

const DeleteButtonBox = styled.div`
  margin-left: auto;
`;
