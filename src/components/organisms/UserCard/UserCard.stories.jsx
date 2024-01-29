import imageData from '../../../assets/imageData';
import UserCard from './UserCard';

export default {
  title: 'Organisms/UserCard/UserCard',
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
  questionCount: 9,
  id: 1,
  ProfileImageSource: imageData.defaultProfile,
};
