import RandomCardButton from './RandomCardButton';

export default {
  title: 'Atoms/Button/RandomCardButton',
  component: RandomCardButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <RandomCardButton {...args} />;

export const Default = Template.bind({});
