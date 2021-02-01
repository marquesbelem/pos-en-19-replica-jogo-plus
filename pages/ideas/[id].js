
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import MenuNavbar from '../../components/MenuNavbar'
import HeadCustom from '../../components/HeadCustom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

DetailIdea.getInitialProps = ({ query }) => {
    return {
        id: query.id,
    }
}

export default function DetailIdea(props) {

    const [response, setResponse] = useState(null);

    useEffect(async () => {
        console.log(props.id);
        const res = await axios.get('/api/ideas/' + props.id);
        setResponse(res);
    }, []);

    if (!response) {
        return (
            <div>
                <HeadCustom />
                <main>

                    <MenuNavbar />

                    <div className="uk-container">
                        <div className="uk-card uk-card-default uk-card-body">
                            carregando
                        </div>
                    </div>
                </main>

                <footer>

                </footer>
            </div>
        );
    }

    return (
        <div>
            <HeadCustom />
            <main>

                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h1 className="uk-text-center">{response.data.title}</h1>
                        <p>{response.data.title}</p>
                        <hr className="uk-divider-icon"></hr>
                        <h2 className="uk-text-center">Comentários</h2>
                        <div className="uk-flex uk-flex-right uk-margin-bottom">
                            <button className="uk-button uk-button-default">Comentar</button>
                        </div>

                        <div>
                            <article className="uk-comment uk-comment-primary">
                                <header className="uk-comment-header">
                                    <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                                        <div className="uk-width-expand">
                                            <h4 className="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">Author</a></h4>
                                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                <li><a href="#">12 days ago</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div className="uk-comment-body">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
