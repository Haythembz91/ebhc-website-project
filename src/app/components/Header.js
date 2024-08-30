

const Header = ()=>{

    return(
        <header className={"container-xxl navbar bg-warning bg-opacity-25"}>
            <div>
                Logo
            </div>
            <nav className={"navbar"}>
                <ul className={"navbar-nav flex-row list-unstyled"}>
                    <li>Accueil</li>
                    <li>A propos</li>
                    <li>Nos services</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header