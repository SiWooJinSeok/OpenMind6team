import styled from 'styled-components';

import { ButtonBox } from './Share';

export default function DisabledAskQuestionButton({ text, width }) {
  return (
    <Button width={width} disabled>
      {text}
    </Button>
  );
}

const Button = styled(ButtonBox)`
  border: none;
  background: var(--Brown-30);
  color: var(--Grayscale-10);

  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 767px) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;
