import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";

import logo from '../assets/image/logo (1).png';
import triggerButton from '../assets/image/trigger.png';

function Topbar() {

    const [openNav, setOpenNav] = useState(false);
    const [hideIcon, setHideIcon] = useState(true);
    const handleNavOpen = () => {
        setOpenNav(true);
        setHideIcon(false);
    };
    const handleNavClose = () => {
        setOpenNav(false);
        setHideIcon(true);
    };


    return (
        <div className="">
            <div className="container-fluid" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                <div className="row">
                    <div className="col-xs-12">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <a href="/" style={{backgroundColor: 'transparent', border: 'none'}}><img style={{height: '20vh', paddingTop: '5%'}} src={logo} className="" href="#" alt="logo" /></a>
                            </div>
                            <div>
                                {hideIcon && (
                                    <div className="toggerParent">
                                        <img src={triggerButton} style={{height: '5vh', marginTop: '-2vh'}} 
                                            className="toggler" type="button" href="#" alt="logo"
                                            onClick={handleNavOpen} />
                                    </div>
                                )}
                                {openNav && (
                                    <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                                        <div className="">
                                            <div className="offcanvas-body">
                                                <div className="cross">
                                                    <button onClick={handleNavClose} type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas"
                                                        aria-label="Close"></button>
                                                </div>
                                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="/event">EVENTS</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a">PRODIGY</a>
                                                        <div className="prodigyYears">
                                                        <a className="nav-link a" href="/prodigy2022">2022</a>
                                                        </div>
                                                        <div className="prodigyYears">
                                                        <a className="nav-link a" href="/prodigy2021">2021</a>
                                                        <a className="nav-link a" href="/prodigy2020">2020</a>
                                                        <a className="nav-link a" href="/prodigy2019">2019</a>
                                                        </div>
                                                        
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="/csr">CSR</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="/team">OUR TEAM</a>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <a className="nav-link a" href="/sponsor">SPONSORS</a>
                                                    </li> */}
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="http://blogflix.upesacm.org/">BLOGFLIX</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="http://upesacmwomen.org/">UPES ACM-W</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="/contact">CONTACT US</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link a" href="https://acm-register.herokuapp.com/">REGISTER NOW</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Animated>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Topbar;