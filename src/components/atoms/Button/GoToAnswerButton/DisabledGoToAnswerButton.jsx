import styled from 'styled-components';

import { ArrowImg, ButtonBox } from '../Shared';

import imageData from '../../../../assets/imageData';

/**
 *
 * @param {text : string | width : string + 'px'} param0
 * @returns DisabledGoToAnswerButton Component
 */
export default function DisabledGoToAnswerButton({ text, width }) {
  return (
    <Button width={width} disabled>
      {text}
      <ArrowImg src={imageData.arrowRightBrownDisabled} />
    </Button>
  );
}

const Button = styled(ButtonBox)`
  border: none;
  background: var(--Brown-10);
  color: var(--Brown-40);
  border: 0.1rem solid #c7bbb5;

  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 767px) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;
