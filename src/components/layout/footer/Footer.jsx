import { FaRegCopyright } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.pfooter}>Copyright <FaRegCopyright /> Caio 2024</p>
        </footer>
    )
}

export default Footer