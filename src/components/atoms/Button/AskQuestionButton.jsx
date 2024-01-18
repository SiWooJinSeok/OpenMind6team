import styled from 'styled-components';

import { ButtonBox } from './Share';

const AskQuestionButton = function ({ text, width }) {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(ButtonBox)`
  background-color: #542f1a;
  color: #fff;

  width: ${(props) => (props.width ? props.width : 'auto')};

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
