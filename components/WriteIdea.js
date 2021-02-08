import React, { useState } from 'react'
import UIkit from "uikit";
import firebase from "../config/firebase-client"
import ModelGenre from "../config/data-genre"
import { useAuth } from "../config/auth";
import Router from 'next/router'

const WriteIdea = () => {
    const { user } = useAuth();
    let displayName = ''; 

    if(user) {
        const index = user.email.indexOf("@");
        displayName = user.email.substr(0,index);
    } else {
        displayName = "Desconhecido";
    }

    const genre = ModelGenre();

    let date = new Date();
    let dateFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    let msgValidation = '';

    const [data, setData] = useState({
        title: '',
        content: '',
        createdate: dateFormatada,
        category: '',
        comments: [],
        displayName: displayName
    });

    const handleChange = ({ target: { name, value } }) => {
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (data.content.length <= 0 && data.title.length <= 0) {
            msgValidation = "Campos obrigatórios.";
            return;
        } else if (data.content.length <= 0) {
            msgValidation = "Campo descrição é obrigatório.";
            return;
        } else if (data.title.length <= 0) {
            msgValidation = "Campo título é obrigatório.";
            return;
        } else {
            msgValidation = "";
        }

        let idea_ref = firebase.database().ref('ideas');

        idea_ref.push(data)
            .then(function () {
                UIkit.notification('Sua ideia foi enviada com sucesso!', 'success');
                Router.reload(window.location.pathname);
            })
            .catch(function (error) {
                UIkit.notification('Erro no envio da ideia, tente novamente!', 'danger');
            });

        UIkit.dropdown('.uk-dropdown', {
            delayHide: 2
        }).hide(true);
    };

    return (
   
            <div uk-dropdown="mode: click; pos: bottom-justify" className="ui-flex w-100">
                <div className="uk-card uk-card-body">
                    <form onSubmit={handleSubmit}>

                        <input className="uk-input uk-margin-bottom" placeholder="Título" type="text"
                            name="title" value={data.title} onChange={handleChange} />

                        <textarea className="uk-textarea" rows="5" placeholder="Descrição ..." maxLength="300" type="text " name="content"
                            value={data.content}
                            onChange={handleChange} />

                        <span className="uk-text-danger uk-text-left uk-margin-bottom">{msgValidation}</span>

                        <p className="uk-margin-bottom uk-text-dark uk-text-right"><span>Limite de 300 caracteres.</span></p>

                        <label>Qual gênero mais se encaixa na sua ideia?</label>
                        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                            {genre.map((g) => (
                                <label key={g.id}><input className="uk-radio" type="radio" name="category"
                                    value={g.title}
                                    onChange={handleChange} /> {g.title}</label>
                            ))}
                        </div>

                        <button className="uk-button uk-button-default bt-enviar" type="submit" >Enviar</button>
                    </form>
                </div>

                <style jsx>{`
                        .w-100 {
                            width: 100% !important;
                        }

                        .bt-enviar {
                            background-color: #ffc107;
                            color: #333;
                            border-color: #b2b2b2;
                        }

                        .bt-enviar:focus, .bt-enviar:hover {
                            background-color: #000;;
                            color: #fff;
                        }


                        .uk-checkbox:checked, .uk-checkbox:indeterminate, .uk-radio:checked {
                            background-color: #20558b;
                        }
                    `}
            </style>
            </div>
    )
}

export default WriteIdea;

