import styled from 'styled-components';

import { ButtonBox } from '../Shared';

/**
 *
 * @param {text : string | width : string + 'px'} param0
 * @returns AskQuestionButton Component
 */

export default function AskQuestionButton({ text, width, handleButtonClick }) {
  const onClick = (event) => {
    event.preventDefault();
    handleButtonClick();
  };

  return (
    <Button width={width} onClick={onClick}>
      {text}
    </Button>
  );
}

const Button = styled(ButtonBox)`
  background-color: var(--Brown-40);
  color: var(--Grayscale-10);

  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    gap: 1rem;
    outline: 0.2rem solid var(--Brown-50);
  }

  &:active {
    gap: 1rem;
    background: var(--Brown-50);
  }

  @media (max-width: 767px) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;
