import React from 'react';
import Iframe from 'react-iframe';
import YouTube from 'react-youtube-embed';
import logo from './assets/problem-solving-logo.svg';
import devWorking from './assets/dev-working.svg';
import devSparks from './assets/dev-sparks.svg';
import checkIcon from './assets/check-icon.svg';
import girlWithObjectsAroundHer from './assets/girl-with-objects-around-her.svg';
import analise from './assets/analise.svg';
import pesquisa from './assets/pesquisa.svg';
import tomadaDeDecisao from './assets/tomada-de-decisao.svg';
import comunicacao from './assets/comunicacao.svg';
import confiabilidade from './assets/confiabilidade.svg';
import selfCareFlowChart from './assets/self-care-flow-chart.jpg';
import nelsonMandela from './assets/nelson-mandela.jpg';
import './App.css';

function App() {
  return (
    <>
      <div id="container">
        <header>
          <img src={logo} alt="Problem solving logo" />
          <strong>Problem solving</strong>
        </header>
        <section>
          <div>
            <h1>Problem solving é a melhor soft skill que você pode ter.</h1>
            <p>
              Além de ser uma soft skill única, também é um grupo de soft skills
              relacionadas que ajudam na sua habilidade de resolver problemas.
            </p>
          </div>
          <img src={devWorking} alt="Dev trabalhando" />
        </section>
        <section>
          <h2>O que são skills do tipo problem solving?</h2>
          <p>
            As habilidades de resolução de problemas ajudam a determinar a
            origem de um problema e encontrar uma solução eficaz. Embora a
            solução de problemas seja frequentemente identificada como uma
            habilidade separada, há outras habilidades relacionadas que
            contribuem para essa habilidade.
          </p>
        </section>
        <section>
          <img src={devSparks} alt="Dev sparkling" />
          <div>
            <h2>Algumas skills chave do tipo problem solving:</h2>
            <div>
              <div>
                <ul>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Escuta ativa
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Análise
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Pesquisa
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Criatividade
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Comunicação
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Confiabilidade
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Tomadas de decisão
                  </li>
                  <li>
                    <img src={checkIcon} alt="Check icon" />
                    Consolidação de equipes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>O que é solução de problemas e por que é importante?</h2>
          <div>
            <p>
              A capacidade de resolver problemas é uma habilidade básica para a
              vida e é essencial para o nosso dia-a-dia, em casa, na escola e no
              trabalho. Resolvemos problemas todos os dias, sem realmente pensar
              em como resolvê-los.
            </p>
            <p className="mt-10">
              Por exemplo: está chovendo e você precisa ir à loja. O que você
              faz? Existem muitas soluções possíveis. Pegue seu guarda-chuva e
              caminhe. Se não quiser se molhar, você pode dirigir ou pegar um
              ônibus. Você pode decidir ligar para um amigo para um passeio, ou
              pode decidir ir à loja outro dia.
            </p>
            <p className="mt-10">
              <strong>Não existe</strong> uma maneira certa de resolver esse
              problema e pessoas diferentes irão resolvê-lo de maneiras
              diferentes.
            </p>
          </div>
        </section>
        <section>
          <YouTube id="_bZi-34IFxs" />
        </section>
        <section>
          <img
            src={girlWithObjectsAroundHer}
            alt="Girl with objects around her"
          />
          <div>
            <h2>Skills necessárias para resolver problemas</h2>
            <p>
              Para resolver um problema de forma eficaz, você provavelmente
              usará algumas habilidades diferentes. Aqui estão alguns exemplos
              de habilidades que você pode usar ao resolver um problema:
            </p>
          </div>
        </section>
        <section>
          <div className="skill">
            <h3>Análise</h3>
            <p>
              O primeiro passo para resolver qualquer problema é analisar a
              situação. Suas habilidades analíticas o ajudarão a entender
              problemas e desenvolver soluções de maneira eficaz. Você também
              precisará de habilidades analíticas durante a pesquisa para ajudar
              a distinguir entre soluções eficazes e ineficazes.
            </p>
          </div>
          <img src={analise} alt="Análise" />
        </section>
        <section>
          <img src={pesquisa} alt="Análise" />
          <div>
            <h3>Pesquisa</h3>
            <p>
              Pesquisar é uma habilidade essencial relacionada à resolução de
              problemas. Como solucionador de problemas, você precisa ser capaz
              de identificar a causa do problema e entendê-la totalmente. Você
              pode começar a reunir mais informações sobre um problema fazendo
              um brainstorming com outros membros da equipe, consultando colegas
              mais experientes ou adquirindo conhecimento por meio de pesquisas
              ou cursos online.
            </p>
          </div>
        </section>
        <section>
          <div className="skill">
            <h3>Tomada de decisão</h3>
            <p>
              Em última análise, você precisará tomar uma decisão sobre como
              resolver os problemas que surgirem. Às vezes - e com experiência
              no setor) - você pode tomar uma decisão rapidamente. Pesquisa
              sólida e habilidades analíticas podem ajudar aqueles que têm menos
              experiência em seu campo. Também pode haver momentos em que seja
              apropriado dedicar algum tempo para criar uma solução ou
              encaminhar o problema para alguém mais capaz de resolvê-lo.
            </p>
          </div>
          <img src={tomadaDeDecisao} alt="Tomada de decisão" />
        </section>
        <section>
          <img src={comunicacao} alt="Comunicação" />
          <div>
            <h3>Comunicação</h3>
            <p>
              Ao identificar as soluções possíveis, você precisará saber como
              comunicar o problema a outras pessoas. Você também precisará saber
              quais canais de comunicação são os mais adequados ao buscar
              assistência. Depois de encontrar uma solução, comunicá-la
              claramente ajudará a reduzir qualquer confusão e facilitará a
              implementação de uma solução.
            </p>
          </div>
        </section>
        <section>
          <div className="skill">
            <h3>Confiabilidade</h3>
            <p>
              A confiabilidade é uma das habilidades mais importantes para os
              solucionadores de problemas. Resolver problemas em tempo hábil é
              essencial. Os empregadores valorizam muito as pessoas em quem
              podem confiar para identificar e implementar soluções da maneira
              mais rápida e eficaz possível.
            </p>
          </div>
          <img src={confiabilidade} alt="Confiabilidade" />
        </section>

        <section>
          <h2>
            Mas o que você faz quando não existe uma solução única para o seu
            problema?
          </h2>
          <div>
            <p>
              Os métodos heurísticos são guias gerais usados para identificar
              possíveis soluções. Um popular que é fácil de lembrar é{' '}
              <strong>IDEAL</strong> [<i>Bransford & Stein, 1993</i>] :
            </p>
            <p className="mt-10">
              <ul>
                <li>
                  <strong>I</strong>dentify the problem (Identifique o problema)
                </li>
                <li>
                  <strong>D</strong>efine the context of the problem (Defina o
                  contexto do problema)
                </li>
                <li>
                  <strong>E</strong>xplore possible strategies (Explore
                  estratégias possíveis)
                </li>
                <li>
                  <strong>A</strong>ct on best solution (Aja na melhor solução)
                </li>
                <li>
                  <strong>L</strong>ook back and learn (Olhe para trás e
                  aprenda)
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <YouTube id="fPz6uvIbWZE" />
        </section>
        <section>
          <div>
            <blockquote>
              “You can do anything but not everything”.
              <cite>
                &quot;Você pode fazer qualquer coisa mas não todas as
                coisas.&quot; <br />
                David Allen
              </cite>
            </blockquote>
            <blockquote>
              “Martial arts people fight four people at a time by fighting one
              at a time.”
              <cite>
                &quot;Artistas marciais lutam ao mesmo tempo contra quatro
                pessoas lutando contra um de cada vez.&quot; <br />
                David Allen
              </cite>
            </blockquote>
          </div>
          <div className="selfTop">
            <h2>Para se pensar:</h2>
            <p className="mb-25">
              Frases de um livro maravilhoso que me fez fazer tudo de um jeito
              diferente: Getting things done (A arte de fazer acontecer) de
              David Allen.
            </p>
            <Iframe
              width="120px"
              height="240px"
              scrolling="no"
              url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cafenamadru01-20&language=pt_BR&marketplace=amazon&region=BR&placement=B015YGOACS&asins=B015YGOACS&linkId=d539cecaeb5cae47251c8f488492ea92&show_border=true&link_opens_in_new_window=true"
            />
          </div>
        </section>
        <section>
          <h2>
            Esteja mentalmente saudável para resolver problemas usando técnicas
            de resolver problemas.
          </h2>
          <div>
            <img src={selfCareFlowChart} alt="Self-Care Flow Chart" />
            Fluxograma de autocuidado do site:
            <br />
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://smallcedarforest.org/self-care-flow-chart/"
            >
              small cedar forest
            </a>
          </div>
        </section>
        <section>
          <img src={nelsonMandela} alt="Nelson Mandela" />
          <div>
            <blockquote>
              “It always seems impossible until it&apos;s done.”
              <cite>
                &quot;Isso sempre parece ser impossível até isso ser
                feito.&quot; <br />
                Nelson Mandela
              </cite>
            </blockquote>
          </div>
        </section>
        <section>
          <h2>Referências:</h2>
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.indeed.com/career-advice/resumes-cover-letters/problem-solving-skills"
            >
              Problem-Solving Skills: Definitions and Examples
            </a>{' '}
            <br />
            <br />
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://ccmit.mit.edu/problem-solving/"
            >
              CCMIT Case Studies
            </a>
            <br />
            <br />
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.indeed.com/career-advice/career-development/effective-problem-solving-steps"
            >
              Effective Problem Solving Steps in the Workplace
            </a>
            <br />
            <br />
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://smallcedarforest.org/self-care-flow-chart/"
            >
              small cedar forest
            </a>
          </p>
        </section>
      </div>
      <footer>
        <div>
          <img src={logo} alt="Problem solving logo" />
          <strong>Problem solving</strong>
        </div>
        <div>
          <p>
            Landing page criada por <strong>Reginaldo Morikawa</strong> para o{' '}
            <strong>Desafio Expansion Week</strong> criado pela{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rocketseat.com.br"
            >
              <strong>Rocketseat</strong>
            </a>
            .
          </p>
        </div>
        <div>
          <p>
            ©{new Date().getFullYear()} - Made with 💟 &nbsp;by Reginaldo
            Morikawa️
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
