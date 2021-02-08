import Link from 'next/link'
import { useAuth } from "../config/auth";
import { useRouter } from 'next/router'
import firebase from "../config/firebase-client"
import "firebase/auth"
const MenuAuth = () => {

    const { user } = useAuth();
    const router = useRouter();

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
        console.log("menu auth: " + user);
        console.log(" user.displayName: " + user.displayName);
        console.log(" user.email : " + user.email);
    }
    return (
        <div className="uk-navbar-right">
            <div className="uk-navbar-item">
                <p className="user">Olá criador(a)</p>
                <p className="user">{user.email}</p>
            </div>
            <div className="uk-navbar-item">
                <button className="uk-button off" onClick={signOut}>Sair</button>
            </div>
        </div>
    )

}

export default MenuAuth;