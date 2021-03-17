import React from 'react'
import FilterWords from "../config/moderation-words"

const CommentCard = ({ comments }) => {

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
                    <article className="uk-comment uk-comment-primary card">
                        <header className="uk-comment-header">
                            <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                                <div className="uk-width-expand">
                                    <h4 className="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#" id={comment.id+"display-name"}>{comment.displayName}</a></h4>
                                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                        <li>{comment.datePublish}</li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <div className="uk-comment-body">
                            <p>{FilterWords(comment.content)}</p>
                        </div>
                    </article>
                </div>
            ))}

            <style jsx global>{`
              .card {
                background-color: #20558b;
                color: #ffff;
              }
              li {
                color: #ffc107;
              }
              .uk-link, a {
                color: #ffff !important;
              }
         `}
            </style>
        </div>

    )
}

export default CommentCard;