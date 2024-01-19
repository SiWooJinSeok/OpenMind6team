import GlobalStyle from './GlobalStyle';
import ThumbsDown from './components/atoms/Reaction/ThumbsDown';
import ThumbsUp from './components/atoms/Reaction/ThumbsUp';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h2>Hello World</h2>
        <ThumbsUp isLiked count={12} />
        <ThumbsUp isLiked={false} count={12} />
        <ThumbsUp isLiked count={0} />
        <ThumbsUp isLiked={false} count={0} />

        <ThumbsDown isDisliked count={12} />
        <ThumbsDown isDisliked={false} count={12} />
        <ThumbsDown isDisliked count={0} />
        <ThumbsDown isDisliked={false} count={0} />
      </div>
    </>
  );
}

export default App;
