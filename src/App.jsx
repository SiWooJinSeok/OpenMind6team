import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;
