import styles from './Section1.module.css'
import seta from '../assets/seta.svg'
import astronauta from '../assets/img1.png'
export function Section1 (){
  return(
    <div className={styles.wrapper}>
      <div className={styles.centerContent}>
        <img className={styles.img} src={astronauta} alt="Astronauta" />
          <section>
        <h1>Explore sem limites</h1>
        <h2>Porque o aprendizado é contínuo</h2>
        <img className={styles.seta} src={seta} alt="Seta" />
          </section>
      </div>
    </div>
  )
}