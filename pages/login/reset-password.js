import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

import React, { useState } from 'react'
import MenuNavbar from '../../components/MenuNavbar'
import HeadCustom from '../../components/HeadCustom'
import firebase from "../../config/firebase-client"
import "firebase/auth"
import UIkit from "uikit"
import { useRouter } from 'next/router'

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

        await firebase.auth().sendPasswordResetEmail(data.email)
            .then(function () {
                UIkit.notification("Uma mensagem foi enviada para o email solicitado", 'success');
                router.push('/login/access');
            }).catch(function (error) {
                UIkit.notification(error.message, 'danger');
            })
    };

    return (
        <div>
            <HeadCustom />
            <MenuNavbar />
            <div className="uk-container uk-padding">
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-card uk-card-default uk-card-body uk-text-center">
                        <h3 className="uk-card-title">Redefinir senha</h3>
                        <form onSubmit={handleSubmit}>

                            <input className="uk-input uk-margin-bottom" placeholder="Email" type="email"
                                name="email" value={data.email} onChange={handleChange} required />

                            <button className="uk-button uk-button-default bt-enviar" type="submit" >Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}