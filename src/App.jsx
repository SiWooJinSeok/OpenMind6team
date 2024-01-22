import GlobalStyle from './GlobalStyle';
import QuestionPage from './components/pages/QuestionPage';
import questions from './mock.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <QuestionPage questions={questions} />
      </div>
    </>
  );
}

export default App;
