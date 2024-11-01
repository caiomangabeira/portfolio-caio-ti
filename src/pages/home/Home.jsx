import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import styles from './Home.module.css'
import fotoCaio from '../../assets/foto3x4-2.png'

function Home() {
    return (
        <div className={styles.divhome}>
            <div className={styles.imghome}>
                <img src={fotoCaio} alt="Foto de Caio" />
            </div>

            <div className={styles.txthome}>
                <p>Olá! Sou Caio Azeredo, graduando em Sistemas de Computação e tenho grande interesse em análise de dados, possuindo conhecimentos em SQL, Python, Excel e Power BI, além de estatística. Veja meus projetos acessando a aba "Projetos" acima!</p>
            </div>

            <div className={styles.divgithome}>
                <p>Acesse meu GitHub: <button>
                    <a className={styles.linkgithome} href='https://github.com/caiomangabeira/' target='_blank'><FaGithub /> GitHub</a>
                </button></p>
            </div>
        </div>
    )
}

export default Home