import PageNationNumbers from '../PageNationNumbers/PageNationNumbers';

/**
 *
 * @param {totalPage : number |  isLoadingUserCardListData : object | onPageClick : eventHandlerFunction |  currentPage : number} param0
 * @returns 페이지네이션 숫자 목록
 */

export default function PageNationNumbersContainer({
  totalPage,
  isLoadingUserCardListData,
  onPageClick,
  currentPage,
}) {
  if (isLoadingUserCardListData === false) {
    if (currentPage <= 3) {
      return (
        <PageNationNumbers
          start={1}
          currentPage={currentPage}
          onClick={onPageClick}
        />
      );
    }
    if (currentPage > totalPage - 3) {
      return (
        <PageNationNumbers
          start={totalPage - 4}
          currentPage={currentPage}
          onClick={onPageClick}
        />
      );
    }
    return (
      <PageNationNumbers
        start={currentPage - 2}
        currentPage={currentPage}
        onClick={onPageClick}
      />
    );
  }
}
