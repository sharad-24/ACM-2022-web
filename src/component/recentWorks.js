import React, { useState } from "react";
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import crossicon from '../assets/image/icons8-close-24.png';
import shayak from '../assets/events/sahyak.jpeg';
import prodigy21 from '../assets/events/prodigy2021.jpeg';
import DSPMain from '../assets/events/DSPMAin.jpeg';
import HOCMain from '../assets/events/HOCMain.jpeg';


function RecentWork() {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [slideOut, setSlideOut] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            {isHidden && (
                <Animated animationIn={slideOut ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-xs-0"></div>
                            <div className="col-md-4 col-xs-12 paddingRW">
                                <div className="col1">
                                    <img style={{ cursor: 'pointer' }} onClick={() => setIsShown1(true) + setIsHidden(false)}
                                        className="imgRW"
                                        src={shayak} alt="Acm" />
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 paddingRW">
                                <div className="col2">
                                    <img style={{ cursor: 'pointer' }} onClick={() => setIsShown2(true) + setIsHidden(false)}
                                        className="imgRW"
                                        src={prodigy21} alt="Acm" />
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-0"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-xs-0"></div>
                            <div className="col-md-4 col-xs-12 paddingRW" >
                                <div className="col3">
                                    <img style={{ cursor: 'pointer' }} onClick={() => setIsShown3(true) + setIsHidden(false)}
                                        className="imgRW"
                                        src={DSPMain} alt="Acm" />
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 paddingRW">
                                <div className="col4">
                                    <img style={{ cursor: 'pointer' }} onClick={() => setIsShown4(true) + setIsHidden(false)}
                                        className="imgRW"
                                        src={HOCMain} alt="Acm" />
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-0"></div>
                        </div>
                        <Link to="event"><button className="button"><b>View More</b></button><br /><br /></Link>
                    </div>
                </Animated>
            )}

            {isShown1 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="container">
                            <div className="row">
                                <div onClick={() => setIsShown1(false) + setIsHidden(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                                    <img src={crossicon} alt="cross" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-10" style={{ marginBottom: '50px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6" style={{ marginRight: '-30px' }}>
                                                <div className="container-1">
                                                    <div className="aEborder">
                                                        <h3 className="h3"><b>Sahayak</b></h3>
                                                        <p style={{ fontSize: '12px' }}>We organized Sahayak Virtual Hackathon 1.0, India’s first-ever, state-of-the-art Hackathon directed at aiding “Divyangjan” especially those at risk due to the occurrence, the economic, and health impacts, caused by the Covid-19 pandemic. We witnessed many applications from 208 teams in 60 cities in India and abroad that included not only students but also academicians, research scholars, and innovators. Together, they heaved this Hackathon to where we once envisioned it to be.</p>
                                                        <Link to="event"><button className="knowmore">Know More</button></Link>
                                                    </div>
                                                </div>
                                                <div className="container-2 bgImageContainer-2">
                                                    <div class="col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-3 bgImageContainer-3">
                                                    <div class="col-md-6">
                                                    </div>
                                                </div>
                                                <div className="container-4 bgImageContainer-4">
                                                    <div className="col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}
            {isShown2 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="container">
                            <div className="row">
                                <div onClick={() => setIsShown2(false) + setIsHidden(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                                    <img src={crossicon} alt="cross" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-10" style={{ marginBottom: '50px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6" style={{ marginRight: '-30px' }}>
                                                <div className="container-3 bgfor21container-3">
                                                </div>
                                                <div className="container-4 bgfor21container-4">
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-1">
                                                    <div className="aEborder">
                                                        <h3 className="h3"><b>Prodigy ‘21</b></h3>
                                                        <p style={{ fontSize: '12px' }}>UPES ACM Student Chapter conducted its annual technical fest, Prodigy, which is considered to be one of the most anticipated fests of the year. This year’s theme was decided as “Back To The Future”. The fest turned out to be a colossal success, with massive participation in over nine extraordinary events spanning from a CTF “Hack To The Future” to an online treasure hunt, “Treasure Trove”. Additionally, programs such as the Distinguished Speaker Program (DSP) and “Stepping into CyberSpace” were also conducted to enlighten students about BlockChain Technology and Security respectively. </p>
                                                        <Link to="event"><button className="knowmore">Know More</button></Link>
                                                    </div>
                                                </div>
                                                <div className="containerProdigy-2 bgfor21container-2">
                                                    <div className="col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}
            {isShown3 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="container">
                            <div className="row">
                                <div onClick={() => setIsShown3(false) + setIsHidden(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                                    <img src={crossicon} alt="cross" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-10" style={{ marginBottom: '50px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6" style={{ marginRight: '-30px' }}>
                                                <div className="container-2 bgforDSPcontainer-2">
                                                </div>
                                                <div className="container-1">
                                                    <div className="aEborder">
                                                        <h3 className="h3"><b>DSP (Distinguished Speaker Program)</b></h3>
                                                        <p style={{ fontSize: '12px' }}>UPES ACM Student Chapter organized a Distinguished Speaker Program - DSP. The topic selected for the program- “Software Engineering and Programming”, was of the essence as it accentuated the ever-evolving world of DevOps.
                                                            Our honorable speaker for the program was Dr. Vishnu S Pendyala. Despite the pandemic being a hurdle, the session was conducted online seamlessly with enthusiasm, ardor, and vigor displayed by the students was overwhelming.</p>
                                                        <Link to="event"><button className="knowmore">Know More</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-4 bgforDSPcontainer-4">
                                                    <div class="col-md-6">
                                                    </div>
                                                </div>
                                                <div className="containerDSP-3 bgforDSPcontainer-3">
                                                    <div className="col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}
            {isShown4 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="container">
                            <div className="row">
                                <div onClick={() => setIsShown4(false) + setIsHidden(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                                    <img src={crossicon} alt="cross" />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-10" style={{ marginBottom: '50px' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6" style={{ marginRight: '-30px' }}>
                                                <div className="container-4 bgforHOCcontainer-4">
                                                </div>
                                                <div className="containerHOC-3 bgforHOCcontainer-3">
                                                    <div class="col-md-6">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-2 bgforHOCcontainer-2">
                                                    <div class="col-md-6">
                                                    </div>
                                                </div>
                                                <div className="container-1">
                                                    <div className="aEborder">
                                                        <h3 className="h3"><b>Hour of Code</b></h3>
                                                        <p style={{ fontSize: '12px' }}>The CSR committee at UPES ACM Student Chapter organized the “HOUR OF CODE”. This annual event of CSR was conducted as a part of the ‘Computer Science Week’ where students of 9th and 10th grades of Government Girls Senior Secondary School and Sharda Sen Rajkiya Kanya Vidyalaya, Trilokpuri, were enlightened with the principles of programming languages. The session was an accomplishment as confirmed by the positive feedback of the students and the presenters who participated with such zeal and enthusiasm.</p>
                                                        <Link to="event"><button className="knowmore">Know More</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}
        </div>
    );
}
export default RecentWork;