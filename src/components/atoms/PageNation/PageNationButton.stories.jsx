import { action } from '@storybook/addon-actions';
import PageNationButton from './PageNationButton';

export default {
  title: 'PageNationButton',
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

const Template = (args) => (
  <PageNationButton {...args} onClick={() => console.log(args.page)} />
);

export const Default = Template.bind({});

Default.args = {
  page: 1,
  isSelected: false,
  onClick: action('button-click'),
};
