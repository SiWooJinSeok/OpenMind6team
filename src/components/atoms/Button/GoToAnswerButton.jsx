import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown.svg';

import { ButtonBox, ArrowImg } from './Share';

export default function GoToAnswerButton({ text, width }) {
  return (
    <Button width={width}>
      {text}
      <ArrowImg src={arrowRight} />
    </Button>
  );
}

const Button = styled(ButtonBox)`
  border: 1px solid #542f1a;
  background: #f5f1ee;
  color: #542f1a;

  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    border-width: 2px;
  }

  &:active {
    background: #e4d5c9;
  }

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;
