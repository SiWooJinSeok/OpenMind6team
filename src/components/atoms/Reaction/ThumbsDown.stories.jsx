import ThumbsDown from './ThumbsDown';

export default {
  title: 'Atoms/Reaction/ThumbsDown',
  component: ThumbsDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDisliked: { control: 'boolean' },
    count: { control: 'number' },
  },
};

const Template = (args) => <ThumbsDown {...args} />;

export const Default = Template.bind({});

Default.args = {
  isDisliked: false,
  count: 0,
};
