import { useState } from 'react';
import FeedCardAnswer from './FeedCardAnswer';

export default {
  title: 'FeedCard/FeedCardAnswer',
  component: FeedCardAnswer,
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
    <FeedCardAnswer
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
