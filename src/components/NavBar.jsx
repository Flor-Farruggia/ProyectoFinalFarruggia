import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import logo from "../assets/images/logo-a.png";
import menu from "../assets/images/menu-mob.svg";
import close from "../assets/images/x.svg";
import { Offcanvas } from "bootstrap";

function Navbar() {

    const closeMenu = () => {
        const offcanvasElement = document.getElementById("offcanvasNavbar");

        if (offcanvasElement) {
            const instance = Offcanvas.getInstance(offcanvasElement);

            if (instance) {
                instance.hide();
            }
        }
    };
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-2 bg-danger-gradient" id="mainNav">
                <div className="container">

                    {/* Logo */}

                    <Link to="/" className="navbar-brand d-flex align-items-end me-0 me-lg-3">
                        <img src={logo} alt="Logo Te quiero mucho" className="logo-nav d-none d-md-block"/>

                        <p className="font-cinzel-deco text-medium regular text-white mb-0 ms-3">
                            Te quiero mucho,
                            <br />
                            poquito, nada...
                        </p>
                    </Link>

                    {/* Botón Mobile */}

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <img src={menu} alt="Menú" style={{ transform: "scale(0.7)" }} />
                    </button>

                    {/* Offcanvas */}

                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" tabIndex="-1" >
                        <div className="offcanvas-header justify-content-between bg-danger pt-3">

                            <Link to="/" className="text-decoration-none" data-bs-dismiss="offcanvas">
                                <img src={logo} alt="Logo" className="ms-3 logo-nav" />
                            </Link>

                            <button type="button" className="btn border-0 text-reset" data-bs-dismiss="offcanvas">
                                <img src={close} alt="Cerrar" style={{ transform: "scale(0.7)" }} />
                            </button>

                        </div>
                        <div className="offcanvas-body bg-nav" id="menuBotones">
                            <ul className="bg-white navbar-nav mx-auto rounded-3">
                                <li className="nav-item">
                                    <Link to="/category/personajes" className="nav-link text-start text-lg-center" onClick={closeMenu} >Personajes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/numeros" className="nav-link text-start text-lg-center" onClick={closeMenu}> Números </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/category/animales" className="nav-link text-start text-lg-center" onClick={closeMenu}>Animales</Link>
                                </li>
                                <span className="nav-hov d-none d-lg-block"></span>
                            </ul>

                            <div className="d-flex mt-3 mt-lg-0">
                                <div className="d-flex mt-3 mt-lg-0">
                                    <CartWidget />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;