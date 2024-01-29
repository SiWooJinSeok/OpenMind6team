import PageNationNumbers from './PageNationNumbers/PageNationNumbers';

/**
 *
 * @param {number} totalPage : 총 페이지 수
 * @param {boolean} isLoadingUserCardListData : 유저 카드 리스트 데이터 로딩 상태
 * @param {function} onPageClick : 페이지네이션 숫자 클릭 시 실행되는 함수
 * @param {number} currentPage : 현재 페이지
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
