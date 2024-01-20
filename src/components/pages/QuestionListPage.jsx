import { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuestionListNavbar from '../organisms/QuestionListNavbar/QuestionListNavbar';
import CardSortDropdown from '../atoms/Dropdown/CardSortDropdown';
import PageNationButton from '../atoms/PageNation/PageNationButton';
import UserCardList from '../organisms/UserCardList/UserCardList';
import useGetCardList from '../../hooks/useGetCardList';

export default function QuestionListPage() {
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState('time');

  const handleSortOptionSelect = (value) => {
    setSort(value);
  };

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  const { UserCardListData } = useGetCardList(limit, offset, sort);

  return (
    <Wrapper>
      <QuestionListNavbar />
      <TitleWrapper>
        <Title>누구에게 질문할까요?</Title>
        <CardSortDropdown
          CardSort={sort}
          onSortSelect={handleSortOptionSelect}
        />
      </TitleWrapper>
      <UserCardList UserCardListData={UserCardListData} />
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

const PageNationButtonContainer = styled.div`
  display: flex;
`;
