import styled from 'styled-components';
import UserCard from '../UserCard/UserCard';

export default function UserCardList({ UserCardListData }) {
  const { results: cardCollection } = UserCardListData;

  return (
    <Container>
      {cardCollection?.map((card) => {
        return (
          <UserCard
            key={card.id}
            userName={card.name}
            questionCount={card.questionCount}
            ProfileImageSource={card.imageSource}
          />
        );
      })}
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
