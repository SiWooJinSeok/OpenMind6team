import GlobalStyle from '../../../GlobalStyle';
import GetQuestionBox from './GetQuestionBox';

export default {
  title: 'Organism/GetQuestionBox',
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
