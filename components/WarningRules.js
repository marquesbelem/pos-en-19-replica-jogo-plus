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
                        <li>A principio será tudo anonimo, mas peço que tenham respeito com todos!</li>
                        <li>Estejam ciente que as ideias postadas aqui será de livre acesso e direitos</li>
                        <li>Incentivo aos programadores publicar no comentarios da ideia o repositorio do projeto,
                            site hospedado para que outras pessoas possam ver</li>
                    </ul>
                </div>
            </div>

            <style jsx global>{`
              .uk-modal-dialog {
                background-color: #607d8b;
                color: #ffff;
              }

              .uk-modal-title {
                color: #ffff;
              }
         `}
      </style>
        </div>
    )
}

export default WarningRules; 