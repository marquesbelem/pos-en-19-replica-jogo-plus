import React, { useState } from 'react'

const WriteIdea = () => {
    return (
        <div>
            <div id="modal-write-idea" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body uk-text-center">
                    <h2 className="uk-modal-title">Escreva sua ideia</h2>
                    <form onSubmit={handleSubmit}>

                        <input className="uk-input uk-margin-bottom" placeholder="Titulo" type="text"
                            value={title}
                            onChange={({ target }) => setTitle(target.value)} />

                        <textarea className="uk-textarea " rows="5" placeholder="Ideia .." maxLength="300"
                            value={content}
                            onChange={({ target }) => setContent(target.value)} />

                        <p className="uk-margin-bottom uk-text-danger uk-text-left"><span>Limite de 300 caracteres.</span></p>
                        <button className="uk-button uk-button-default" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WriteIdea;

