import styled from 'styled-components';
import PageNationButton from '../PageNationButton/PageNationButton';
import { PAGE_NATION_NUMBER_COUNT } from '../../../constants/page_nation';

/**
 *
 * @param {number} start : 페이지네이션 버튼 시작 숫자
 * @param {number} currentPage : 현재 페이지
 * @param {function} onClick : 페이지네이션 버튼 클릭 시 실행되는 함수
 * @returns
 */
const PageNationNumbers = ({ start, currentPage, onClick }) =>
  Array(PAGE_NATION_NUMBER_COUNT)
    .fill()
    .map((_, i) => {
      const page = start + i;
      return (
        <Container>
          <PageNationButton
            key={page}
            page={page}
            isSelected={page === currentPage}
            onClick={onClick}
          />
        </Container>
      );
    });

const Container = styled.div`
  display: flex;
`;

export default PageNationNumbers;
