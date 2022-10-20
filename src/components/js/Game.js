//styles
import styles from '../css/Game.module.css';


const Game = ({verifyLetter}) => {
  return (
    <div className={styles.game}>
      <p>
        <span>Pontuação: 000</span>
      </p>
      
      <h2>Advinhhe a palavra:</h2>
      
      <h3>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>

      <div className="wordContainer">
        <span className='letter'>
          A
        </span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainerr">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button type='submit'>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game