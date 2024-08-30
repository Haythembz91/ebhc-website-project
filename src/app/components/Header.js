

const Header = ()=>{

    return(
        <header className={"container-xxl navbar bg-warning bg-opacity-25"}>
            <div>
                Logo
            </div>
            <nav className={"navbar"}>
                <ul className={"navbar-nav flex-row list-unstyled"}>
                    <li className={'list-item'}>Accueil</li>
                    <li className={'list-item'}>A propos</li>
                    <li className={'list-item'}>Nos services</li>
                    <li className={'list-item'}>Gallery</li>
                    <li className={'list-item'}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header