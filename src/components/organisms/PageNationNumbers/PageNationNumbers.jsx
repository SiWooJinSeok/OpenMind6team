import styled from 'styled-components';
import PageNationButton from '../../atoms/Button/PageNationButton/PageNationButton';

const PageNationNumbers = ({ start, currentPage, onClick }) =>
  Array(5)
    .fill()
    .map((_, i) => {
      const page = start + i;
      const isSelected = page === currentPage;
      return (
        <Container>
          <PageNationButton
            key={page}
            page={page}
            isSelected={isSelected}
            onClick={onClick}
          />
        </Container>
      );
    });

const Container = styled.div`
  display: flex;
`;

export default PageNationNumbers;
