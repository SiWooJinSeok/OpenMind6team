import styled from 'styled-components';
import UserCard from '../UserCard/UserCard';
import QuestionListNextPageButton from '../QuestionListNextPageButton/QuestionListNextPageButton';

/**
 *
 * @param {object} UserCardListData : 유저 카드 리스트 데이터
 * @param {boolean} isLoadingUserCardListData : 유저 카드 리스트 데이터 로딩 상태
 * @param {function} onNextPageButtonClick : 다음 페이지 버튼 클릭 시 실행되는 함수
 * @param {number} currentPage : 현재 페이지
 * @param {number} totalPage : 총 페이지 수
 * @returns 유저 카드 리스트 그리드
 */

export default function UserCardList({
  UserCardListData,
  isLoadingUserCardListData,
  onNextPageButtonClick,
  currentPage,
  totalPage,
}) {
  const { results: cardList } = UserCardListData;

  if (isLoadingUserCardListData === true) {
    return null;
  }
  return (
    <Container>
      {cardList?.map((card) => {
        return (
          <UserCard
            key={card.id}
            id={card.id}
            userName={card.name}
            questionCount={card.questionCount}
            ProfileImageSource={card.imageSource}
          />
        );
      })}
      {currentPage === totalPage ? null : (
        <QuestionListNextPageButton
          onNextPageButtonClick={onNextPageButtonClick}
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 940px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 0 32px;

  @media (max-width: 867px) {
    grid-template-columns: repeat(3, 1fr);
    width: auto;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 31px;
  }
`;
