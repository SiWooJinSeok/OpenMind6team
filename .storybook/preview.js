/** @type { import('@storybook/react').Preview } */
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from '../src/GlobalStyle';
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    </>
  ),
];
