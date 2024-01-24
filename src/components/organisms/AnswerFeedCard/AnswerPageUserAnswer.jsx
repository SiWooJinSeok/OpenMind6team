import { useState } from 'react';
import styled from 'styled-components';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import getAnswerType from './getAnswerType';

/**
 * @param {object} item : id, content
 * @param {object} owner : name
 * @param {state} currentType : 'Edit' or 'Answer' or 'NoAnswer'
 * @param {callback} setCurrentType : setState
 * @returns currentType ? Edit : Answer
 */
// TODO(노진석): 나중에 추가 로직만들면서 변경 될 가능성 있음!
export default function FeedCardAnswer({
  item,
  owner,
  currentType,
  setCurrentType,
}) {
  const { content } = item;
  const [answer, setAnswer] = useState(content);

  const handleType = () => {
    setCurrentType('Answer');
  };
  return (
    <Wrapper>
      <div>
        <UserProfileImage />
      </div>
      <AnswerContainer>
        <UserNameBox>
          {owner.name}
          {currentType !== 'Edit' ? <CreatedAtSpan>2주전</CreatedAtSpan> : null}
        </UserNameBox>
        {getAnswerType({
          type: currentType,
          handleType,
          answer,
          setAnswer,
        })}
      </AnswerContainer>
    </Wrapper>
  );
}

FeedCardAnswer.defaultProps = {
  item: { content: '' },
  owner: { name: '아초는고양이' },
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
  font-size: 1.8rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
