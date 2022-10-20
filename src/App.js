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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuesedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];


    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {
      word,
      category
    };

  };

  //start secret word game
  const startGame = () => {
    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    //create an array from letters
    const wordLetters = word.toLowerCase().split('');

    //fill states
    setPickedWord(word);
    setLetters(wordLetters);
    setPickedCategory(category);

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
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        wrongLetters={wrongLetters}
        guessedLetters={guessedLetters}
        score={score}
        guesses={guesses}
      />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
