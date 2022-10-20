// React
import {useState, useEffect, useCallback} from 'react';

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

const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuesedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];


    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {
      word,
      category
    };

  },[words]);

  //start secret word game
  const startGame = useCallback(() => {
    //clear all letters
    clearLettersStates();

    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    //create an array from letters
    const wordLetters = word.toLowerCase().split('');

    //fill states
    setPickedWord(word);
    setLetters(wordLetters);
    setPickedCategory(category);

    setGameStage(stages[1].name);

  }, [pickWordAndCategory]);

  // process the leter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return;
    
    // push guessed letter or remove a guess

    if(letters.includes(normalizedLetter)){
      
      setGuesedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])

      return;
    }

    setWrongLetters((actualWrongLetters)=>[...actualWrongLetters, normalizedLetter]);

    setGuesses((actualGuesses) => actualGuesses - 1);
    return;
  };

  const clearLettersStates = () => {

    setGuesedLetters([]);
    setWrongLetters([]);

  }


  //check if guesses end
  useEffect(()=>{

    if(guesses > 0) return;

    //reset all states
    clearLettersStates();

    setGameStage(stages[2].name);

  }, [guesses]);

  //check win conditions

  useEffect(() => {

    const uniqueLetters = [...new Set(letters)];

    //win condition
    if(guessedLetters.length === uniqueLetters. length){
      //add score

      setScore((actualScore) => actualScore += 100);

      //restart game with new word
      startGame();

    };
  }, [guessedLetters, letters, startGame]);

  // restart the game
  const retry = () => {
    
    setScore(0);
    setGuesses(guessesQty);

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
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
