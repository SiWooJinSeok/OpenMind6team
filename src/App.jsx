import GlobalStyle from './GlobalStyle';
import CardSortDropdown from './components/atoms/Dropdown/CardSortDropdown';
import EditableDropdown from './components/atoms/Dropdown/EditableDropdown';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <CardSortDropdown CardSort="최신순" />
        <EditableDropdown />
      </div>
    </>
  );
}

export default App;
