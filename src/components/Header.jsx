import React from "react";

function Header() {
    return (
        <header className="header-set bg-white-soft pb-0">
            <div className="container">
                <div className="row align-content-center align-items-center justify-content-around h-100 mt-5">
                    <div className="col-12 col-md-10 col-xl-8">
                        <div className="card bg-primary-gradient border border-3 border-warning rounded-5">
                            <div className="card-body">
                                <div className="card-title bg-transparent border-0 pt-4 mt-3">
                                    <p className="text-xxl bold font-cinzel text-white text-center mb-3">
                                        Bienvenido a:
                                    </p>
                                </div>
                                <h1 className="card-text font-cinzel-deco text-xxl regular text-center text-white">
                                    Te quiero mucho,
                                    <br />
                                    poquito,
                                    <br />
                                    nada...
                                </h1>
                            </div>
                            <div className="card-footer border-0 bg-transparent">
                                <div className="field mx-auto mb-3">
                                    <div className="mouse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="separator__svg" width="100%" height="180" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,65 C20,85 35,90 55,70 C75,50 90,55 100,75 L100,100 L0,100 Z"fill="#dca75ccc"/>
                <path d="M0,78 C25,95 45,80 65,65 C80,53 92,60 100,68 L100,100 L0,100 Z" fill="#efc080cc"/>
            </svg>
        </header>
    );
}

export default Header;