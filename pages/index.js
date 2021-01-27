import Head from 'next/head'
import MenuNavbar from '../components/MenuNavbar'
import Warning from '../components/WarningRules'

import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Replica esse jogo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <MenuNavbar />

        <div class="uk-container">

          <div class="uk-flex uk-flex-column">

            <div class="uk-animation uk-margin-bottom" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Plataforma que</h3>
                <p>centraliza ideias de jogos para programadores que tem dificuldade em criar ideias ou não saber por onde começar. </p>
              </div>
            </div>

            <div class="uk-animation uk-margin-bottom" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Você programador</h3>
                <p>quer desenvolver alguns jogos para aprender mais? esse é o lugar</p>
              </div>
            </div>

            <div class="uk-animation uk-margin-bottom" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Você game desing</h3>
                <p>que tem varias ideias mas não tem ngm para desenvolver? esse é o lugar</p>
              </div>
            </div>

            <div class="uk-animation uk-margin-bottom" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Não é tema</h3>
                <p>que você vai encontrar aqui, é uma ideia, começo, meio e fim com os detalhes necessários.</p>
              </div>
            </div>

            <button class="uk-button uk-button-default uk-button-large" uk-toggle="target: #modal-close-default">Veja as ideias</button>
          </div>
        </div>

        <Warning />
      </main>

      <footer>

      </footer>
    </div>
  )
}
