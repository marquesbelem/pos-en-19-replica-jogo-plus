import Link from 'next/link'

const MenuNavbar = () => {
    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ideas/">
                                <a>Ideais</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuNavbar;