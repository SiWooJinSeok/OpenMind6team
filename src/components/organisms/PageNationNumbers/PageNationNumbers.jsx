import styled from 'styled-components';
import PageNationButton from '../../atoms/Button/PageNationButton/PageNationButton';
import { PAGE_NATION_NUMBER_COUNT } from '../../../constants/page_nation';

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
