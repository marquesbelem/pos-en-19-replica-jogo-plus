
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

import MenuNavbar from '../../components/MenuNavbar'
import Write from '../../components/WriteIdea'
import HeadCustom from '../../components/HeadCustom'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import firebase from "../../config/firebase-client"
import FilterWords from "../../config/moderation-words"
import ModelGenre from "../../config/data-genre"
import ModelIdea from "../../config/data-idea"

export default function Home() {

    const genre = ModelGenre();
    const [data, setData] = useState(null);
    let count = 5; 
    
    const loadData = () => {
        let idea_ref = firebase.database().ref('ideas').orderByChild('createdate').limitToFirst(count);
        idea_ref.on('value', (snapshot) => {
            let _idea = [];

            snapshot.forEach((childSnapshot) => {
                _idea.push(ModelIdea(childSnapshot.val(), childSnapshot.key))

            });

            setData(_idea);
        });
    };

    const scrollLoad = () => {
        if(window.pageYOffset + window.innerHeight >= document.body.clientHeight) 
        {
            count = count + 2;
            loadData();
        }
    }

    useEffect(async () => {
        loadData();
     
        window.onscroll = () => {
            scrollLoad();
        }
    }, []);

    if (!data) {
        return (
            <div>
                <HeadCustom />
                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-text-center">
                        <span uk-spinner="ratio: 4.5"></span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <HeadCustom />
            <MenuNavbar />

            <div className="uk-container-expand uk-padding">
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className="uk-margin-bottom">
                    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="dropbar: true;">
                        <div className="uk-flex">
                            <button className="uk-button uk-button-large btn-idea" id="btn-escrever-ideia" type="button">Escrever ideia</button>
                            <Write />
                        </div>
                    </nav>
                </div>
            </div>

            <div className="uk-container" >

                <div uk-filter="target: .js-filter" id="main">
                    <ul className="uk-subnav uk-subnav-pill">
                        <li className="uk-active" uk-filter-control="group: fill"><a href="#">All</a></li>
                        {genre.map((g) => (
                            <li key={g.id} uk-filter-control={'filter: [fill=' + g.title + ']; group: fill'}><a href="#">{g.title}</a></li>
                        ))}
                    </ul>
                    <div className="js-filter">
                        {data.map((idea) => (

                            <div fill={idea.category ? idea.category : " "} key={idea.id}>
                                <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-bottom">
                                    <span className="uk-label">{idea.category ? idea.category : " "}</span>
                                    <div id={"titulo-"+idea.title} dangerouslySetInnerHTML={{ __html: idea.title }} />
                                    {/* <h3 className="uk-card-title">{FilterWords(idea.title)}</h3> */}
                                    <p id={"descricao-"+idea.title} className="wrap-overflow">{FilterWords(idea.content)}</p>

                                    <div className="uk-flex uk-flex-between">
                                        <div>
                                            <span className="uk-badge" uk-tooltip="Comentarios">{idea.comments ? Object.keys(idea.comments).length : 0}</span>
                                        </div>
                                        <div>
                                            <Link href="/ideas/[id]" as={'/ideas/' + idea.id}>
                                                <a className="uk-button uk-button-default uk-button-around" id="btn-saber-mais">Saiba mais</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="uk-text-right">
                <a className="uk-button" href="#" uk-scroll="true">Topo</a>
            </div>

            <style jsx>{`

                        .uk-navbar-sticky {
                            margin-top: 10px;
                        }
                        .wrap-overflow {
                            white-space: nowrap;  
                            text-overflow: ellipsis;
                            width: 100%;
                            overflow: hidden;  
                        }
                        .w-100 {
                            width: 100%;
                        }

                        .uk-button-default {
                            background-color: #000;;
                            color: #fff;
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
          
                        .uk-label, .uk-subnav-pill>.uk-active>a {
                            background-color: #ffc107;
                            color: #000;
                        }

                        .uk-badge {
                            background: #20558b;
                        }

                        .btn-idea {
                            background: #000000;;
                            color: white;
                        }

                        .btn-enviar {
                            background-color: #ffc107;
                            color: #333;
                            border-color: #b2b2b2;
                        }
                    `}
            </style>
        </div>
    )
}
