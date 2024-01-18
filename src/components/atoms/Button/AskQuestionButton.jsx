import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-white.svg';

import { ArrowImg, ButtonBox } from './Share';

const AskQuestionButton = function () {
  return (
    <Wrapper>
      <ArrowImg src={arrowRight} />
      질문 받기
      <ArrowImg src={arrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBox)`
  background-color: #542f1a;
  color: #fff;

  &:hover {
    gap: 10px;
    border: 2px solid #341909;
  }

  &:active {
    gap: 10px;
    background: #341909;
  }

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export default AskQuestionButton;
