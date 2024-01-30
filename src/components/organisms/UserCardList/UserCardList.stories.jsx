import imageData from '../../../assets/imageData';
import UserCardList from './UserCardList';

export default {
  title: 'Organisms/UserCardList',
  component: UserCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userCardListData: { control: 'object' },
    isLoadingUserCardListData: { control: 'boolean' },
    onNextPageButtonClick: { control: 'function' },
    currentPage: { control: 'number' },
    totalPage: { control: 'number' },
  },
};

export function Default(args) {
  return <UserCardList {...args} />;
}

Default.args = {
  userCardListData: {
    results: [
      {
        id: 1,
        name: 'mock1',
        questionCount: 1,
        imageSource: imageData.defaultProfile,
      },
      {
        id: 2,
        name: 'mock2',
        questionCount: 23,
        imageSource: imageData.defaultProfile,
      },
      {
        id: 3,
        name: 'mock3',
        questionCount: 700,
        imageSource: imageData.defaultProfile,
      },
      {
        id: 4,
        name: 'mock4',
        questionCount: 25,
        imageSource: imageData.defaultProfile,
      },
      {
        id: 5,
        name: 'mock5',
        questionCount: 8,
        imageSource: imageData.defaultProfile,
      },
    ],
  },
  isLoadingUserCardListData: false,
  onNextPageButtonClick: () => {},
  currentPage: 1,
  totalPage: 2,
};
