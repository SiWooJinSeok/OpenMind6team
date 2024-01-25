import { useState } from 'react';
import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import UserProfileImage from '../../atoms/UserProfileImage/UserProfileImage';
import AnswerForm from '../AnswerForm/AnswerForm';

export default function Modal({ owner, toggleModal }) {
  const [inputQuestion, setInputQuestion] = useState('');
  // TODO[이시열] : AnswerForm에 api 요청 onClick prop 전달
  const handleWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };
  return (
    <Wrapper onClick={handleWrapperClick}>
      <Container>
        <ModalHeader>
          <ModalHeaderBox>
            <Icon src={imageData.messageIcon} />
            <HeaderText>질문을 작성하세요</HeaderText>
          </ModalHeaderBox>
          <Icon src={imageData.closeIcon} onClick={toggleModal} />
        </ModalHeader>
        <QuestionBox>
          <RecipientBox>
            <Text>To.</Text>
            <UserProfileImage type="questionModal" />
            <Recipient>{owner.name}</Recipient>
          </RecipientBox>
          <AnswerForm
            inputValue={inputQuestion}
            setInputValue={setInputQuestion}
            placeholder="질문을 입력해주세요"
            buttonText="질문 보내기"
            inputAreaHeight="180px"
          />
        </QuestionBox>
      </Container>
    </Wrapper>
  );
}
Modal.defaultProps = {
  owner: { name: '아초는고양이' },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
  z-index: 2;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  width: 612px;
  height: 454px;
  padding: 40px 40px 70px;
`;
const ModalHeader = styled.div`
  display: flex;
  width: 532px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
const ModalHeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Icon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const HeaderText = styled.h3``;
const QuestionBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 532px;
`;
const RecipientBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  gap: 4px;
`;
const Text = styled.span`
  font-size: 1.8rem;
  line-height: 24px;
`;
const Recipient = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;
`;
