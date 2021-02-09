import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import MenuNavbar from '../components/MenuNavbar'
import Warning from '../components/WarningRules'
import HeadCustom from '../components/HeadCustom'

export default function Home() {
  return (
    <div>
      <HeadCustom />

      <MenuNavbar />

      <div className="uk-container uk-margin-top ptb-70">
        <div className="uk-flex uk-flex-wrap uk-flex-center@m" uk-grid="true">
          <div className="uk-width-1-3@m uk-card uk-card-hover uk-card-default uk-card-body uk-animation-slide-bottom uk-margin-left uk-margin-right uk-margin-top">
            <h3 className="uk-card-title">Plataforma que</h3>
            <p>centraliza ideias de jogos para programadores que tem dificuldade em criar ideias ou não saber por onde começar. </p>
          </div>

          <div className="uk-width-1-3@m uk-card uk-card-hover uk-card-default uk-card-body uk-animation-slide-bottom uk-margin-left uk-margin-right uk-margin-top">
            <h3 className="uk-card-title">Você programador</h3>
            <p>quer desenvolver alguns jogos para aprender mais? esse é o lugar</p>
          </div>

          <div className="uk-width-1-3@m uk-card uk-card-hover uk-card-default uk-card-body uk-animation-slide-top uk-margin-left uk-margin-right uk-margin-top">
            <h3 className="uk-card-title">Você game desing</h3>
            <p>que tem varias ideias mas não tem ngm para desenvolver? esse é o lugar</p>
          </div>

          <div className="uk-width-1-3@m uk-card uk-card-hover uk-card-default uk-card-body uk-animation-slide-top uk-margin-left uk-margin-right uk-margin-top">
            <h3 className="uk-card-title">Não é tema</h3>
            <p>que você vai encontrar aqui, é uma ideia, começo, meio e fim com os detalhes necessários.</p>
          </div>
        </div>
      </div>

      <div className="uk-container uk-margin-top uk-text-center">
        <button className="uk-button uk-button-default uk-button-large" uk-toggle="target: #modal-rules">Conheça as regras</button>
      </div>

      <Warning />

      <div className="uk-container uk-margin-top">
        <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
      </div>

      <style jsx global>{`
                body {
                  color: #2B3A57;
                  background-image: url('luminaria.png');
                  background-color: #ffffff;
                  background-repeat: no-repeat;
                  background-position-x: right;
                  background-position-y: bottom;
                }
                .uk-button-default {
                  background-color: #607d8b;
                  color: #fff;
                  border: 1px solid #ffc107;
              }

              .uk-button-default:focus, .uk-button-default:hover
              {
                background-color: #ffc107;
                color: #333;
                border-color: #b2b2b2;
              }

              .ptb-70 {
                padding-bottom: 80px;
                padding-top: 80px;
              }

              .uk-card {
                border: solid 0.2px #ffc107;
              }
         `}
      </style>
    </div>
  )
}
