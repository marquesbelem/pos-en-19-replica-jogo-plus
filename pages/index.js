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



        <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 class="uk-card-title">Default</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

      </main>

      <footer>

      </footer>


      <style jsx>{`
        #bg {
          background-image: url("bg1.jpg");
        }
      `}</style>
    </div>
  )
}
