import DeleteButton from './DeleteButton';

export default {
  title: 'Button/DeleteButton',
  component: DeleteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
