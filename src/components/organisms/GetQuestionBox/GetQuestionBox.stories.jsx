import GlobalStyle from '../../../GlobalStyle';
import GetQuestionBox from './GetQuestionBox';

export default {
  title: 'Organisms/GetQuestionBox',
  component: GetQuestionBox,
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
  return <GetQuestionBox />;
}
