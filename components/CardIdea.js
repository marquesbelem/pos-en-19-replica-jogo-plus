
import axios from 'axios';
import React, { useState } from 'react'
import Link from 'next/link'

const CardIdea = () => {

    const [data, setData] = useState(null);

    axios.get('/api/getIdeas').then(response => {
        setData(response.data);
    });

    if (!data) {
        return (
            <div className="uk-text-center">
                <span uk-spinner="ratio: 4.5"></span>
            </div>
        );
    }
    

    return (
        <div>
            {data.map((idea) => (
                <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-bottom"
                    key={idea.id}>
                    <h3 className="uk-card-title">{idea.title}</h3>
                    <p>{idea.content}</p>

                    <div className="uk-flex uk-flex-between">
                        <div>
                            <span className="uk-badge" uk-tooltip="Comentarios">{idea.comments ? Object.keys(idea.comments).length : 0}</span>
                        </div>
                        <div>
                            <Link href="/ideas/[id]" as={'/ideas/' + idea.id}>
                                <a className="uk-button uk-button-default uk-button-around">Saiba mais</a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardIdea;