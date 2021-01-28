
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import MenuNavbar from '../components/MenuNavbar'
import HeadCustom from '../components/HeadCustom'
import Comment from '../components/Comment'

export default function MoreIdea() {
    return (
        <div>
            <HeadCustom />
            <main>

                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h1 className="uk-text-center">Titulo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <hr className="uk-divider-icon"></hr>
                        <h2 className="uk-text-center">Comentários</h2>
                        <div className="uk-flex uk-flex-right uk-margin-bottom">
                            <button className="uk-button uk-button-default">Comentar</button>
                        </div>

                        <Comment />
                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
