
const Comment = () => {
    return (
        <div>
            <article className="uk-comment uk-comment-primary">
                <header className="uk-comment-header">
                    <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">Author</a></h4>
                                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                    <li><a href="#">12 days ago</a></li>
                                </ul>
                            </div>
                        </div>
                 </header>
                    <div className="uk-comment-body">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
            </article>
        </div>
    )
}

export default Comment;