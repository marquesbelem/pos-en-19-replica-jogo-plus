import Link from 'next/link'

const MenuNavbar = () => {
    return (
        <div>
            <nav className="uk-navbar-container">
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

            <style jsx global>{` 
                 .uk-navbar-container:not(.uk-navbar-transparent)
                    {
                        background-color:#000000 ;
                    }

                    .uk-navbar-nav>li>a{
                        color:#ffff;  
                    }

                `}
             </style>
        </div>
    )
}

export default MenuNavbar;