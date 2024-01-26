import InputField from './InputField';

export default {
  title: 'Input/Input',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'text' },
    value: {
      control: { type: 'text' },
      defaultValue: '초기값',
    },
    handler: { action: 'setState' },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: '이름을 입력하세요.',
  type: 'text',
};
