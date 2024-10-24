import { FaGithub } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import styles from './Projetos.module.css'
import imgProjeto1 from '../../assets/img-projeto1.png'
import imgProjeto2 from '../../assets/img-projeto2.png'
import imgProjeto3 from '../../assets/img-projeto3.png'
import imgProjeto4 from '../../assets/img-projeto4.png'

function Projetos() {
    return (
        <div className={styles.divprojetos}>
            <h1>Meus projetos</h1>

            <div className={styles.projeto}>
                <div className={styles.imgprojeto}>
                    <img src={imgProjeto4} alt="Imagem projeto" />
                </div>

                <div className={styles.infoprojeto}>
                    <h2>Projeto Análise de Dados de Vendas</h2>
                    <p>Este projeto de análise de dados foi desenvolvido para uma empresa, utilizando Python (pandas) para análise e Power BI para visualização dos dados. A análise abordou os seguintes desafios: relação entre gênero e tipo de produto comprado, distribuição de clientes por faixa etária, relação entre a classificação do produto e a quantidade de vendas, compras por mês, métodos de pagamento mais utilizados e cancelamentos por tipo de produto. <br /> <br />
Com base nessas análises, foram gerados indicadores sobre as vendas, baseados no comportamento do cliente, o que pode oferecer insights valiosos para a gestão das vendas da empresa. Por fim, foi criado um dashboard interativo no Power BI para facilitar a visualização das métricas e das análises. <br /> <br />

Obs.: a base de dados utilizada foi importada do Kaggle.</p>
                    <p><span>Tecnologias utilizadas: Python (pandas) e Power BI</span></p>
                </div>

                <div className={styles.botaoprojeto}>
                <button>
                        <a className={styles.linkprojeto} href="https://app.powerbi.com/view?r=eyJrIjoiNmIwZTNjZDUtN2UyZC00YTJkLTk3YjktNTAxNDZlY2EwMmIwIiwidCI6ImIyZTE2Mjk3LTJlZDYtNDFiOC1iODIyLWE5NTRlOTViZDJmMCIsImMiOjR9" target='_blank'><FaEye /> Visualizar dashboard</a>
                    </button>
                    <button>
                        <a className={styles.linkprojeto} href="https://github.com/caiomangabeira/projeto-analise-comp-cliente" target='_blank'>
                            <FaGithub /> Código da análise
                        </a>
                    </button>
                </div>
            </div>

            <div className={styles.projeto}>
                <div className={styles.imgprojeto}>
                    <img src={imgProjeto3} alt="Imagem projeto" />
                </div>

                <div className={styles.infoprojeto}>
                    <h2>Projeto Sistema de Login</h2>
                    <p>Esta é uma página que funciona como um sistema de login. Nela, caso não tenha uma conta, o usuário pode se cadastrar acessando o link "Registre-se" e criando um e-mail e uma senha. Após o registro, os dados fornecidos são armazenados num armazenamento local, e o usuário poderá utilizá-los para fazer o login. Todo esse processo é acompanhado de uma simples validação dos dados fornecidos. Após o login, uma renderização condicional ocorre, exibindo uma nova página para o usuário.</p>
                    <p><span>Tecnologias utilizadas: HTML, CSS, JavaScript e React.js.</span></p>
                </div>

                <div className={styles.botaoprojeto}>
                <button>
                        <a className={styles.linkprojeto} href="https://caiomangabeira.github.io/projeto-tela-login/" target='_blank'><FaEye /> Visualizar projeto</a>
                    </button>
                    <button>
                        <a className={styles.linkprojeto} href="https://github.com/caiomangabeira/projeto-tela-login" target='_blank'>
                            <FaGithub /> GitHub
                        </a>
                    </button>
                </div>
            </div>

            <div className={styles.projeto}>
                <div className={styles.imgprojeto}>
                    <img src={imgProjeto1} alt="Imagem projeto" />
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
                    <img src={imgProjeto2} alt="Imagem projeto" />
                </div>

                <div className={styles.infoprojeto}>
                <h2>Projeto Previsão do Tempo</h2>
                    <p>Esta é uma pagina que exibe a previsão do tempo de uma cidade por meio de requisições. Primeiro, ao usuário digitar o nome de uma cidade e enviar, uma requisição é feita para obter as coordenadas dessa cidade, através de uma API. Depois, utilizando as coordenadas retornadas por essa API, outra requisição é feita, retornando dados meteorológicos da cidade e exibindo para o usuário. Obs.: este projeto não é responsivo para celulares e tablets. É voltado para exibição em desktops e notebooks.</p>
                    <p><span>Tecnologias utilizadas: HTML, CSS, JavaScript e API.</span></p>
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