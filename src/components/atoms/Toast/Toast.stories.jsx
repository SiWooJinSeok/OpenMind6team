import GlobalStyle from '../../../GlobalStyle';
import Toast from './Toast';

export default {
  title: 'Toast/Toast',
  component: Toast,
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
  return <Toast />;
}
