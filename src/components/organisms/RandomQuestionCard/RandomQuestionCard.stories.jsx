import RandomQuestionCard from './RandomQuestionCard';

export default {
  title: 'Organisms/RandomQuestionCard',
  component: RandomQuestionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onRandomCardCloseClick: { control: 'function' },
    showRandomCard: { control: 'boolean' },
  },
};

export function Default(args) {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <RandomQuestionCard {...args} />;
    </div>
  );
}

Default.args = {
  showRandomCard: true,
};
