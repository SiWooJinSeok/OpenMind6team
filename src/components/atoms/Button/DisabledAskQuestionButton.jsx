import styled from 'styled-components';

import arrowRight from '../../../assets/img/arrow-right-white.svg';

import { ArrowImg, ButtonBox } from './Share';

const DisabledAskQuestionButton = function () {
  return (
    <Wrapper>
      <ArrowImg src={arrowRight} />
      질문 받기
      <ArrowImg src={arrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBox)`
  border: none;
  background: #c7bbb5;
  color: #fff;

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export default DisabledAskQuestionButton;
