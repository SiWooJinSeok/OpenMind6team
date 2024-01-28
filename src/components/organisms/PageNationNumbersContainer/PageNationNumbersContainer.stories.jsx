import PageNationNumbers from './PageNationNumbersContainer';

export default {
  title: 'PageNationNumbers',
  component: PageNationNumbers,
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

const Template = (args) => <PageNationNumbers {...args} />;

export const Default = Template.bind({});

Default.args = {};
