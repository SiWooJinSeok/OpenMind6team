import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {
  console.log('테스트해보겠습니다');
  return (
    <div>
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;
