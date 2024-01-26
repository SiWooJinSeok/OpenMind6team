import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopPanel from '../organisms/TopPanel/TopPanel';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import FloatingButton from '../atoms/Button/FloatingButton';
import useRequestApi from '../../hooks/useRequestApi';

// Todo (송상훈) if 아래 데이터 로딩중일때 로직 처리
export default function QuestionPage() {
  const { id } = useParams();

  const { data: ownerData } = useRequestApi(`subjects/${id}/`, 'get');
  const imageSource = ownerData?.imageSource;
  const name = ownerData?.name;

  const { data: questionsData } = useRequestApi(
    `subjects/${id}/questions/?limit=5&offset=0`,
    'get',
  );
  const count = questionsData?.count || 0;
  const questions = questionsData?.results || [];

  return (
    <>
      <TopPanel name={name} imageSource={imageSource} />
      <Wrapper>
        <FeedCard>
          <FeedCardList
            type="question"
            questionCount={count}
            questionsData={questions}
            name={name}
            imageSource={imageSource}
          />
        </FeedCard>
        <ButtonSection>
          <FloatingButton>질문 작성하기</FloatingButton>
        </ButtonSection>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 780px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 54px 32px 0;
`;

const ButtonSection = styled.div`
  margin: 54px 32px 32px auto;
`;
