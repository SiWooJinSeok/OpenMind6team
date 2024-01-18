import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-brown.svg';

import { ButtonBox, ArrowImg } from './Share';

const GoToAnswerButton = function () {
  return (
    <Wrapper>
      <ArrowImg src={arrowRight} />
      답변하러 가기
      <ArrowImg src={arrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBox)`
  border: 1px solid #542f1a;
  background: #f5f1ee;
  color: #542f1a;

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

export default GoToAnswerButton;
