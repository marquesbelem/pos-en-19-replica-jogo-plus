import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UIkit from "uikit";

const WriteIdea = () => {

    const genre = [
        {
            title: 'Ação',
            idFilter: '#Acao'
        },
        {
            title: 'Aventura',
            idFilter: '#Aventura'
        },
        {
            title: 'Simulação',
            idFilter: '#Simulacao'
        },
        {
            title: 'Estratégia',
            idFilter: '#Estrategia'
        },
        {
            title: 'Esporte',
            idFilter: '#Esporte'
        },
        {
            title: 'FPS',
            idFilter: '#FPS'
        },
        {
            title: 'RPG',
            idFilter: '#RPG'
        },
        {
            title: 'Moba',
            idFilter: '#Moba'
        }
    ]
    
    const [msgValidation, setMsgValidation] = useState(null);

    const [data, setData] = useState({
        title: '',
        content: '',
        category: ''
    });

    const [errorData, setErrorData] = useState(null);

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

        try {
            const response = await axios.post('/api/postIdeas', data);
            console.log(response);
            console.log(data);

            UIkit.notification('Sua ideia foi enviada com sucesso!', 'success');

        } catch (error) {
            setErrorData(error);

            UIkit.notification('Erro no envio da ideia, tente novamente!', 'danger');
        }

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
                                value={JSON.stringify(g)}
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

