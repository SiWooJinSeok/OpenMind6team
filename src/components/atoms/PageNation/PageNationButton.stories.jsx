import PageNationButton from './PageNationButton';

export default {
  title: 'PageNationButton',
  component: PageNationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pageCount: { control: 'number' },
    isSelected: { console: 'boolean' },
  },
};

const Template = (args) => <PageNationButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  pageCount: 1,
  isSelected: false,
};
