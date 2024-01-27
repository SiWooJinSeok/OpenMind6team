import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import DeleteButton from '../atoms/Button/DeleteButton/DeleteButton';

import requestApi from '../../utils/requestApi';
import TopPanel from '../organisms/TopPanel/TopPanel';
import FeedCardList from '../organisms/FeedCardList/FeedCardList';
import useRequestApi from '../../hooks/useRequestApi';
import useQuestionOwnerData from '../../hooks/useQuestionOwnerData';

// TODO(노진석) : 나중에 로직 만들 때 수정
export default function AnswerPage() {
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
  const { data: questionsData } = useRequestApi(
    `${SUBJECT_URL}questions/`,
    'get',
  );

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
            questionCount={questionsData?.count}
            name={name}
            imageSource={imageSource}
            questionsData={questionsData}
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
