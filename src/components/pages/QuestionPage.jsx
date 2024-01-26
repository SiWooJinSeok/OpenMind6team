import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useQuestionData from '../../hooks/useQuestionData';
import useRequestApi from '../../hooks/useRequestApi';
import FloatingButton from '../atoms/Button/FloatingButton/FloatingButton';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import Modal from '../organisms/Modal/Modal';
import TopPanel from '../organisms/TopPanel/TopPanel';

// Todo (송상훈) 좋아요 싫어요 로직구현, 무한스크롤 구현
export default function QuestionPage() {
  const { id } = useParams();

  const { data: ownerData } = useRequestApi(`subjects/${id}/`, 'get');
  const imageSource = ownerData?.imageSource;
  const name = ownerData?.name;

  const { count, questions } = useQuestionData();

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
      {isModalClicked ? (
        <Modal
          toggleModal={toggleModal}
          imageSource={imageSource}
          name={name}
          id={id}
        />
      ) : null}
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
