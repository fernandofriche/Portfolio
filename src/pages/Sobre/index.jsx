import styles from './Sobre.module.css'
import avatar from '../../images/myfoto.png'
import html from '../../images/icon-html.svg'
import css from '../../images/icon-css.svg'
import js from '../../images/icon-js.svg'
import react from '../../images/icon-react.svg'
import node from '../../images/icon-node.svg'
import sql from '../../images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Fernando Friche</span> <br />
                    <strong>Dev e Aluno</strong> </p>

                    <p>Atualmente sou estudante do Colégio Cotemig,</p>

                    <p>gosto muito de desenvolver sites e progamar em Android e</p>

                    <p>fico muito feliz em perceber minha evolução nos meus conhecimentos.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

