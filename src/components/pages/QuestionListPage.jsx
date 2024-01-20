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
      <Title>누구에게 질문할까요?</Title>
      <CardSortDropdown CardSort="최신순" />
      <UserCardCollection>
        {arr.map(() => {
          return <UserCard />;
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

const Title = styled.h1`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 40px;
  margin-bottom: 12px;
`;

const UserCardCollection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const PageNationButtonContainer = styled.div`
  display: flex;
`;
