
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import Head from 'next/head'
import MenuNavbar from '../components/MenuNavbar'
import Write from '../components/WriteIdea'
import HeadCustom from '../components/HeadCustom'
import Warning from '../components/WarningRules'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export default function Home() {
    UIkit.use(Icons);
    return (
        <div>
            <Head>
                <HeadCustom />
            </Head>

            <main>

                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-flex uk-flex-right uk-margin-bottom">
                        <button className="uk-button uk-button-default uk-button-large" uk-toggle="target: #modal-write-idea">Escrever ideia</button>
                    </div>

                    <Write />


                    <div className="uk-flex">
                        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                            <h3 className="uk-card-title">Cuidar das Plantas</h3>
                            <p>is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <div className="uk-flex uk-flex-between">
                                <div>
                                    <span className="uk-badge" uk-tooltip="Comentarios">3</span>
                                </div>
                                <div>
                                    <a class="uk-button uk-button-around">Saiba mais</a>
                                </div>
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
