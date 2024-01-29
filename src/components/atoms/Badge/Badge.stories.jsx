import GlobalStyle from '../../../GlobalStyle';
import Badge from './Badge';

export default {
  title: 'Atoms/Badge/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export function Answered() {
  return <Badge isAnswered />;
}

export function NoAnswered() {
  return <Badge isAnswered={false} />;
}
