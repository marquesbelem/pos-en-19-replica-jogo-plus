import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div>
            <div className="uk-container uk-margin-top">
                <div className="uk-child-width-1-2@m uk-flex uk-flex-wrap uk-flex-center" uk-grid="true">
                    <div className="uk-card uk-card-default uk-card-body">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <h3 class="uk-card-title">Vixiii criador(a), essa pagina não existe, retorne para
                                <Link href="/">
                                        <a> home</a>
                                    </Link>
                                </h3>
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
}