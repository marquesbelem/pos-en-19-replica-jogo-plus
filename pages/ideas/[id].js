
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import MenuNavbar from '../../components/MenuNavbar'
import HeadCustom from '../../components/HeadCustom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UIkit from "uikit";
import CommentCard from '../../components/CommentCard'
import Router from 'next/router'

DetailIdea.getInitialProps = ({ query }) => {
    return {
        id: query.id,
    }
}

export default function DetailIdea(props) {

    const [response, setResponse] = useState(null);

    useEffect(async () => {
        const res = await axios.get('/api/ideas/' + props.id);
        setResponse(res);
    }, []);

    const [msgValidation, setMsgValidation] = useState(null);

    let date = new Date();
    let dateFormatada = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 

    const [comment, setComment] = useState({
        content: '',
        datePublish: dateFormatada
    });

    const handleChange = ({ target: { name, value } }) => {
        setComment(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (comment.content.length <= 0) {
            setMsgValidation("Campo obrigatório.");
            return;
        }
        else {
            setMsgValidation("");
        }

        try {
            let comments = [];
            
            if(response.data.comments) {
                comments = response.data.comments;
            }
            
            comments.push(comment);

            const updateData = {
                title: response.data.title,
                content: response.data.content,
                comments: comments
            }

            const res = await axios.post('/api/ideas/' + props.id, updateData);
            UIkit.notification('Seu comentario foi enviado com sucesso!', 'success');

            setTimeout(() => { Router.reload(window.location.pathname); }, 2000);
            
        } catch (error) {
            console.log(error);
            UIkit.notification('Erro no envio do comentario, tente novamente!', 'danger');
        }
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
            <main>

                <MenuNavbar />

                <div className="uk-container">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h1 className="uk-text-center">{response.data.title}</h1>
                        <p>{response.data.content}</p>
                        <hr className="uk-divider-icon"></hr>
                        <h2 className="uk-text-center">Comentários</h2>

                        <div className="uk-card uk-card-body">
                            <form onSubmit={handleSubmit}>

                                <textarea className="uk-textarea" rows="5" placeholder="Escreve seu comentário ..." maxLength="300" type="text " name="content"
                                    value={comment.content}
                                    onChange={handleChange} />

                                <span className="uk-text-danger uk-text-left uk-margin-bottom">{msgValidation}</span>

                                <p className="uk-margin-bottom uk-text-dark uk-text-right"><span>Limite de 300 caracteres.</span></p>
                                <div className="uk-flex uk-flex-right uk-margin-bottom">
                                    <button className="uk-button uk-button-default" type="submit" >Comentar</button>
                                </div>
                            </form>
                        </div>

                        <CommentCard comments={response.data.comments}/>

                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
