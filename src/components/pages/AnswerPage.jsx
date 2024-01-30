import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../atoms/Button/DeleteButton/DeleteButton';
import requestApi from '../../utils/requestApi';
import TopPanel from '../organisms/TopPanel/TopPanel';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import useQuestionOwnerData from '../../hooks/useQuestionOwnerData';
import useQuestionData from '../../hooks/useQuestionData';

// TODO(노진석) : 나중에 로직 만들 때 수정
export default function AnswerPage() {
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);

  const subjectId = useParams();
  const currentSubjectId = localStorage.getItem('subjectId');
  const navigate = useNavigate();
  const SUBJECT_URL = `subjects/${subjectId.id}/`;
  if (subjectId.id !== currentSubjectId) {
    navigate('/list');
  }
  const deleteSubject = () => {
    requestApi(SUBJECT_URL, 'delete');
    localStorage.removeItem('subjectId');
    navigate('/');
  };

  const { name, imageSource } = useQuestionOwnerData();

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
        <Container>
          <DeleteButtonBox>
            <DeleteButton onClick={deleteSubject} />
          </DeleteButtonBox>
          <FeedCardList
            type="answer"
            questionCount={count}
            name={name}
            imageSource={imageSource}
            questionsData={questions}
            setData={setQuestions}
            setCount={setCount}
          />
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
