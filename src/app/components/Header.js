'use client'
import {useEffect} from "react";
import logo from '../../../public/assets/logo_ebhc.png'
import Link from "next/link";
const Header = ()=>{

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return(
        <header className={"container-fluid bg-warning bg-opacity-25 sticky-top"}>
            <nav className={"navbar navbar-expand-md justify-content-between"}>
                <Link href={"/"} className={"navbar-brand col-1"}>
                    <img src={logo.src} className={"img-fluid"} alt={'logo ebhc'}/>
                </Link>
                <div className={"d-flex flex-column"}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className={"navbar-nav collapse navbar-collapse"} id={"navbarSupportedContent"}>
                        <li className={'list-item px-2'}>
                            <Link href={"/"} className={"nav-link py-2 px-0"}>ACCUEIL</Link>
                        </li>
                        <li className={'list-item px-2'}>
                            <Link href={"/about"} className={"nav-link py-2 px-0"}>PRÉSENTATION</Link>
                        </li>
                        <li className={'list-item px-2'}>
                            <Link href={"/services"} className={"nav-link py-2 px-0"}>SERVICES</Link>
                        </li>
                        <li className={'list-item px-2'}>
                            <Link href={"/projects"} className={"nav-link py-2 px-0"}>NOS PROJETS</Link>
                        </li>
                        <li className={'list-item px-2'}>
                            <Link href={"/contact"} className={"nav-link py-2 px-0"}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header