import { useState } from 'react';
import CardSortDropdown from './CardSortDropdown';
import { SORT_NAME, SORT_TIME } from '../../../constants/questionListPageSort';

export default {
  title: 'Atoms/Dropdown/CardSortDropdown',
  component: CardSortDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    CardSort: { control: 'text' },
    onSortButtonClick: { control: 'function' },
  },
};

export function Name(args) {
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

Name.args = {
  CardSort: SORT_NAME,
};

Time.args = {
  CardSort: SORT_TIME,
};
