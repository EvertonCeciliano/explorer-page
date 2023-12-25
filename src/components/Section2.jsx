import planeta1 from '../assets/planeta.svg'
import planetaazul from '../assets/planetaazul.svg'
import planetalaranja from '../assets/planetalaranja.svg'
import styles from './Section2.module.css'
import Card from './Card'; // Certifique-se de ajustar o caminho conforme a sua estrutura de pastas

export function Section2() {
  return (

      <div className={styles.cardWrapper}>
      <Card className={styles.card}
        image={planeta1}
        title="Não pare nunca"
        text={`Se você deseja ter sucesso nos estudos, é fundamental que você adote uma mentalidade de "não pare nunca". Estudar de forma consistente e contínua é a chave para o progresso e a conquista de seus objetivos.`}
      />
      <Card
        image={planetaazul}
        title="Só volta"
        text="Se você parou ou perdeu o ritmo em alguma atividade ou projeto, saiba que nunca é tarde para recomeçar. Às vezes, as circunstâncias podem mudar, ou podemos nos sentir desmotivados ou sobrecarregados."
      />
      <Card
        image={planetalaranja}
        title="Siga seu ritmo"
        text="Avançar pouco a pouco mantém progresso constante em objetivos, evitando parar ou desistir. Mesmo pequenos passos nos aproximam do destino e motivam a continuidade. Não subestime o poder de cada ação rumo ao objetivo final."
      />
    </div>
  );
}