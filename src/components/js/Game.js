//styles
import styles from '../css/Game.module.css';


const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      
      <h2>Advinhhe a palavra:</h2>
      
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} {guesses>1?'tentativas':'tentativa'}.</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter)?
            (
              <span key={i} className={styles.letter}></span>
            )
            :(
              <span key={i} className={styles.blankSquare}>

              </span>
            )
        ))}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button type='submit'>Jogar</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game