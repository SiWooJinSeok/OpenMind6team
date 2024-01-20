import styled from 'styled-components';

export default function PageNationButton({ arrowText, pageCount, isSelected }) {
  const DefaultFontColor = isSelected
    ? 'var(--Brown-40, #542F1A)'
    : 'var(--Grayscale-40, #818181)';

  return (
    <PageButton DefaultFontColor={DefaultFontColor}>
      {pageCount}
      {arrowText}
    </PageButton>
  );
}
const PageButton = styled.div`
  width: 40px;
  height: 40px;
  color: ${(props) => props.DefaultFontColor};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px; /* 125% */
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.DefaultFontColor === 'var(--Grayscale-40, #818181)'
        ? 'var(--Grayscale-60, #000)'
        : 'var(--Brown-40, #542F1A)'};
  }
`;
