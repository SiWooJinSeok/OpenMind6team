import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown-disabled.svg';

import { ArrowImg, ButtonBox } from './Share';

const DisabledGoToAnswerButton = function ({ text, width }) {
  return (
    <Wrapper width={width}>
      {text}
      <ArrowImg src={arrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBox)`
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

export default DisabledGoToAnswerButton;
