import styled from 'styled-components';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import getAnswerType from './getAnswerType';
import getElapsedTime from '../../../utils/getElapsedTime';
import useRespondAnswer from '../../../hooks/useRespondAnswer';

/**
 * @param {string} questionId : 질문 Id
 * @param {object} item : id, content
 * @param {function} setItem : setState
 * @param {state} currentType : 'Edit' or 'Answer' or 'NoAnswer'
 * @param {callback} setCurrentType : setState
 * @param {string} imageSource : url
 * @returns currentType ? Edit : Answer
 */
// TODO(노진석): 나중에 추가 로직만들면서 변경 될 가능성 있음!
export default function AnswerPageUserAnswer({
  questionId,
  item,
  setItem,
  name,
  imageSource,
  currentType,
  setCurrentType,
}) {
  const { content } = item || '';
  const { createdAt } = item || new Date();
  const elapsedTimeQuestion = getElapsedTime(createdAt);
  const { respondAnswer, answer, setAnswer } = useRespondAnswer({
    questionId,
    item,
    setItem,
    setCurrentType,
    content,
  });

  return (
    <Wrapper>
      <div>
        <UserProfileImage type="feedCard" imageSource={imageSource} />
      </div>
      <AnswerContainer>
        <UserNameBox>
          {name}
          {currentType !== 'Edit' ? (
            <CreatedAtSpan>{elapsedTimeQuestion}</CreatedAtSpan>
          ) : null}
        </UserNameBox>
        {getAnswerType({
          item,
          type: currentType,
          onClick: respondAnswer,
          answer,
          setAnswer,
        })}
      </AnswerContainer>
    </Wrapper>
  );
}

AnswerPageUserAnswer.defaultProps = {
  item: { content: '' },
  name: '아초는고양이',
  currentType: 'Edit',
};
const CreatedAtSpan = styled.span`
  color: var(--Grayscale-40);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 684px;
`;

const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 1.8rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  font-family: Actor;
`;
