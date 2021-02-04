
import React, { useState } from 'react'
import Link from 'next/link'
import firebase from "../config/firebase-admin"
import ModelIdea from "../config/data-idea"

const CardIdea = () => {

    const genre = [
        {
            id: 0,
            title: 'Ação'
        },
        {
            id: 1,
            title: 'Aventura'
        },
        {
            id: 2,
            title: 'Esporte'
        },
        {
            id: 3,
            title: 'Estratégia'
        },
        {
            id: 4,
            title: 'Simulação'
        },
        {
            id: 5,
            title: 'Moba'
        },
        {
            id: 6,
            title: 'RPG'
        },
        {
            id: 7,
            title: 'FPS'
        },
        {
            id: 8,
            title: 'Outros'
        }
    ]

    const data = [];

    let idea_ref = firebase.database().ref('ideas');

    idea_ref.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            data.push(ModelIdea(childSnapshot.val(),childSnapshot.key));
        });

        //Todo: Remover 
        console.log(data);
      });

    if (!data) {
        return (
            <div className="uk-text-center">
                <span uk-spinner="ratio: 4.5"></span>
            </div>
        );
    }


    return (
        <div uk-filter="target: .js-filter">
            <ul className="uk-subnav uk-subnav-pill">
                <li className="uk-active" uk-filter-control="group: fill"><a href="#">All</a></li>
                {genre.map((g) => (
                    <li key={g.id} uk-filter-control={'filter: [fill=' + g.title + ']; group: fill'}><a href="#">{g.title}</a></li>
                ))}
            </ul>
            <div className="js-filter">
                {data.map((idea) => (

                    <div fill={idea.category ? idea.category : " "}>
                        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-bottom"
                            key={idea.id}>
                            <span class="uk-label">{idea.category ? idea.category : " "}</span>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardIdea;