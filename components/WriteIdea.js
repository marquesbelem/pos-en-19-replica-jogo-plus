const WriteIdea = () => {
    return (
        <div>
            <div id="modal-write-idea" uk-modal="true">
                <div class="uk-modal-dialog uk-modal-body uk-text-center">
                    <h2 class="uk-modal-title">Escreva sua ideia</h2>
                    <form>
                        <input class="uk-input uk-margin-bottom" placeholder="Titulo"></input>
                        <textarea class="uk-textarea " rows="5" placeholder="Ideia .."></textarea>
                        <p class="uk-margin-bottom uk-text-danger uk-text-left"><span>Limite de 300 caracteres.</span></p>
                        <button class="uk-button uk-button-default">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WriteIdea;