import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
      <MainPage />
    </>
  );
}

export default App;
