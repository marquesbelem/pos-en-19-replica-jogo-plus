import Link from 'next/link'
import { useAuth } from "../config/auth";
import { useRouter } from 'next/router'
import firebase from "../config/firebase-client"
import "firebase/auth"
const MenuAuth = () => {

    const { user } = useAuth();
    const router = useRouter();
    let displayName = ''; 

    const signOut = async e => {
        e.preventDefault();

        await firebase.auth().signOut()
            .then(function () {
                router.push('/');
            }).catch(function (error) {
                UIkit.notification(error.message, 'danger');
            })
    };

    if (!user) {
        return (
            <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                    <Link href="/login/access">
                        <a className="uk-button entrar">Entrar</a>
                    </Link>
                    <Link href="/login/register">
                        <a className="uk-button cadastrar">Cadastrar</a>
                    </Link>
                </div>
            </div>
        )
    }
    else {
        const index = user.email.indexOf("@");
        displayName = user.email.substr(0,index);
    }

    return (
        <div className="uk-navbar-right">
            <div className="uk-navbar-item">
                <p className="user">Olá criador(a)</p>
                <p className="user">{displayName}</p>
            </div>
            <div className="uk-navbar-item">
                <button className="uk-button off" onClick={signOut}>Sair</button>
            </div>
        </div>
    )

}

export default MenuAuth;