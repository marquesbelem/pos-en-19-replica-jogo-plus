import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

import MenuNavbar from '../components/MenuNavbar'
import HeadCustom from '../components/HeadCustom'

import Link from 'next/link'
import { useAuth } from "../config/auth";
import { useRouter } from 'next/router'
import firebase from "../config/firebase-client"
import "firebase/auth"
import { useState } from "react"
import UIkit from "uikit";

const Home = () => {

    const { user } = useAuth();

    const [newPassword, setNewPassaword] = useState(null);

    const handleChange = ({ target: { name, value } }) => {
        setNewPassaword(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!user) {
            return
        }

        var auth = firebase.auth();
        auth.sendPasswordResetEmail(user.email).then(function () {
            UIkit.notification('Link foi enviado para email cadastrado', 'success');
        }).catch(function (error) {
            UIkit.notification(error, 'danger');
        })
    };

  /*  if (!user) {
        return (
            <div>
                <HeadCustom />
                <MenuNavbar />

                <div className="uk-container uk-margin-top">
                    <div className="uk-child-width-1-2@m uk-flex uk-flex-wrap uk-flex-center" uk-grid="true">
                        <div className="uk-card uk-card-default uk-card-body">
                            <div class="uk-card-header">
                                <div class="uk-grid-small uk-flex-middle" uk-grid>
                                    <p>Área restriata criador(a), para acessa-la é necessário ter cadastro na plataforma.</p>
                                    <div class="uk-width-auto">
                                        <img src="stop.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }*/

    return (
        <div>
            <HeadCustom />
            <MenuNavbar />

            <div className="uk-container uk-margin-top">
                <div className="uk-child-width-1-2@m uk-flex uk-flex-wrap uk-flex-center" uk-grid="true">
                    <div className="uk-card uk-card-default uk-card-body">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 class="uk-card-title">Eai criador(a), essa será sua área exclusiva! </h3>
                                <div class="uk-width-auto">
                                    <img src="badge.png" />
                                </div>
                                <div class="uk-width-expand uk-margin-top">
                                    <h4 >Futuramente, aqui que você terá acesso outras funcionalidades da plataforma,
                                    para saber mais
                                        <Link href="https://www.canva.com/design/DAEVS3CQI1o/xSVq7ED19sU01XbXsyHK0w/view">
                                            <a target="_blank"> acesse.</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body">
                            <h4 class="uk-card-title uk-margin-remove-bottom">Email:</h4>
                            <p className="uk-margin-remove-top">
                                {user.email}
                            </p>
                            <button class="uk-button uk-button-default" type="button" onClick={handleSubmit}>Mudar senha</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;