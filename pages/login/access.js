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

        await firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
            .then(function () {
               //window.location.href =  '/ideas/';
               router.push('/ideas/');
                UIkit.notification("Login feito com sucesso!", 'success');
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
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Login</h3>
                        <form onSubmit={handleSubmit}>

                            <input className="uk-input uk-margin-bottom" placeholder="Email" type="text"
                                name="email" value={data.email} onChange={handleChange} required />

                            <input className="uk-input uk-margin-bottom" placeholder="Senha" type="password"
                                name="pass" value={data.pass} onChange={handleChange} required />

                            <button className="uk-button uk-button-default bt-enviar" type="submit" >Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}