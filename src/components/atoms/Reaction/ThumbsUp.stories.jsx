import ThumbsUp from './ThumbsUp';

export default {
  title: 'Atoms/Reaction/ThumbsUp',
  component: ThumbsUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLiked: { control: 'boolean' },
    count: { control: 'number' },
  },
};

const Template = (args) => <ThumbsUp {...args} />;

export const Default = Template.bind({});

Default.args = {
  isLiked: false,
  count: 0,
};
