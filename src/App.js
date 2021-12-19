import './App.css';
import Search from './components/Search';
import WatchList from './components/WatchList';

function App() {
  return (
    <div className="App">
      <h1>Trading App</h1>
      <Search />
      <WatchList />
    </div>
  );
}

export default App;