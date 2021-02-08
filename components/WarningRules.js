import UIkit from "uikit";
import React, {useEffect} from "react"
import { useRouter } from 'next/router'

const WarningRules = () => {
    const router = useRouter()

    useEffect(() => {
        UIkit.util.on(document, 'hide', '#modal-rules', function() {
            console.log('msg ...');
            router.push('/ideas/')
        });
      }, [])

    return (
        <div>
            <div id="modal-rules" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body uk-text-center">
                    <h2 className="uk-modal-title">Antes de qualquer coisa, algumas regras:</h2>
                    <ul className="uk-list uk-list-divider">
                        <li>Essa é uma plataforma com o intuito de ajudar quem quer programar jogos mas tem dificuldade com a criatividade.</li>
                        <li>Peço que respeite todos!</li>
                        <li>Estejam cientes que as ideias postadas aqui serão de livre acesso e direitos.</li>
                        <li>Publique repositorio do projeto, site hospedado para que outras pessoas possam ver o que foi feito.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WarningRules; 