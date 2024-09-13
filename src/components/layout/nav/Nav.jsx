import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ulnav}>
                <li className={styles.linav}>
                    <Link className={styles.linknav} to="/">Home</Link>
                </li>
                <li className={styles.linav}>
                    <Link className={styles.linknav} to="/projetos">Projetos</Link>
                </li>
                <li className={styles.linav}>
                    <Link className={styles.linknav} to="/sobremim">Sobre Mim</Link>
                </li>
                <li className={styles.linav}>
                    <Link className={styles.linknav} to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav