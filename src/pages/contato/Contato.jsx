import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Contato.module.css'

function Contato() {
    return (
        <div className={styles.divcontato}>
            <h1>Contato</h1>
            <p>Entre em contato comigo por um dos meios abaixo</p>
            <div className={styles.divredes}>
                <button>
                    <a className={styles.linkredes} href="https://www.linkedin.com/in/caio-azeredo/" target='_blank'>
                        <FaLinkedin /> LinkedIn
                    </a>
                </button>

                <button>
                    <a className={styles.linkredes} href="mailto:caiodoss15@gmail.com" target='_blank'>
                        <MdEmail /> E-mail
                    </a>
                </button>

                <button>
                    <a className={styles.linkredes} href="https://github.com/caiomangabeira/" target='_blank'>
                        <FaGithub /> GitHub
                    </a>
                </button>

                <button>
                    <a className={styles.linkredes} href="https://www.instagram.com/cazrdo?igsh=YzVoMmxwMzhybG0z" target='_blank'>
                        <FaInstagram /> Instagram
                    </a>
                </button>

                <button>
                    <a className={styles.linkredes} href="https://wa.me/+5521997690976" target='_blank'>
                        <FaWhatsapp /> WhatsApp
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Contato