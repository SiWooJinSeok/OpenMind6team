import styled from 'styled-components';

export default function DeleteButton({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      삭제하기
    </Button>
  );
}
const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  border-radius: 200px;
  background: var(--Brown-40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 25px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
