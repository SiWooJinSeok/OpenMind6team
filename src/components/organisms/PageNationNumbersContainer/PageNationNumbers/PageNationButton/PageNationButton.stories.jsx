import PageNationButton from './PageNationButton';

export default {
  title: 'Atoms/PageNation/PageNationButton',
  component: PageNationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    page: { control: 'number' },
    isSelected: { console: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <PageNationButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  page: 1,
  isSelected: false,
};
