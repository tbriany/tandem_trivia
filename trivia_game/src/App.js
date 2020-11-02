import {useState} from "react";
import './App.css';
import Game from './Components/Game'

function App() {

  const [gameStarted, setgameStarted] = useState(false)

  return (
    <div className="App">
      {gameStarted
        ? <Game />
        : 
        <div>
        <h1>Welcome to Trivia!!</h1>
        <button onClick={prevState => setgameStarted(true)}>Start Game</button> 
        </div>
      }
    </div>
  );
}

export default App;
