import styled from 'styled-components';

export default function FloatingButton({
  children,
  width = '208px',
  toggleModal,
}) {
  return (
    <Button width={width} onClick={toggleModal}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 54px;
  padding: 12px 24px;
  border: none;
  border-radius: 200px;
  background: #542f1a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  cursor: pointer;

  @media (max-width: 767px) {
    & {
      position: fixed;
      bottom: 50px;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;
