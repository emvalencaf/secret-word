// React
import {useCallback, useEffect, useState} from 'react';

//data
import {wordsList} from './data/words.data.js';

//components
import StartScreen from './components/StartScreen.js';
import Game from './components/Game.js';
import GameOver from './components/GameOver.js';

//styles
import './App.css';

const stages = [
  {
    id:1,
    name:'start'
  },
  {
    id:2,
    name:'game'
  },
  {
    id:3,
    name:'end'
  }
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  );
}

export default App;
