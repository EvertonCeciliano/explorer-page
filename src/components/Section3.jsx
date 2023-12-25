import style from './Section3.module.css';

export function Section3() {
  return (
    <div className={style.section}>
      <form>
        <fieldset>
          <h2>Entre em contato</h2>
          <div className={style.inputwrapper}>
            <input className={style.name} type="text" placeholder="Seu nome" />
          </div>
          <div className={style.inputwrapper}>
            <input className={style.email} type="email" placeholder="Email" />
          </div>
          <div className={style.inputwrapper}>
            <textarea placeholder="Digite sua mensagem aqui..."></textarea>
          </div>
        </fieldset>
        
        <a href="#" className={style.buttonLink}>Enviar Mensagem</a>
      </form>
    </div>
  );
}