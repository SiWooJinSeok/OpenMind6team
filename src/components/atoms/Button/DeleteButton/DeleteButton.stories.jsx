import DeleteButton from './DeleteButton';

export default {
  title: 'Atoms/Button/DeleteButton',
  component: DeleteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
