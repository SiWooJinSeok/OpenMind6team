import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import QuestionPage from './components/pages/QuestionPage';
import questions from './mock.json';

function App() {
  return (
    <div>
      <GlobalStyle />

      <Outlet />
    </div>

  );
}

export default App;
