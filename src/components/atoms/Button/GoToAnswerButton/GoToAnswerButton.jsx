import styled from 'styled-components';

import { ButtonBox, ArrowImg } from '../Shared';

import imageData from '../../../../assets/imageData';
/**
 *
 * @param {text : string | width : string + 'px' |  onClick : event handler} param0
 * @returns GoToAnswerButton Component
 */

export default function GoToAnswerButton({ className, text, width, onClick }) {
  return (
    <Button className={className} width={width} onClick={onClick}>
      {text}
      <ArrowImg src={imageData.arrowRightBrown} />
    </Button>
  );
}

const Button = styled(ButtonBox)`
  outline: 0.1rem solid var(--Brown-40);
  background: var(--Brown-10);
  color: var(--Brown-40);

  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    outline: 0.2rem solid var(--Brown-40);
  }

  &:active {
    background: var(--Brown-20);
  }

  @media (max-width: 767px) {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
  }
`;
