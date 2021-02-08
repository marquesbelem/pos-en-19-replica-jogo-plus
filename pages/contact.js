import MenuNavbar from '../components/MenuNavbar'
import HeadCustom from '../components/HeadCustom'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <HeadCustom />
      <MenuNavbar />

      <div className="uk-container uk-padding">
        <div className="uk-container uk-margin-top ptb-70">
          <div className="uk-child-width-1-2@m uk-flex uk-flex-wrap uk-flex-center" uk-grid="true">
            <div className="uk-card uk-card-default uk-card-body uk-margin-right uk-margin-top">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <p>Essa plataforma é um MVP desenvolvida para o projeto final do curso de MBA Engenharia de Software.</p>
                  <div class="uk-width-auto">
                    <img src="profile.png" />
                  </div>
                  <div class="uk-width-expand uk-margin-top">
                    <h3 class="uk-card-title uk-margin-remove-bottom">Camila Marques Belem</h3>
                    <p class="uk-text-meta uk-margin-remove-top">Desenvoldora Full Stack do projeto</p>
                  </div>
                </div>
              </div>
              <div class="uk-card-body">
                <p>
                  <Link href="https://www.linkedin.com/in/camila-marques-belem-9438a5100/">
                    <a target="_blank">Linkedin</a>
                  </Link>
                </p>
                <p>
                  <Link href="https://marquesbelem.github.io/">
                    <a target="_blank">Portfólio</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
