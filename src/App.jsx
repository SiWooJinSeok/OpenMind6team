import GlobalStyle from './GlobalStyle';
import FeedCard from './components/organisms/FeedCard/FeedCard';
import questions from './mock.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <FeedCard questions={questions} />
      </div>
    </>
  );
}

export default App;
