import PageNationNumbersContainer from './PageNationNumbersContainer';

export default {
  title: 'organisms/PageNationNumbersContainer',
  component: PageNationNumbersContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalPage: { control: 'number', defaultValue: 10 },
    isLoadingUserCardListData: { control: 'boolean', defaultValue: false },
    onPageClick: { control: 'function', defaultValue: () => {} },
    currentPage: { control: 'number', defaultValue: 1 },
  },
};

export function PageNationNumbersContainerStory(args) {
  return (
    <div style={{ display: 'flex' }}>
      <PageNationNumbersContainer {...args} />
    </div>
  );
}
