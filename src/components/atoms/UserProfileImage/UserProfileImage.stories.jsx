import UserProfileImage from './UserProfileImage';
import imageData from '../../../assets/imageData';

export default {
  title: 'Atoms/UserProfile/UserProfileImage',
  component: UserProfileImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
  },
};

const Template = (args) => <UserProfileImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageSource: imageData.defaultProfile,
  type: 'userCard',
};
