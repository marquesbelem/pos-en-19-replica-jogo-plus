import React, { useState, useEffect } from 'react'
import UIkit from "uikit";
import firebase from "../config/firebase-admin"
import Router from 'next/router'

const WriteIdea = () => {

    const genre = [
        {
            id: 0, 
            title: 'Ação'
        },
        {
            id: 1, 
            title: 'Aventura'
        },
         {
            id: 2, 
            title: 'Esporte'
        },
        {
            id: 3, 
            title: 'Estratégia'
        },
        {
            id: 4, 
            title: 'Simulação'
        },
        {
            id: 5, 
            title: 'Moba'
        },
        {
            id: 6, 
            title: 'RPG'
        },
        {
            id: 7, 
            title: 'FPS'
        },
        {
            id: 8, 
            title: 'Outros'
        }
    ]

    let date = new Date();
    let dateFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    const [msgValidation, setMsgValidation] = useState(null);

    const [data, setData] = useState({
        title: '',
        content: '',
        createdate: dateFormatada,
        category: '',
        comments: []
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
            setMsgValidation("Campos obrigatórios.");
            return;
        } else if (data.content.length <= 0) {
            setMsgValidation("Campo descrição é obrigatório.");
            return;
        } else if (data.title.length <= 0) {
            setMsgValidation("Campo título é obrigatório.");
            return;
        } else {
            setMsgValidation("");
        }

        let idea_ref = firebase.database().ref('ideas');

        idea_ref.push(data)
            .then(function () {
                UIkit.notification('Sua ideia foi enviada com sucesso!', 'success');
               // Router.reload(window.location.pathname);
            })
            .catch(function (error) {
                UIkit.notification('Erro no envio da ideia, tente novamente!', 'danger');
            });

        console.log(data);

        UIkit.dropdown('.uk-dropdown', {
            delayHide: 2
        }).hide(true);
    };

    return (
        <div uk-dropdown="mode: click; pos: bottom-justify" className="ui-flex">
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
                   <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        {genre.map((g) => (
                            <label key={g.id}><input class="uk-radio" type="radio" name="category"
                                value={g.title}
                                onChange={handleChange} /> {g.title}</label>
                        ))}
                    </div> 

                    <button className="uk-button uk-button-default" type="submit" >Enviar</button>
                </form>
            </div>
        </div>

    )
}

export default WriteIdea;

