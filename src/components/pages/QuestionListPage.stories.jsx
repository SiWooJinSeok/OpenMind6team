import QuestionListPage from './QuestionListPage';

export default {
  title: 'QuestionListPage',
  component: QuestionListPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     text: { control: 'text' },
  //     width: { control: 'text' },
  //   },
};

const Template = (args) => <QuestionListPage {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   text: '대답하러가기',
//   width: '300px',
// };
