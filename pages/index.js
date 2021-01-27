import Head from 'next/head'
import MenuNavbar from '../components/MenuNavbar';

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
            <div class="uk-animation" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Plataforma que</h3>
                <p>centraliza ideias de jogos para programadores que tem dificuldade em criar ideias ou não saber por onde começar. </p>
              </div>
            </div>
            <div class="uk-animation" tabindex="0">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-slide-left-medium">
                <h3 class="uk-card-title">Você programador</h3>
                <p>quer desenvolver alguns jogos para aprender mais? esse é o lugar</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
