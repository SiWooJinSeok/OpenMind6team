import styled from 'styled-components';

/**
 *
 * @param {string} arrowText : 페이지네이션 버튼에 들어갈 화살표 텍스트
 * @param {number} page : 페이지네이션 버튼에 들어갈 숫자
 * @param {boolean} isSelected : 페이지네이션 버튼이 선택되었는지 여부
 * @param {function} onClick : 페이지네이션 버튼 클릭 시 실행되는 함수
 * @returns 페이지네이션 버튼
 */
export default function PageNationButton({
  arrowText,
  page,
  isSelected,
  onClick,
}) {
  const DefaultFontColor = isSelected
    ? 'var(--Brown-40, #542F1A)'
    : 'var(--Grayscale-40, #818181)';

  return (
    <PageButton
      $DefaultFontColor={DefaultFontColor}
      onClick={() => {
        onClick(page);
      }}
    >
      {page}
      {arrowText}
    </PageButton>
  );
}
const PageButton = styled.div`
  width: 40px;
  height: 40px;
  color: ${(props) => props.$DefaultFontColor};
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
