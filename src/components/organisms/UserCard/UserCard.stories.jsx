import UserCard from './UserCard';

export default {
  title: 'UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: { control: 'text' },
    questionCount: { console: 'number' },
  },
};

const Template = (args) => <UserCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  userName: '아초는고양이',
  questionCount: 0,
};
