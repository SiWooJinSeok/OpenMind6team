import { useState } from 'react';
import UserAnswerCard from './UserAnswerCard';

export default {
  title: 'FeedCard/FeedCardAnswer',
  component: UserAnswerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    item: { control: 'object' },
    owner: { control: 'object' },
    currentType: { control: 'select', options: ['Edit', 'Answer', 'NoAnswer'] },
  },
};

const Template = (args) => {
  const [currentType, setCurrentType] = useState('Edit');

  return (
    <UserAnswerCard
      currentType={currentType}
      setCurrentType={setCurrentType}
      {...args}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  item: { content: '' },
  owner: { name: '아초는 고양이' },
  currentType: 'Edit',
};
