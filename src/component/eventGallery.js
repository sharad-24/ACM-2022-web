import React, { useState } from "react";
import PropTypes from 'prop-types';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';

import '../css/prodigy.css';
import './component.css';
import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';
import github from '../assets/events/Copy of github_post-09.jpg';
import gualentier from '../assets/events/the_gauntlet_affair.png';
import dayofcode from '../assets/events/Copy of 21days_code_linn2.png';
import BGMI from '../assets/events/BGMI 1.png';
import COD from '../assets/events/cod.jpg';
import freelancing from '../assets/events/DIGITAL_CREATORS.jpg';
import becomeCEO from '../assets/events/life class.jpg';
import freeshman from '../assets/events/freshman orientation.png';
import vfx from '../assets/events/Photo from Aditya Pilani.jpg';
import technicalorientation from '../assets/events/technical orientaition/technical orientaition.jpg';
import technicalorientation1 from '../assets/events/technical orientaition/1.jpg';
import technicalorientation2 from '../assets/events/technical orientaition/2.jpg';
import technicalorientation3 from '../assets/events/technical orientaition/3.jpg';
import summerofcode from '../assets/events/sammer of code (1).jpg';
import hourglass from '../assets/events/hourglass.jpg';
import prepathon from '../assets/events/prep-a-thon.jpg';
import UGH from '../assets/events/UGH.jpeg';
import Prodigy2020 from '../assets/events/prodigiy_2020.jpeg';
import DSP from '../assets/events/DSP.jpeg';
import plateform9 from '../assets/events/platform9.jpeg';
import shayak from '../assets/events/sahyak.jpeg';
import prodigy2021 from '../assets/events/prodigy2021.jpeg';
import intel from '../assets/events/intel.jpeg';
import DSPSoftware from '../assets/events/DSPSoftware.jpeg';
import codeword from '../assets/events/codeword.jpeg';
import techcon1 from '../assets/events/techconML.jpeg';
import techcon2 from '../assets/events/techconGG.jpeg';
import techcon3 from '../assets/events/techconCS.jpeg';
import techcon4 from '../assets/events/techconCC.jpeg';




