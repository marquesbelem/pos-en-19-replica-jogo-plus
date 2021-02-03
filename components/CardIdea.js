
import axios from 'axios';
import React, { useState } from 'react'
import Link from 'next/link'

const CardIdea = () => {

    const genre = [
        {
            title: 'Ação',
            idFilter: '#Acao'
        },
        {
            title: 'Aventura',
            idFilter: '#Aventura'
        },
        {
            title: 'Simulação',
            idFilter: '#Simulacao'
        },
        {
            title: 'Estratégia',
            idFilter: '#Estrategia'
        },
        {
            title: 'Esporte',
            idFilter: '#Esporte'
        },
        {
            title: 'FPS',
            idFilter: '#FPS'
        },
        {
            title: 'RPG',
            idFilter: '#RPG'
        },
        {
            title: 'Moba',
            idFilter: '#Moba'
        }
    ]

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
            <ul class="uk-subnav uk-subnav-pill">
                {genre.map((g) => (
                     <li key={g.id} uk-filter-control={g.idFilter}><a href="#">{g.title}</a></li>
                ))}
            </ul>

            {data.map((idea) => (
                <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-bottom" 
                    id={idea.category ? idea.category.idFilter : ""}
                    key={idea.id}>
                    <span class="uk-label">{idea.category ? idea.category.title : " "}</span>
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