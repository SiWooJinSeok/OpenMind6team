import styled from 'styled-components';
import UserCard from '../UserCard/UserCard';
import imageData from '../../../assets/imageData';
import { NEXT_ARROW_BACKGROUND } from '../../../constants/constants';

/**
 *
 * @param {UserCardListData : object | isLoadingUserCardListData : boolean } param0
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
  console.log(NEXT_ARROW_BACKGROUND);
  return (
    <Container>
      {isLoadingUserCardListData
        ? null
        : cardList?.map((card) => {
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
        <NextPageButton
          onClick={onNextPageButtonClick}
          bg={NEXT_ARROW_BACKGROUND}
        >
          <div>
            <p>NEXT PAGE</p>
            <img src={imageData.arrowRight} alt="다음 페이지 버튼 이미지" />
          </div>
        </NextPageButton>
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

const NextPageButton = styled.button`
  width: 100%;
  height: 100%;
  background-position-y: 0px;
  background-position-x: 0.2px;
  background: ${(props) => props.bg};
  border-radius: 17px;
  display: none;
  transition: all 0.3s;

  & > div {
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    display: none;
  }

  &:hover {
    background-color: var(--Grayscale-20);

    div {
      align-items: flex-end;
      transform: translateX(80%);
    }

    p {
      display: block;
    }
  }

  @media (max-width: 867px) and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
