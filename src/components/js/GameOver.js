//styles
import styles from '../css/GameOver.module.css';

console.log(styles);

const GameOver = ({retry}) => {
  return (
    <div className={styles.game_over}>

      <h1>Game Over</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver