import styled from 'styled-components';

import { NEXT_ARROW_BACKGROUND } from '../../../constants/svgImgUrl';
import imageData from '../../../assets/imageData';

export default function QuestionListNextPageButton({ onNextPageButtonClick }) {
  return (
    <Button onClick={onNextPageButtonClick} bg={NEXT_ARROW_BACKGROUND}>
      <InnerWrapper>
        <p>NEXT PAGE</p>
        <img src={imageData.arrowRight} alt="다음 페이지 버튼 이미지" />
      </InnerWrapper>
    </Button>
  );
}

const InnerWrapper = styled.div`
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-position-y: 0px;
  background-position-x: 0.2px;
  background-image: ${(props) => props.bg};
  border-radius: 17px;
  display: none;
  transition: all 0.3s;

  p {
    display: none;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-weight: 600;
  }

  &:hover {
    background-color: var(--Grayscale-20);

    ${InnerWrapper} {
      align-items: flex-end;
      transform: translateX(50%);
    }

    p {
      display: block;
    }
  }

  @media (max-width: 867px) and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
