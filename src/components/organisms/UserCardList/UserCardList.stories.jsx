import UserCardList from './UserCardList';

export default {
  title: 'UserCardList',
  component: UserCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: { control: 'text' },
    questionCount: { console: 'number' },
  },
};

const Template = (args) => <UserCardList {...args} />;

export const Default = Template.bind({});

Default.args = {};
