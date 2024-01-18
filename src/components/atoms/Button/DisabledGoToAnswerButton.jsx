import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown-disabled.svg';

import { ArrowImg, ButtonBox } from './Share';

const DisabledGoToAnswerButton = function () {
  return (
    <Wrapper>
      <ArrowImg src={arrowRight} />
      답변하러 가기
      <ArrowImg src={arrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBox)`
  border: none;
  background: #f5f1ee;
  color: #fff;
  border: 1px solid #c7bbb5;

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export default DisabledGoToAnswerButton;
