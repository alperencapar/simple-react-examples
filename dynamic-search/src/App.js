import './App.css';
import SearchInput from './Components/SearchInput';
import { mock_data } from './Components/MOCK_DATA'


function App() {

  return (
    <div className="App">
      <SearchInput data={mock_data} placeholder="Search Person" />
    </div>
  );
}

export default App;