function EventGallery({ photo }) {

    const [isShownEG1, setIsShownEG1] = useState(false);
    const [isShownEG2, setIsShownEG2] = useState(false);
    const [isShownEG3, setIsShownEG3] = useState(false);
    const [isShownEG4, setIsShownEG4] = useState(false);
    const [isShownEG5, setIsShownEG5] = useState(false);
    const [isShownEG6, setIsShownEG6] = useState(false);
    const [isShownEG7, setIsShownEG7] = useState(false);
    const [isShownEG8, setIsShownEG8] = useState(false);
    const [isShownEG9, setIsShownEG9] = useState(false);
    const [isShownEG10, setIsShownEG10] = useState(false);
    const [isShownEG11, setIsShownEG11] = useState(false);
    const [isShownEG12, setIsShownEG12] = useState(false);
    const [isShownEG13, setIsShownEG13] = useState(false);
    const [isShownEG14, setIsShownEG14] = useState(false);
    const [isShownEG15, setIsShownEG15] = useState(false);
    const [isShownEG16, setIsShownEG16] = useState(false);
    const [isShownEG17, setIsShownEG17] = useState(false);
    const [isShownEG18, setIsShownEG18] = useState(false);
    const [isShownEG19, setIsShownEG19] = useState(false);
    const [isShownEG20, setIsShownEG20] = useState(false);
    const [isShownEG21, setIsShownEG21] = useState(false);
    const [isShownEG22, setIsShownEG22] = useState(false);
    const [isShownEG23, setIsShownEG23] = useState(false);
    const [isShownEG24, setIsShownEG24] = useState(false);
    const [isShownEG25, setIsShownEG25] = useState(false);
    const [isShownEG26, setIsShownEG26] = useState(false);

    const [slideOutEG, setSlideOutEG] = useState(true);
    const [isHiddenEG, setIsHiddenEG] = useState(true);
    const [twentyone, setTwentyone] = useState(true);
    const [twenty, setTwenty] = useState(true);
    const [nienteen, setNienteen] = useState(true);

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);


    const handleAll = () => {
        setActive(false);
        setActive1(true);
        setActive2(true);
        setActive3(true);
        setTwentyone(true);
        setTwenty(true);
        setNienteen(true);

    };
    const handleTwentyone = () => {
        setActive(true);
        setActive1(false);
        setActive2(true);
        setActive3(true);
        setTwentyone(true);
        setTwenty(false);
        setNienteen(false);

    };
    const handleTwenty = () => {
        setActive(true);
        setActive1(true);
        setActive2(false);
        setActive3(true);
        setTwentyone(false);
        setTwenty(true);
        setNienteen(false);

    };
    const handleNienteen = () => {
        setActive(true);
        setActive1(true);
        setActive2(true);
        setActive3(false);
        setTwentyone(false);
        setTwenty(false);
        setNienteen(true);

    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="pagination">
                            <button className={active ? "paginationButton" : "underline"} onClick={handleAll}>ALL</button>
                            <button className={active1 ? "paginationButton" : "underline"} onClick={handleTwentyone}>2021</button>
                            <button className={active2 ? "paginationButton" : "underline"} onClick={handleTwenty}>2020</button>
                            <button className={active3 ? "paginationButton" : "underline"} onClick={handleNienteen}>2019</button>

                        </div>
                    </div>
                </div>
            </div>

            {isHiddenEG && (
                <Animated animationIn={slideOutEG ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                    <div className="event_gallery container">
                        <div className="row">
                            {twentyone && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG1(true) + setIsHiddenEG(false)} src={DSPSoftware} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG2(true) + setIsHiddenEG(false)} src={github} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG3(true) + setIsHiddenEG(false)} src={gualentier} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG4(true) + setIsHiddenEG(false)} src={dayofcode} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG9(true) + setIsHiddenEG(false)} src={freeshman} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG12(true) + setIsHiddenEG(false)} src={prodigy2021} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG13(true) + setIsHiddenEG(false)} src={DSP} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG11(true) + setIsHiddenEG(false)} src={vfx} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG22(true) + setIsHiddenEG(false)} src={codeword} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG23(true) + setIsHiddenEG(false)} src={techcon1} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG24(true) + setIsHiddenEG(false)} src={techcon2} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG25(true) + setIsHiddenEG(false)} src={techcon3} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG26(true) + setIsHiddenEG(false)} src={techcon4} alt="logos" /> </center>
                                    </div>
                                </>
                            )}
                            {twenty && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG5(true) + setIsHiddenEG(false)} src={BGMI} alt="logos" /> </center>
                                    </div>

                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG7(true) + setIsHiddenEG(false)} src={freelancing} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG8(true) + setIsHiddenEG(false)} src={becomeCEO} alt="logos" /> </center>
                                    </div>

                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG10(true) + setIsHiddenEG(false)} src={plateform9} alt="logos" /> </center>
                                    </div>


                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG14(true) + setIsHiddenEG(false)} src={shayak} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG21(true) + setIsHiddenEG(false)} src={Prodigy2020} alt="logos" /> </center>
                                    </div>

                                </>
                            )}

                            {nienteen && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG15(true) + setIsHiddenEG(false)} src={prepathon} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG16(true) + setIsHiddenEG(false)} src={hourglass} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG17(true) + setIsHiddenEG(false)} src={technicalorientation} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG18(true) + setIsHiddenEG(false)} src={UGH} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG19(true) + setIsHiddenEG(false)} src={summerofcode} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG20(true) + setIsHiddenEG(false)} src={intel} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownEG6(true) + setIsHiddenEG(false)} src={COD} alt="logos" /> </center>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                </Animated>
            )}

            {isShownEG1 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG1(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={DSPSoftware} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">DSP: Software Engineering </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM Student Chapter organized a Distinguished Speaker Program - DSP. The topic selected for the program- “Software Engineering and Programming”, was of the essence as it accentuated the ever-evolving world of DevOps.
                                        Our honorable speaker for the program was Dr. Vishnu S Pendyala. Despite the pandemic being a hurdle, the session was conducted online seamlessly with enthusiasm, ardor, and vigor displayed by the students was overwhelming.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG2 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG2(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={github} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Git and Git-Hub in a Nutshell</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM & ACM-W Student Chapters organized a workshop on Git and GitHub entitled "Git & GitHub in a Nutshell" followed by “21 Days of Code”. It started with 60 participants and a welcome by our host Sharad Singhania, Technical Head of UPES ACM-W Student Chapter. The aim of this workshop was to allow students to learn about GitHub elements such as repositories, branches, commits, and pull requests, which will be useful in the future. Participants discussed their ideas on GitHub and clarified any confusion. The workshop helped participants learn methods and concepts they can use for all sorts of coding events.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG3 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG3(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={gualentier} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Gauntlet Affair</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        A debugging event was organized based on the theme of Avengers and Infinity Stones. The event attracted 55 participants who competed in an infinity war to determine the winner. Additionally, to spice up the test, two bonus questions that were released throughout the event were included in addition to the six debugging questions. Sometimes the event took an intriguing turn, such as when the Iron Man challenge and the Thanos challenge were played. After the competition, Sanidhya Jadaun emerged as the overall winner and Nishant Jha and Shrestha Jaiswal emerged as first and second runners-up, respectively.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG4 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG4(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={dayofcode} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">21 DOC</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        21 Days of Code initiative by UPES ACM and ACM-W Student Chapters aimed at promoting the concept of coding among our members. As a result of this event, students were encouraged to cultivate a habit of coding consistently. After their earlier session on GitHub, the students had the chance to put their knowledge into practice. This was a great chance for members to brush up on their coding skills. The event turned successful with active participation from 25 enthusiastic programmers.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG5 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG5(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={BGMI} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">PUBG Tournament</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM Student Chapter collaborated with Jazba: Helping hands, a non-profit organization, and hosted an Inter College Gaming Competition as an attempt to direct the joys of gaming towards feeding the unfortunate souls that live on the humbler sides of the town. The Intercollege PUBG Tournament was organized under Jazba’s campaign ”Gaming For Cause”. The event successfully provided food to more than 600 individuals by the participation fee along with all the profit earned. Having the contestants battle for points in the TPP mode of the universally celebrated mobile game PUBG (PlayerUnknown's Battlegrounds), the event was a smash-hit with more than 60 active participants.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG6 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG6(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={COD} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Call of Duty: Mobile </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        It is indeed a message that the unfortunate runners-up on the battlefield should remember because while phrases like "exhilarating, high octane, heart thumping, and a rush of blood to the head" may conjure up images of bungee jumping adrenaline junkies, they can only come close to describing the massive success that was the Call of Duty: Mobile tournament. The bar was set high, with all teams being equally intense in competitive spirit and mechanical prowess. Two Battle Royale matches were held, with the top two teams from each match advancing to the next round. The four teams then fought in a Multiplayer Random match in the second round, with the winners advancing to the finals. The Call of Duty: Mobile victor was the team that won a one-on-one multiplayer match between the two finalists and took home the spoils of war (and, of course, bragging rights).
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG7 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG7(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={freelancing} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Freelancing made Easy </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        We witnessed a packed house of more than 125 enthusiastic young minds that were inspired by making the most of university by ‘earning while they learn' and building their portfolio with work experience. They paid their undivided attention to industry experts from the popular ed-tech start-up ‘Courseveda'. With their insightful consultancy service, Courseveda is committed to providing every learner with a platform for excellence, and this spectacular occasion was concrete evidence of that mission. On the whole, ‘Freelancing made easy' was indeed the place to be for anyone who is driven and dedicated to achieving financial independence while honing their skills.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG8 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG8(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={becomeCEO} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Become the CEO of your Career </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM Student Chapter presented the ultimate career management and entrepreneurial development webinar – ‘Master class: Be the CEO of Your Career' – to the benefit of its participants. This webinar provided practical advice to more than 100 students and alumni on a variety of subjects, including long-term career management, maximizing professional progress and personal satisfaction, the art of networking and storytelling, and lastly, cultivating an entrepreneurial mentality. This webinar was thought-provoking, pragmatic, and engaging in terms of professional development. In the end, everyone in the room had been inspired and motivated to chase their ambitions. This was accentuated by a discussion with ‘Lifeclass.io' CEO and BITS/Cambridge/LBS alum Mr. Vishnu Chundi on post-COVID-19 recruitment tactics and proven interview techniques and methods.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG9 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG9(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={freeshman} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Freshman Induction </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Freshman Induction was a youtube-live event organized in collaboration with Coding Ninjas. The session was led by Mr. Ankush Singla where he educated students about Data structures and taught them various means and reasons to pursue competitive coding. He also gave information on cracking hiring contests and guided students to pave their way into product-based companies. He took the doubts of students through live chat and elaborately explained the queries. All in all, it was an interactive and informational session that witnessed active participation from more than 80 students who benefited from participating in it.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG10 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG10(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={plateform9} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Platform 9 3/4  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        A fun and interesting coding event was organized by UPES ACM Student Chapter for all the Potterheads. It was an individual participation event where seven questions based on seven Horcrux were designed for the students. The questions ranged from code snippets to debugging, with a code editor attached to each question and a riddle related to one of the Horcrux, that was displayed on every successful execution. The person who could solve all the questions in the least amount of time was the decided winner. The event engaged more than 80 students to participate in it with three winners at the end.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG11 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG11(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={vfx} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">VFX Workshop  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Since there is an increase in demand for visual effects artists, UPES ACM Student Chapter conducted a two-day-long VFX Workshop that aimed to provide basic knowledge about the various VFX elements present in Filmora video editing software and Adobe Premiere Pro. Once the mentors finished explaining the numerous features in both the software, participants were given a chance to showcase their hidden artists. By incorporating all the knowledge gained in the session, participants brought their imagination into reality by creating a video on one of the given three themes. The three themes were - school/college life experience, life during the pandemic, and welcoming freshers. The workshop ended smoothly as it encountered active participation from approximately 100 young minds.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG12 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG12(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={prodigy2021} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Prodigy 2021 </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM Student Chapter conducted its annual technical fest, Prodigy, one of the most anticipated fests of the year, through which we aim to bring together the kind of people who wish to learn, question reality, and whose imagination knows no bounds. When you project yourself into the future and envision all of your goals, it can help you gain perspective on your present, where you are, and what you are doing now. Keeping the same in mind, this year’s theme was decided as “Back To The Future”. The fest turned out to be a colossal success, with massive participation from over 1000 students in over nine extraordinary events spanning from a CTF “Hack To The Future” to an online treasure hunt, “Treasure Trove”.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG13 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG13(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={DSP} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">DSP: Blockchain  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        This year, Dr. Ashish Seth, professor at the School of Global Convergence Studies, delivered an enthralling session on the topic, “Blockchain Technology: Business Foundation”. The workshop mainly focused on providing a key concept on blockchain technology and its architecture. In this 2 hours long session, topics ranged from the concept of a centralized, distributed, and decentralized approach to the role of technology in times of pandemic. The minor details of all the matters were also covered, making it easy for beginners to understand the concepts. The workshop witnessed more than 180 students, eager to learn.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG14 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG14(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={shayak} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Sahayak </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM and ACM-W Student Chapters organized Sahayak Virtual Hackathon 1.0, India’s first-ever, state-of-the-art Hackathon directed at aiding “Divyangjan” especially those at risk due to the occurrence, the economic, and health impacts, caused by the Covid-19 pandemic. The hackathon brought together groundbreaking ideas using the latest technology to provide solutions, prototypes, and develop applications that will have a positive impact. The event was graced by the presence of industry experts and specialists from 10 companies, honorable patrons, devoted sponsors, reputable collaborators, and knowledge partners such as IBM, United Nations Technology Innovations Labs (UNTIL), Indian Sign Language Research and Training Center (ISLRTC).  We witnessed massive participation from more than 800 participants ranging from students to researchers from all over the globe.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG15 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG15(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={prepathon} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Technova: Prep-a-thon  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Prep-a-thon was an event that emulated the pressure of a real hackathon and aimed to provide a perfect platform to sharpen coding and presentation skills under the guidance of a mentor cum participant. The event spanned over a week such that 10 hours of coding session with elimination rounds and final presentation to the judges were held on the last day. About 12 zealous teams participated. A great coding zeal was witnessed among the participants, making the event a great success.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG16 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG16(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={hourglass} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Technova: Hourglass </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        As a part of TechNova 2019, UPES ACM Student Chapter conducted an offline cum online technical event, Hourglass. Debugging skills in the first round and coding skills of the top 10 participants in the second round were put to test in this event. Bhuvan Chandra triumphed over others and proved his coding and debugging skills. The event turned out to be a great success as all 11 participants unleashed the coder inside them.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG17 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG17(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={technicalorientation} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Technova: Technical Orientation </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        What would be a better head start to a prospective successful future than a technical orientation by none other than your seniors? Marking the beginning of TechNova, it was a day filled with inspiring talks, tips, and tricks. The discussion included an introduction to the development, competitive programming, research and design, and most importantly, the potential of a computer science student. This event turned out to be a great success, and we received positive responses from all the participants.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{ width: '100%', height: '60vh', marginBottom: '5%' }} src={technicalorientation1} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{ width: '100%', height: '60vh', marginBottom: '5%' }} src={technicalorientation2} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{ width: '100%', height: '60vh', marginBottom: '5%' }} src={technicalorientation3} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG18 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG18(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={UGH} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">UGH Workshop </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        The journey to create your first augmented reality object is full of thrill. This is the journey that Shourya Srivastava, an Alumni of UPES, took all the 82 participants on. Shourya Srivastava is the founder of Unicorn Gaming Hub, a gaming solution startup. UGH Workshop aimed to give the students an introduction to augmented reality. Team UGH made sure that everyone was able to finish their projects and even went on to offer an internship to one outstanding performer, making this workshop a humungous success, which will remain etched in the memories of all the participants.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG19 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG19(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={summerofcode} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Summer Code Rush </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Following the ICPC style (algorithmic problems in order of increasing difficulty), UPES ACM Student Chapter organized Summer Code Rush. It was an adaptation of CodeChef’s Cook-Off contest and was hosted on the Hackerrank website. 30 participants competed to prove their coding skills and, finally, after 3 hours of coding rush, Pushkar Jain flared at the top. This event was a great success as proven by the coding zeal of all the participants.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG20 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG20(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={intel} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Intel: Mining Unstructured Texts using AI </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        With AI becoming the new mainstream, Mr. Brijraj Singh gave a lecture on the topic, “Mining unstructured text using AI”, in the Intel Workshop. Using a suitable dataset, he explained how topic modeling covers the main context of the data and how sentiment covers the hidden meaning of the document. He explained such a difficult topic in a very easy-to-understand manner, making it comprehensible even for the beginners. The 100 participants were very pleased and gave a lot of positive feedback.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG21 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG21(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={Prodigy2020} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Prodigy’ 20 </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Prodigy is one of the most awaited technical fests of the year. It aims at bringing together the people who wish to learn, question the current reality, and whose imagination knows no bounds.
                                        2020’s theme was ‘Decade Change’. It was special in two ways – Marking the beginning of a new decade and signifying the 10-year anniversary of UPES ACM Student Chapter. The aim of the theme was to recognize and appreciate the changes in technology that shaped the past decade and also the advancement that we witnessed in the field of Computer Science.
                                        The events ranged from technical events like hackquest to gaming events like Dominion-PUBG. This two-day fest was successful enough to attract more than 550 registrations from the college.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG22 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG22(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={codeword} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Code Word </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        On the fourth of December, 2021 UPES ACM and ACM-W conducted a fun and intellectual competition. It was a game of crossword puzzles but there was a catch to it, the clues had to be dug out by debugging C or C++ codes. After two hours of intense brainstorming and head-scratching, three winners emerged from the forty participants. All in all, the event turned successful and gave the students a wonderful experience of coding and debugging with a tint of crossword puzzles.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG23 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG23(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={techcon1} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">ML and Data Science </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Most of the knowledge in the world in the future is going to be extracted by machines and will reside in machines.”
                                        These words are more true now than they have ever been before. We’re entering a new world where data might very well be more important than software. The goal behind having Machine Learning and Data Science as a domain for TechCon 2021 was to impart knowledge about this field at the earliest.
                                        The webinar was hosted by Mr. Logan Kilpatrick, Applied ML Engineer at Apple and a member of the NumFOCUS Board of Directors whose fervid passion for enhancing people’s lives was evident in the way he helped more than 100 eager participants in understanding the world of Machine Learning and Data Science.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG24 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG24(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={techcon2} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Graphics and Gaming </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Our world revolves around aesthetics and experiences; appearances have an indispensable role in determining our affinity towards certain things now more than ever, hence the seemingly large influx of people getting into designing in recent times.
                                        TechCon 2021 featured Graphics and Gaming as a domain where Mr. Vaibhav Chavan, founder & CEO of underDOGS Gaming Pvt Ltd, enlightened the attendees about the electrifying and animate world of graphics and gaming.
                                        With over 90 lively participants, this webinar offered all the particulars one would require for getting into the Graphics and Gaming world.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG25 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG25(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={techcon3} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">CyberSecurity </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Security is more than just a choice; it is a lifestyle. With human error being the culprit behind more than 95% of cybersecurity breaches, it is imperative to adopt stricter policies for protecting our resources.
                                        The Cybersecurity domain of Techcon 2021 enlightened enthusiasts about the world of Cybersecurity and how to go about it, should they choose to pursue this field.
                                        Mr. Pete Zerger, a 16-time Microsoft Most Valuable Professionals (MVP), CISSP, vCISO Certified Cybersecurity Strategist headed the webinar. He condensed his genius and acumen in the domain of security, architecture, DevOps, and process automation in practical pieces of advice that helped more than 80 eager participants in understanding the world of Cybersecurity.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}


            {isShownEG26 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG26(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={techcon4} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Cloud Computing </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        With more than 4 billion users across the globe, Cloud Computing has had its coming of age and will be here for keeps as the cornerstone of IT businesses. So having Cloud Computing as one of the domains for the TechCon 2021 was a natural choice.
                                        The webinar was conducted by Mr. Vivek Sethia, an active practitioner of DevOps, AWS, IaC- Terragrunt, Terraform, Kubernetes, Docker, Backend (Nodejs/Python) whose experience spoke for itself; telling us more about the cloud than any search engine could ever do.
                                        This session was the one-stop guide to everything related to Cloud Computing and witnessed the active participation of more than 80 ardent attendees.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            {/* <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={} alt="pic" /></div>
                                </div>
                            </div> */}
                        </div>
                    </Animated>
                </div>
            )}




        </div>
    );
}

EventGallery.propTypes = {
    photo: PropTypes.string
}

export default EventGallery;