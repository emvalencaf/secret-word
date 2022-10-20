import styles from '../css/StartScreen.module.css';


const StartScreen = ({startGame}) => {
  return (
    <div className={styles.start}>
        <h1 className={styles.start_h1}>Secret Word</h1>
        <p className={styles.start_p}>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen;