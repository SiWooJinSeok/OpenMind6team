import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useQuestionData from '../../hooks/useQuestionData';
import useQuestionOwnerData from '../../hooks/useQuestionOwnerData';
import useToggle from '../../hooks/useToggle';
import FloatingButton from '../atoms/Button/FloatingButton/FloatingButton';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import Modal from '../organisms/Modal/Modal';
import TopPanel from '../organisms/TopPanel/TopPanel';

/**
 * @returns QuestionPage
 */

export default function QuestionPage() {
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const { imageSource, name, id } = useQuestionOwnerData();

  const toggleModal = useToggle(isModalClicked, setIsModalClicked);

  useQuestionData(offset, setCount, setQuestions);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setOffset((prevOffset) => prevOffset + 8);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TopPanel name={name} imageSource={imageSource} />
      <Wrapper>
        <ButtonSection>
          <FloatingButton toggleModal={toggleModal}>
            질문 작성하기
          </FloatingButton>
        </ButtonSection>
        <FeedCard>
          <FeedCardList
            type="question"
            questionCount={count}
            questionsData={questions}
            name={name}
            imageSource={imageSource}
          />
        </FeedCard>
      </Wrapper>
      {isModalClicked ? (
        <Modal
          toggleModal={toggleModal}
          imageSource={imageSource}
          name={name}
          id={id}
          setCount={setCount}
          setQuestions={setQuestions}
        />
      ) : null}
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto 100px;
  max-width: 716px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 9px 32px 0;
`;

const ButtonSection = styled.div`
  margin-left: auto;
  margin-right: 32px;
`;
