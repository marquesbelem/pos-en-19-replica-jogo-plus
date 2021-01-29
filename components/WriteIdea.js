import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UIkit from "uikit";

const WriteIdea = () => {

    const [data, setData] = useState({
        title: '',
        content: ''
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

                    <input className="uk-input uk-margin-bottom" placeholder="Titulo" type="text"
                        name="title" value={data.title} onChange={handleChange} />

                    <textarea className="uk-textarea" rows="5" placeholder="Ideia .." maxLength="300" type="text " name="content"
                        value={data.content}
                        onChange={handleChange} />

                    <p className="uk-margin-bottom uk-text-danger uk-text-left"><span>Limite de 300 caracteres.</span></p>
                    <button className="uk-button uk-button-default" type="submit" >Enviar</button>
                </form>
            </div>
        </div>

    )
}

export default WriteIdea;

