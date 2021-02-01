import './App.css';
import SongList from './SongList';
import SongDetail from './SongDetail';

function App() {
  return (
    <div className="App">
      <h1>Songs List</h1>
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
