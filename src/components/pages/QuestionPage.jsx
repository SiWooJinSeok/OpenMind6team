import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TopPanel from '../organisms/TopPanel/TopPanel';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import FloatingButton from '../atoms/Button/FloatingButton';
import useRequestApi from '../../hooks/useRequestApi';
import FloatingButton from '../atoms/Button/FloatingButton/FloatingButton';
import Modal from '../organisms/Modal/Modal';

// Todo (송상훈) 좋아요 싫어요 로직 추가, 무한스크롤 구현
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
  const [isModalClicked, setIsModalClicked] = useState(false);
  const toggleModal = () => {
    setIsModalClicked((prev) => !prev);
  };

  // 스크롤바 영역 보존
  document.documentElement.style.scrollbarGutter = 'stable';

  // 모달창이 띄워지면 스크롤 방지
  useEffect(() => {
    if (isModalClicked) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalClicked]);

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
          <FloatingButton toggleModal={toggleModal}>
            질문 작성하기
          </FloatingButton>
        </ButtonSection>
      </Wrapper>
      {isModalClicked ? <Modal toggleModal={toggleModal} /> : null}
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
