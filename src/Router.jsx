import { createBrowserRouter } from 'react-router-dom';
import AnswerPage from './components/pages/AnswerPage';
import MainPage from './components/pages/MainPage';
import QuestionListPage from './components/pages/QuestionListPage';
import QuestionPage from './components/pages/QuestionPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/list',
        element: <QuestionListPage />,
      },
      {
        path: '/post/:id/answer',
        element: <AnswerPage />,
      },
      {
        path: '/post/:id',
        element: <QuestionPage />,
      },
    ],
  },
]);

export default router;
