import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

import React, { useState } from 'react'
import MenuNavbar from '../../components/MenuNavbar'
import HeadCustom from '../../components/HeadCustom'
import firebase from "../../config/firebase-client"
import "firebase/auth"
import { useRouter } from 'next/router'
import UIkit from "uikit"
export default function Home() {

    const [data, setData] = useState("");
    const router = useRouter();

    const handleChange = ({ target: { name, value } }) => {
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (data.pass !== data.passConfirmed) {
            UIkit.notification("Senhas diferentes", 'warning');
            return;
        }

        await firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
            .then(function () {
                UIkit.notification("Cadastro feito com sucesso!", 'success');
                router.push('/ideas/');
            }).catch(function (error) {
                UIkit.notification(error.message, 'danger');
            })
    };


    return (
        <div>
            <HeadCustom />
            <MenuNavbar />
            <div className="uk-container uk-padding">
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-card uk-card-primary uk-card-body uk-text-center">
                        <h3 className="uk-card-title">Cadastrar</h3>
                        <form onSubmit={handleSubmit}>
                            <input className="uk-input uk-margin-bottom" placeholder="Nome" type="text"
                                name="displayName" value={data.displayName} onChange={handleChange} />

                            <input className="uk-input uk-margin-bottom" placeholder="Email" type="email"
                                name="email" value={data.email} onChange={handleChange} required />

                            <input className="uk-input uk-margin-bottom" placeholder="Senha" type="password"
                                name="pass" value={data.pass} onChange={handleChange} required />

                            <input className="uk-input uk-margin-bottom" placeholder="Confirme sua senha" id="passConfirmed" type="password"
                                name="passConfirmed" value={data.passConfirmed} onChange={handleChange} required />

                            <button className="uk-button uk-button-default bt-enviar" type="submit" >Criar</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
              .uk-card {
                background-color: #20558b;
                color: #ffff;
              }
         `}
            </style>
        </div>
    )
}