// React
import {useState} from 'react';

//data
import {wordsList} from './data/words.data.js';

//components
import StartScreen from './components/js/StartScreen.js';
import Game from './components/js/Game.js';
import GameOver from './components/js/GameOver.js';

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

  //start secret word game
  const startGame = () => {

    setGameStage(stages[1].name);

  };

  // process the leter input
  const verifyLetter = () => {

    setGameStage(stages[2].name);
    
  };

  // restart the game
  const retry = () => {

    setGameStage(stages[0].name);

  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
