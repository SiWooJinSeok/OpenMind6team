/** @type { import('@storybook/react').Preview } */
import GlobalStyle from '../../../GlobalStyle';
import Badge from './Badge';

export default {
  title: 'Badge/Badge',
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
