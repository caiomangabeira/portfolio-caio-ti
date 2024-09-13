import { FaGithub } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import styles from './Projetos.module.css'

function Projetos() {
    return (
        <div className={styles.divprojetos}>
            <h1>Meus projetos</h1>

            <div className={styles.projeto}>
                <div className={styles.imgprojeto}>
                    <img src="/img/img-projeto1.png" alt="Imagem projeto" />
                </div>

                <div className={styles.infoprojeto}>
                    <h2>Projeto Lista de Tarefas</h2>
                    <p>Neste projeto, meu objetivo foi criar uma simples lista de tarefas. Nela, você pode adicionar tarefas, especificando seu título e sua duração estimada. Na lista de tarefas criada por você, é possível marcar uma ou mais como concluídas e removê-las.</p>
                    <p><span>Tecnologias utilizadas: HTML, CSS, JavaScript e React.js.</span></p>
                </div>

                <div className={styles.botaoprojeto}>
                <button>
                        <a className={styles.linkprojeto} href="https://caiomangabeira.github.io/projeto-lista-tarefa/" target='_blank'><FaEye /> Visualizar projeto</a>
                    </button>
                    <button>
                        <a className={styles.linkprojeto} href="https://github.com/caiomangabeira/projeto-lista-tarefa" target='_blank'>
                            <FaGithub /> GitHub
                        </a>
                    </button>
                </div>
            </div>

            <div className={styles.projeto}>
                <div className={styles.imgprojeto}>
                    <img src="/img/img-projeto2.png" alt="Imagem projeto" />
                </div>

                <div className={styles.infoprojeto}>
                <h2>Projeto Previsão do Tempo</h2>
                    <p>Esta é uma pagina que exibe a previsão do tempo de uma cidade por meio de requisições. Primeiro, ao usuário digitar o nome de uma cidade e enviar, uma requisição é feita para obter as coordenadas dessa cidade, através de uma API. Depois, utilizando as coordenadas retornadas por essa API, outra requisição é feita, retornando dados meteorológicos da cidade e exibindo para o usuário. Obs.: este projeto não é responsivo para celulares e tablets. É voltado para exibição em desktops e notebooks.</p>
                    <p><span>Tecnologias utilizadas: HTML, CSS e JavaScript.</span></p>
                </div>

                <div className={styles.botaoprojeto}>
                    <button>
                        <a className={styles.linkprojeto} href="https://caiomangabeira.github.io/projeto-previsao-tempo/" target='_blank'><FaEye /> Visualizar projeto</a>
                    </button>
                    <button>
                        <a className={styles.linkprojeto} href="https://github.com/caiomangabeira/projeto-previsao-tempo" target='_blank'>
                            <FaGithub /> GitHub
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projetos