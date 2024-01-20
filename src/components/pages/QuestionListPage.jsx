import styled from 'styled-components';
import QuestionListNavbar from '../organisms/QuestionListNavbar/QuestionListNavbar';
import CardSortDropdown from '../atoms/Dropdown/CardSortDropdown';
import UserCard from '../organisms/UserCard/UserCard';
import PageNationButton from '../atoms/PageNation/PageNationButton';

export default function QuestionListPage() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];
  // const [totalPageCount, setTotalPageCount] = useState(5);

  return (
    <Wrapper>
      <QuestionListNavbar />
      <TitleWrapper>
        <Title>누구에게 질문할까요?</Title>
        <CardSortDropdown CardSort="최신순" />
      </TitleWrapper>
      <UserCardCollection>
        {arr.map(() => {
          return <UserCard userName="아초는 고양이" questionCount={9} />;
        })}
      </UserCardCollection>
      <PageNationButtonContainer>
        <PageNationButton arrowText="<" isSelected={false} />
        <PageNationButton pageCount={1} isSelected />
        <PageNationButton pageCount={2} isSelected={false} />
        <PageNationButton pageCount={3} isSelected={false} />
        <PageNationButton pageCount={4} isSelected={false} />
        <PageNationButton pageCount={5} isSelected={false} />
        <PageNationButton arrowText=">" isSelected={false} />
      </PageNationButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const UserCardCollection = styled.section`
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

const PageNationButtonContainer = styled.div`
  display: flex;
`;
