import { useState } from 'react';
import styled from 'styled-components';
import QuestionListNavbar from '../organisms/QuestionListNavbar/QuestionListNavbar';
import CardSortDropdown from '../atoms/Dropdown/CardSortDropdown';
import UserCardList from '../organisms/UserCardList/UserCardList';
import useGetCardList from '../../hooks/useGetCardList';
import PageNationNumbers from '../organisms/QuestionPageNationNumbers/PageNationNumbers';
import PageNationButton from '../atoms/PageNation/PageNationButton';

// OPINION : 페이지 네이션 관련 함수가 너무 많아서 hook을 기깔나게 하나 만들면 좋을 것 같습니다.

export default function QuestionListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
  const offset = (currentPage - 1) * limit;

  const [sort, setSort] = useState('time');

  const {
    UserCardListData,
    totalPage,
    isLoading: isLoadingUserCardListData,
  } = useGetCardList(limit, offset, sort);

  const handleSortButtonClick = (value) => {
    setSort(value);
  };

  const handleLeftArrowClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const handleRightArrowClick = () => {
    if (currentPage === totalPage) {
      return;
    }
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  const handlePageClick = (value) => {
    setCurrentPage(() => {
      return value;
    });
  };

  return (
    <Wrapper>
      <QuestionListNavbar />
      <TitleWrapper>
        <Title>누구에게 질문할까요?</Title>
        <CardSortDropdown
          CardSort={sort}
          onSortButtonClick={handleSortButtonClick}
        />
      </TitleWrapper>
      <UserCardList
        UserCardListData={UserCardListData}
        isLoadingUserCardListData={isLoadingUserCardListData}
      />
      <PageNationButtonContainer>
        <PageNationButton
          arrowText="<"
          isSelected={false}
          onClick={handleLeftArrowClick}
        />
        <PageNationNumbers
          totalPage={totalPage}
          isLoadingUserCardListData={isLoadingUserCardListData}
          onPageClick={handlePageClick}
          currentPage={currentPage}
        />
        <PageNationButton
          arrowText=">"
          isSelected={false}
          onClick={handleRightArrowClick}
        />
      </PageNationButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--Grayscale-20, #f9f9f9);
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 24px;
    max-width: 500px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 40px;
  margin-bottom: 12px;

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 30px; /* 125% */
    margin-bottom: 0;
  }
`;

const PageNationButtonContainer = styled.div`
  display: flex;
`;
