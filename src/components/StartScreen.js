import styles from './StartScreen.module.css';


const StartScreen = () => {
  return (
    <div>
        <h1 className={styles.start_h1}>Secret Word</h1>
        <p className={styles.start_p}>Clique no botão abaixo para começar a jogar</p>
        <button>Começar o jogo</button>
    </div>
  )
}

export default StartScreen