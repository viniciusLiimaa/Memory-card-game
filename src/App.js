import Header from './components/Header';
import Gameboard from './components/Gameboard';
const apiKey = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
}

export default App;
