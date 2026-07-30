import logo from "../assets/images/logo-a.png";

import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="py-3 bg-secondary">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        {/* Logo */}
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center justify-content-start mb-4 mb-md-0">
                                <img src={logo} alt="Logo Te quiero mucho" style={{ maxHeight: "133px" }}/>
                                <p className="font-cinzel-deco text-medium regular text-white mb-0 ms-3 ms-lg-5">
                                    Te quiero mucho,
                                    <br />
                                    poquito, nada...
                                </p>
                            </div>
                        </div>
                        {/* Redes */}
                        <div className="col-12 col-md-4 col-lg-3">
                            <h4 className="text-white bold text-start mb-3">
                                Seguinos en nuestras redes
                            </h4>
                            <div className="d-flex">
                                <a href="https://www.facebook.com/" target="_blank"  rel="noreferrer" className="cont-redes me-3" >
                                    <FaFacebookF className="icon-redes" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="cont-redes me-3">
                                    <FaInstagram className="icon-redes" />
                                </a>
                                <a href="https://maps.google.com/" target="_blank" rel="noreferrer" className="cont-redes">
                                    <FaMapMarkerAlt className="icon-redes" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-primary py-2">
                <p className="text-white text-center bold my-2">
                    © Farruggia Project
                </p>
            </div>
        </>
    );
}

export default Footer;