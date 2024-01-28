import imageData from '../../../assets/imageData';
import UserCardList from './UserCardList';

export default {
  title: 'Organisms/UserCard/UserCardList',
  component: UserCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    UserCardListData: { control: 'text' },
    questionCount: { control: 'number' },
  },
};

const Template = (args) => <UserCardList {...args} />;

export const Default = Template.bind({});

Default.args = {
  UserCardListData: {
    result: [
      {
        id: 1,
        name: '이름',
        questionCount: 1,
        imageSource: imageData.defaultProfile,
      },
    ],
  },
  isLoadingUserCardListData: false,
  onNextPageButtonClick: null,
  currentPage: 2,
  totalPage: 5,
};
