import React from 'react'

const CommentCard = ({comments}) => {

    if (!comments) {
        return (
        <div className="uk-text-center">
            <h3>Sem comentários</h3>
        </div>
        )
    }

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id} className="uk-margin-bottom">
                    <article className="uk-comment uk-comment-primary">
                        <header className="uk-comment-header">
                            <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                                <div className="uk-width-expand">
                                    <h4 className="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">Desconhecido</a></h4>
                                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                        <li><a href="#">{comment.datePublish}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <div className="uk-comment-body">
                            <p>{comment.content}</p>
                        </div>
                    </article>
                </div>
            ))}
        </div>

    )
}

export default CommentCard;