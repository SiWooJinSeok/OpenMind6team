import styled from 'styled-components';

export default function RandomCardButton({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      랜덤 질문!
    </Button>
  );
}

const Button = styled.button`
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;
