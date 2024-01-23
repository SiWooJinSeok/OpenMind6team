import Modal from './Modal';
import GlobalStyle from '../../../GlobalStyle';

export default {
  title: 'Modal/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};
export function Default() {
  return <Modal />;
}
