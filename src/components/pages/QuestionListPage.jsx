import styled from 'styled-components';
import QuestionListNavbar from '../organisms/QuestionListNavbar/QuestionListNavbar';
import CardSortDropdown from '../atoms/Dropdown/CardSortDropdown';
import UserCardList from '../organisms/UserCardList/UserCardList';
import useQuestionListPageData from '../../hooks/useQuestionListPageData';
import PageNationNumbersContainer from '../organisms/PageNationNumbersContainer/PageNationNumbersContainer';
import PageNationButton from '../organisms/PageNationNumbersContainer/PageNationNumbers/PageNationButton/PageNationButton';
import RandomCardButton from '../atoms/Button/RandomCardButton/RandomCardButton';
import RandomQuestionCard from '../organisms/RandomQuestionCard/RandomQuestionCard';
import useShowRandomCard from '../../hooks/useShowRandomCard';

/**
 *
 * @returns QuestionListPage Component
 */
export default function QuestionListPage() {
  const {
    currentPage,
    sort,
    totalPage,
    userCardListData,
    handleLeftArrowClick,
    handleRightArrowClick,
    handleSortButtonClick,
    handlePageClick,
    isLoading: isLoadingUserCardListData,
  } = useQuestionListPageData();

  const {
    showRandomCard,
    handleShowRandomCardButtonClick,
    handleRandomCardCloseClick,
  } = useShowRandomCard();

  return (
    <Wrapper>
      <QuestionListNavbar />
      <TitleWrapper>
        <Title>누구에게 질문할까요?</Title>
        <RandomCardButton onClick={handleShowRandomCardButtonClick} />
        <CardSortDropdown
          CardSort={sort}
          onSortButtonClick={handleSortButtonClick}
        />
      </TitleWrapper>
      <UserCardList
        userCardListData={userCardListData}
        isLoadingUserCardListData={isLoadingUserCardListData}
        onNextPageButtonClick={handleRightArrowClick}
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <PageNationButtonContainer>
        <PageNationButton
          arrowText="<"
          isSelected={false}
          onClick={handleLeftArrowClick}
        />
        <PageNationNumbersContainer
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
      {/* 랜덤 질문 카드가 보이는 실험적인 기능입니다! */}
      <RandomQuestionCard
        onRandomCardCloseClick={handleRandomCardCloseClick}
        showRandomCard={showRandomCard}
      />
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
