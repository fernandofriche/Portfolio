import { Link } from 'react-router-dom'
import styles from '../../pages/Home/Home.module.css'
import Dev from '../../images/developer-red.png'

function Home() {
    return (
       <>
          <section className={styles.home}>
            <div className={styles.apresentacao}>
              <p>
                Olá, sou <br/>
                <span>Fernando Friche</span><br/>
                Dev Web e Mobile
              </p>
              <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais sobre mim
            </Link>
            </div>
            <figure>
            <img className={styles.img_home} src={Dev} alt="Imagem de Home" />
            </figure>
          </section>
        </> 
    )
}

export default Home
