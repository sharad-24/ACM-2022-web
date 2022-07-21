import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../assets/image/logo (1).png';
import fb from '../assets/image/fb.png';
import insta from '../assets/image/ig.png';
import linkin from '../assets/image/linkedin.png';

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
            <hr />
                <div className="row">
                    <div className="col-md-2">
                        <img style={{height: '20vh'}} src={logo} alt="logo" />
                    </div>
                    <div className="col-md-4">
                        <div className="xyz">
                            <u>Visit Us</u>
                            <div className="address">
                                <div>UPES Energy Acres</div>
                                <div>Bidholi,</div>
                                <div>Dehradun-248007, Uttarakhand, India</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="xyz">
                            <u>Links to Visit</u>
                            <div><a style={{ color: 'white', textDecoration: 'none' }} href="https://www.acm.org/">ACM India</a></div>
                            <div><a style={{ color: 'white', textDecoration: 'none' }} href="https://amturing.acm.org/award_winners/reddy_9634208.cfm">ACM Turing Awards</a></div>
                            <div><a style={{ color: 'white', textDecoration: 'none' }} href="http://upesacmwomen.org/">UPES ACM-W</a></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br />
                        <div className="address">
                            <div className="forDesktopViewFooter">
                            <ul className="ul" type="none">
                                <li><a href="https://www.instagram.com/upesacm/?hl=en">
                                    <img style={{height: '5vh'}} src={insta} alt="instagram" /></a></li>
                                <br /> 
                                <li><a href="https://www.facebook.com/upesacm/">
                                    <img style={{height: '5vh'}} src={fb} alt="facebook" /></a></li>
                                <br />
                                <li><a href="https://www.linkedin.com/company/upesacm/mycompany/?viewAsMember=true">
                                    <img style={{height: '5vh'}} src={linkin} alt="linkedin" /></a></li>
                            </ul>
                            </div>

                            <div className="forMobileViewFooter forMobileViewFooter2 ">
                           
                                <a href="https://www.instagram.com/upesacm/?hl=en">
                                    <img src={insta} alt="instagram" /></a>
                               
                                <a href="https://www.facebook.com/upesacm/">
                                    <img src={fb} alt="facebook" /></a>
                               
                               <a href="https://www.linkedin.com/company/upesacm/mycompany/?viewAsMember=true">
                                    <img src={linkin} alt="linkedin" /></a>
                          
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.710862751278!2d77.96464421507844!3d30.415944281748644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES%20-%20University%20of%20Petroleum%20and%20Energy%20Studies!5e0!3m2!1sen!2sin!4v1629495834754!5m2!1sen!2sin"
                            title="cjj" style={{ border: '0', width: '100%', height: 'auto' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <br />
                <div className="row">
                <hr />
            </div>
            </div>
            <center className="handw">Copyright &copy; copy 2021 All rights reserved | Designed and Developed by UPES ACM Web Development Team</center>
        </div>

    );
}
export default Footer;