import Modal from './Modal';

export default {
  title: 'Organisms/Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    toggleModal: { control: 'function', defaultValue: () => {} },
    name: { control: 'string', defaultValue: '코드잇' },
    id: { control: 'number', defaultValue: 1 },
    setCount: { control: 'function', defaultValue: () => {} },
    setQuestions: { control: 'function', defaultValue: () => {} },
  },
};

export function Default(args) {
  return <Modal {...args} />;
}

Default.args = {
  toggleModal: () => {},
  handleButtonClick: () => {},
};
