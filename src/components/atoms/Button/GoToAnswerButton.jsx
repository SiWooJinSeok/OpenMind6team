import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown.svg';

import { ButtonBox, ArrowImg } from './Share';

/**
 *
 * @param {text : string | width : string + 'px'} param0
 * @returns GoToAnswerButton Component
 */

export default function GoToAnswerButton({ text, width }) {
  return (
    <Button width={width}>
      {text}
      <ArrowImg src={arrowRight} />
    </Button>
  );
}

const Button = styled(ButtonBox)`
  border: 0.1rem solid var(--Brown-40);
  background: var(--Brown-10);
  color: var(--Brown-40);

  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    border-width: 0.2rem;
  }

  &:active {
    background: var(--Brown-20);
  }

  @media (max-width: 767px) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;
