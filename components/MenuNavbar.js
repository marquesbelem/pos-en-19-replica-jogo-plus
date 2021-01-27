const MenuNavbar = () => {
    return (
        <div>
            <nav class="uk-navbar-container  uk-navbar-transparent"  uk-navbar="dropbar: true;">
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="">Home</a></li>
                        <li class="uk-parent"><a href="">Ideias</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuNavbar;