import { useState } from 'react';
import styled from 'styled-components';
import Badge from '../../atoms/Badge/Badge';
import EditableDropdown from '../../atoms/Dropdown/EditableDropdown';
import UserAnswerCard from './AnswerPageUserAnswer';
import ThumbsUp from '../../atoms/Reaction/ThumbsUp';
import ThumbsDown from '../../atoms/Reaction/ThumbsDown';
import { getCurrentType } from './getAnswerType';
import getElapsedTime from '../../../utils/getElapsedTime';
import requestApi from '../../../utils/requestApi';
import updateReactionData from '../../../hooks/updateReactionData';

/**
 *
 * @param {string} name : 답변 하는 사람 이름
 * @param {string} imageSource : url
 * @param {object} questionData : content, like, dislike, answer : {}
 * @param {function} setData : setState
 * @returns FeedCard (Answer, NoAnswer, Edit)
 */

// TODO(노진석) : 기능 구현하기
export default function AnswerFeedCard({
  questionsData,
  name,
  imageSource,
  setData,
}) {
  const { content, like, dislike, createdAt, answer, id } = questionsData;
  const [item, setItem] = useState(answer);
  const [countLike, setCountLike] = useState(like);
  const [countDisLike, setCountDisLike] = useState(dislike);
  const [currentType, setCurrentType] = useState(
    getCurrentType(answer ? content : '', answer?.isRejected),
  );
  const [isClicked, setIsClicked] = useState();
  const isAnswered = currentType !== 'Edit';
  const elapsedTimeQuestion = getElapsedTime(createdAt);
  const handleClickLike = async () => {
    const data = await updateReactionData(id, 'like');
    const newLike = data?.like;
    setCountLike(newLike);
  };

  const handleClickDisLike = async () => {
    const data = await updateReactionData(id, 'dislike');
    const newDisLike = data?.dislike;
    setCountDisLike(newDisLike);
  };
  const deleteQuestion = async () => {
    if (isClicked) {
      return;
    }
    setIsClicked(true);
    await requestApi(`questions/${id}/`, 'delete');
    setData((preData) => {
      const currentData = preData.results.filter(
        (it) => it.id !== questionsData.id,
      );
      return {
        ...preData,
        results: currentData,
        count: preData.count - 1,
      };
    });
    setIsClicked(false);
  };
  const updateClick = () => {
    setCurrentType('Edit');
  };
  return (
    <Wrapper>
      <StateBox>
        <Badge isAnswered={isAnswered} />
        <EditableDropdown
          deleteClick={deleteQuestion}
          updateClick={updateClick}
        />
      </StateBox>
      <QuestionBox>
        질문 · {elapsedTimeQuestion}
        <QuestionContent>{content}</QuestionContent>
      </QuestionBox>
      <UserAnswerCard
        questionId={id}
        item={item}
        setItem={setItem}
        currentType={currentType}
        setCurrentType={setCurrentType}
        name={name}
        imageSource={imageSource}
      />
      <Hr />
      <ReactionBox>
        <ThumbsUp
          isLiked={countLike > 0}
          count={countLike}
          handleClickLike={handleClickLike}
        />
        <ThumbsDown
          isDisliked={countDisLike > 0}
          count={countDisLike}
          handleClickDisLike={handleClickDisLike}
        />
      </ReactionBox>
    </Wrapper>
  );
}

AnswerFeedCard.defaultProps = {
  questionData: {
    id: 41,
    subjectId: 23,
    content: '가장 좋아하는 동물이 궁금해요!',
    like: 9,
    dislike: 2,
    createdAt: '2023-10-31T09:27:59.497667Z',
    answer: {
      id: 22,
      content: '',
      isRejected: false,
      createdAt: '2023-11-01T00:43:56.863795Z',
    },
  },
};

const Wrapper = styled.div`
  border-radius: 16px;
  background: var(--Grayscale-10);
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const StateBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1.4rem;
  color: var(--Grayscale-40);
  font-weight: 500;
  line-height: 18px;
`;

const QuestionContent = styled.span`
  font-size: 1.8rem;
  color: var(--Grayscale-60);
  font-weight: 400;
  line-height: 24px;
`;
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--Grayscale-30);
`;

const ReactionBox = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 32px;
`;
