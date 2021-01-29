import React, { useState } from 'react'
import { useFetch } from '../config/fetcher'

const WriteIdea = () => {

    const { data } = useFetch('api/site');
    console.log(data);
    if (!data) {
        return (
            <div>
                <div id="modal-write-idea" uk-modal="true">
                    <div className="uk-modal-dialog uk-modal-body uk-text-center">
                        <h2 className="uk-modal-title">Escreva sua ideia</h2>
                      carregando
                    </div>
                </div>
            </div>
        );
    }
    return (

        <div>

            <div id="modal-write-idea" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body uk-text-center">
                    <h2 className="uk-modal-title">Escreva sua ideia</h2>
                    {data.map((idea) => (
                        <li key={idea.id}>
                            {idea.title}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WriteIdea;