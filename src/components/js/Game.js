//styles
import styles from '../css/Game.module.css';

console.log(styles);

const Game = ({verifyLetter}) => {
  return (
    <div className={styles.game}>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar o Jogo</button>
    </div>
  )
}

export default Game