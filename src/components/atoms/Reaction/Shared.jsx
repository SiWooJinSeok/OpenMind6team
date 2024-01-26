import styled from 'styled-components';

export const ThumbsButton = styled.button`
  display: flex;
  gap: 0.6rem;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; /* 128.571% */
`;

export const ThumbsText = styled.span`
  color: ${(props) => props.$textColor};
`;

export const ThumbsIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
