
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"
import Link from 'next/link'
import MenuNavbar from '../../components/MenuNavbar'
import HeadCustom from '../../components/HeadCustom'
import React, { useState, useEffect } from 'react'
import UIkit from "uikit";
import CommentCard from '../../components/CommentCard'
import firebase from "../../config/firebase-client"
import ModelIdea from "../../config/data-idea"
import FilterWords from "../../config/moderation-words"
import GenereteId from "../../config/generate-id"
import { useAuth } from "../../config/auth";

DetailIdea.getInitialProps = ({ query }) => {
    return {
        id: query.id,
    }
}

export default function DetailIdea(props) {
    const { user } = useAuth();
    let displayNameComment = '';

    if (user) {
        const index = user.email.indexOf("@");
        displayNameComment = user.email.substr(0, index);
    }

    const [response, setResponse] = useState(null);

    useEffect(async () => {

        window.history.pushState({}, null, '/ideas');
        let idea_ref = firebase.database().ref('/ideas/' + props.id);

        idea_ref.on('value', (snapshot) => {
            setResponse(ModelIdea(snapshot.val(), snapshot.key));
        });
    }, []);

    let date = new Date();
    let dateFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    const [comment, setComment] = useState({
        id: GenereteId(),
        content: '',
        datePublish: dateFormatada,
        displayName: displayNameComment
    });

    const handleChange = ({ target: { name, value } }) => {
        setComment(prev => ({
            id: GenereteId(),
            [name]: value,
            datePublish: dateFormatada,
            displayName: displayNameComment
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        let comments = [];

        if (response.comments) {
            comments = response.comments;
        }

        comments.push(comment);

        const updateData = {
            id: response.id,
            title: response.title,
            content: response.content,
            createdate: response.createdate,
            category: response.category,
            comments: comments,
            displayName: response.displayName
        }

        let idea_ref = firebase.database().ref('/ideas/' + response.id);

        idea_ref.update(updateData).then(() => {

            UIkit.notification("<p id='msg-sucess'>Seu comentario foi enviado com sucesso!</p>", 'success');
            setComment({ content: ' ' });

        }, function (errorObject) {
           /* if (!user) {
                UIkit.notification('Você precisa está logado para executar essa ação!', 'danger');
            }*/
           // else {
                UIkit.notification("<p id='msg-error'>Erro no envio da ideia, tente novamente!</p>", 'danger');
           //}
        });
    };


    if (!response) {
        return (
            <div>
                <HeadCustom />
                <main>

                    <MenuNavbar />

                    <div className="uk-container">
                        <div className="uk-card uk-card-default uk-card-body uk-text-center">
                            <span uk-spinner="ratio: 4.5"></span>
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

            <MenuNavbar />

            <div className="uk-container">
                <div className="uk-margin-bottom uk-margin-top">
                    <Link href="/ideas/">
                        <a className="text-back">Voltar</a>
                    </Link>
                </div>

                <div className="uk-card uk-card-default uk-card-body">
                    <span className="uk-label">{response.category ? response.category : " "}</span>
                    <h1 className="uk-text-center">{FilterWords(response.title)}</h1>
                    <p>{FilterWords(response.content)}</p>
                    <span>Escrito por: {response.displayName}</span>
                    <br></br>
                    <span>Publicado em: {response.createdate}</span>
                    <hr className="uk-divider-icon"></hr>
                    <h2 className="uk-text-center">Comentários</h2>

                    <div className="uk-card uk-card-body">
                        <form onSubmit={handleSubmit}>

                            <textarea className="uk-textarea" rows="5" placeholder="Escreve seu comentário ..." maxLength="300" type="text " id="comentario" name="content"
                                value={comment.content}
                                onChange={handleChange} required />

                            <p className="uk-margin-bottom uk-text-dark uk-text-right"><span>Limite de 300 caracteres.</span></p>
                            <div className="uk-flex uk-flex-right uk-margin-bottom">
                                <button className="uk-button uk-button-default" type="submit" id="btn-enviar-comentario">Comentar</button>
                            </div>
                        </form>
                    </div>

                    <CommentCard comments={response.comments} />

                </div>
            </div>

            <style jsx>{`

                        .text-back {
                            color: black !important;
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
          
                        .uk-label {
                            background-color: #ffc107;
                            color: #000;
                        }

                    `}
            </style>
        </div>
    )
}
