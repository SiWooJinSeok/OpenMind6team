import styled from 'styled-components';
import PageNationButton from '../../atoms/PageNation/PageNationButton';

/**
 *
 * @param {totalPage : number |  isLoadingUserCardListData : object | onPageClick : eventHandlerFunction |  currentPage : number} param0
 * @returns 페이지네이션 숫자 목록
 */

export default function PageNationNumbers({
  totalPage,
  isLoadingUserCardListData,
  onPageClick,
  currentPage,
}) {
  if (isLoadingUserCardListData === false) {
    if (currentPage <= 3) {
      return (
        <Container>
          {Array(5)
            .fill()
            .map((_, i) => {
              if (currentPage === i + 1) {
                return (
                  <PageNationButton
                    page={i + 1}
                    isSelected
                    onClick={onPageClick}
                  />
                );
              }
              return (
                <PageNationButton
                  page={i + 1}
                  isSelected={false}
                  onClick={onPageClick}
                />
              );
            })}
        </Container>
      );
    }
    if (currentPage > totalPage - 3) {
      return (
        <Container>
          {Array(5)
            .fill()
            .map((_, i) => {
              if (totalPage - 4 + i === currentPage) {
                return (
                  <PageNationButton
                    page={totalPage - 4 + i}
                    isSelected
                    onClick={onPageClick}
                  />
                );
              }
              return (
                <PageNationButton
                  page={totalPage - 4 + i}
                  isSelected={false}
                  onClick={onPageClick}
                />
              );
            })}
        </Container>
      );
    }
    return (
      <Container>
        {Array(5)
          .fill()
          .map((_, i) => {
            if (currentPage - (2 - i) === currentPage) {
              return (
                <PageNationButton
                  page={currentPage - (2 - i)}
                  isSelected
                  onClick={onPageClick}
                />
              );
            }
            return (
              <PageNationButton
                page={currentPage - (2 - i)}
                isSelected={false}
                onClick={onPageClick}
              />
            );
          })}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
`;
