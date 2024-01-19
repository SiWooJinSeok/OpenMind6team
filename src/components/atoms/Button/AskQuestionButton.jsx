import styled from 'styled-components';

import { ButtonBox } from './Share';

export default function AskQuestionButton({ text, width }) {
  return <Button width={width}>{text}</Button>;
}

const Button = styled(ButtonBox)`
  background-color: var(--Brown-40);
  color: var(--Grayscale-60);

  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    gap: 1rem;
    border: 0.2rem solid var(--Brown-50);
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
