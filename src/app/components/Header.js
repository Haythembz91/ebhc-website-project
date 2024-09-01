'use client'
import {useEffect} from "react";
import logo from '../../../public/assets/logo_ebhc.png'
const Header = ()=>{

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return(
        <header className={"container-fluid bg-warning bg-opacity-25 sticky-top"}>
            <nav className={"navbar navbar-expand-md justify-content-between"}>
                <div className={"navbar-brand col-1"}>
                    <img src={logo.src} className={"img-fluid"} alt={'logo ebhc'}/>
                </div>
                <div className={"d-flex flex-column"}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className={"navbar-nav collapse navbar-collapse"} id={"navbarSupportedContent"}>
                        <li className={'list-item px-2'}>
                            <a className={"nav-link py-2 px-0"}>HOME</a>
                        </li>
                        <li className={'list-item px-2'}>
                            <a className={"nav-link py-2 px-0"}>ABOUT</a>
                        </li>
                        <li className={'list-item px-2'}>
                            <a className={"nav-link py-2 px-0"}>SERVICES</a>
                        </li>
                        <li className={'list-item px-2'}>
                            <a className={"nav-link py-2 px-0"}>PROJECTS</a>
                        </li>
                        <li className={'list-item px-2'}>
                            <a className={"nav-link py-2 px-0"}>CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header