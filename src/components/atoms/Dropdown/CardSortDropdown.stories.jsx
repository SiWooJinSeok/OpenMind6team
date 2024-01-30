import { useState } from 'react';
import CardSortDropdown from './CardSortDropdown';
import { SORT_NAME, SORT_TIME } from '../../../constants/questionListPageSort';

// 스토리북의 메타데이터를 나타내는 부분
export default {
  // 스토리북의 카테고리와 스토리의 이름을 설정
  title: 'Atoms/Dropdown/CardSortDropdown',
  // 스토리북이 자동으로 스토리의 문서를 생성할 때 사용하는 컴포넌트를 지정
  component: CardSortDropdown,
  // 스토리에 적용할 전역 파라미터를 설정
  parameters: {
    layout: 'centered',
  },
  // 스토리에 태그를 추가
  tags: ['autodocs'],
  // 스토리북에서 스토리의 각 인자의 행동을 제어하는 데 사용
  argTypes: {
    CardSort: { control: 'text' },
    onSortButtonClick: { control: 'function' },
  },
};

export function Name(args) {
  // sort 상태에 따라 드롭타운의 텍스트가 바뀌기 때문에 useState로 sort를 관리해준다
  const [sort, setSort] = useState(SORT_NAME);

  //   실제 hadnleSortButtonClick함수(props로 전달돼 onSortButtonClick로 사용된다)
  //   const handleSortButtonClick = (value) => {
  //   setSort(value);
  //   setCurrentPage(1);
  // };

  return (
    <CardSortDropdown
      {...args}
      CardSort={sort}
      onSortButtonClick={(newSort) => {
        setSort(newSort);
      }}
    />
  );
}

export function Time(args) {
  const [sort, setSort] = useState(SORT_NAME);

  return (
    <CardSortDropdown
      {...args}
      CardSort={sort}
      onSortButtonClick={(newSort) => {
        setSort(newSort);
      }}
    />
  );
}

// 각 스토리의 인자를 넣는데 사용한다.
// argTypes와 args의 차이는 argTypes는 스토리북에서 인자의 행동을 제어하는데 사용하고 args는 스토리의 인자를 넣는데 사용한다(오버라이드 가능)
// 따라서 argTypes는 공통된 인자를 넣는데 사용하고 args는 각 스토리의 인자를 넣는데 사용한다.
Name.args = {
  CardSort: SORT_NAME,
};

Time.args = {
  CardSort: SORT_TIME,
};
