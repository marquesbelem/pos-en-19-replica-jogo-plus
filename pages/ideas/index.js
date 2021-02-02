
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

import MenuNavbar from '../../components/MenuNavbar'
import Write from '../../components/WriteIdea'
import HeadCustom from '../../components/HeadCustom'
import CardIdea from '../../components/CardIdea'

export default function Home() {

    return (
        <div>
            <HeadCustom />

            <main>

                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-flex uk-flex-right uk-margin-bottom">
                        <button className="uk-button uk-button-default uk-button-large" type="button">Escrever ideia</button>
                    </div>

                    <Write />

                    <CardIdea />

                </div>
            </main>

            <footer>


            </footer>
        </div>
    )
}
