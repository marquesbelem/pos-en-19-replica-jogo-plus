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
import Link from 'next/link'

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
                UIkit.notification("<p id='msg-sucess'>Login feito com sucesso!</p>", 'success');
            }).catch(function (error) {
                UIkit.notification("<p id='msg-error'>"+error.message+"</p>", 'danger');
            })
    };


    return (
        <div>
            <HeadCustom />
            <MenuNavbar />
            <div className="uk-container uk-padding">
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-card uk-card-default uk-card-body uk-text-center">
                        <h3 className="uk-card-title">Login</h3>
                        <form onSubmit={handleSubmit}>

                            <input className="uk-input uk-margin-bottom" placeholder="Email" type="email"
                                name="email" id="email" value={data.email} onChange={handleChange} required />

                            <input className="uk-input uk-margin-bottom" placeholder="Senha" type="password"
                                name="pass" id="pass" value={data.pass} onChange={handleChange} required />

                            <button className="uk-button uk-button-default bt-enviar" id="btn-entrar" type="submit" >Entrar</button>
                            <p>
                                <Link href="/login/reset-password">
                                    <a>Esqueceu a senha?</a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}