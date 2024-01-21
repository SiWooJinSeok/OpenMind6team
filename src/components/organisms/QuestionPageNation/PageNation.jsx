import styled from 'styled-components';
import PageNationButton from '../../atoms/PageNation/PageNationButton';

export default function PageNation({
  totalPage,
  isLoadingUserCardListData,
  onLeftArrowClick,
  onPageClick,
  onRightArrowClick,
  currentPage,
}) {
  return (
    <PageNationButtonContainer>
      <PageNationButton
        arrowText="<"
        isSelected={false}
        onClick={onLeftArrowClick}
      />
      {isLoadingUserCardListData
        ? null
        : Array(totalPage)
            .fill()
            .map((_, i) => {
              if (i + 1 === currentPage) {
                return (
                  <PageNationButton
                    pageCount={i + 1}
                    isSelected
                    onClick={onPageClick}
                  />
                );
              }
              return (
                <PageNationButton
                  pageCount={i + 1}
                  isSelected={false}
                  onClick={onPageClick}
                />
              );
            })}
      <PageNationButton
        arrowText=">"
        isSelected={false}
        onClick={onRightArrowClick}
      />
    </PageNationButtonContainer>
  );
}

const PageNationButtonContainer = styled.div`
  display: flex;
`;
