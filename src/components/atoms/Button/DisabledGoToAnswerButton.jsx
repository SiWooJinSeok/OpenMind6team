import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown-disabled.svg';

import { ArrowImg, ButtonBox } from './Share';

export default function DisabledGoToAnswerButton({ text, width }) {
  return (
    <Button width={width} disabled>
      {text}
      <ArrowImg src={arrowRight} />
    </Button>
  );
}

const Button = styled(ButtonBox)`
  border: none;
  background: #f5f1ee;
  color: #fff;
  border: 1px solid #c7bbb5;

  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;
