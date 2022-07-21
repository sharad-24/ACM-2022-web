import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import ballons from '../assets/image/ballons.png';
import achivementIcon from '../assets/image/27-277035_small-gold-leaves-logo-png-transparent-png.png';
import achivement4 from '../assets/image/achivement2.png';
import achivement2 from '../assets/image/achivement3.png';
import achivement3 from '../assets/image/achivement4.png';
import award from '../assets/image/award.svg';
import team from '../assets/image/team.svg';
import tea from '../assets/image/tea.svg';
import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';

function BringChangeHeading() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [isShown11, setIsShown11] = useState(false);
    const [isShown22, setIsShown22] = useState(false);
    const [isShown33, setIsShown33] = useState(false);
    const [isShown44, setIsShown44] = useState(false);
    const [slideOut2, setSlideOut2] = useState(true);
    const [isHidden2, setisHidden2] = useState(true);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-0"></div>
                    <div className="col-md-8 col-xs-12">
                        <br /><br />
                        <div data-aos="zoom-in">
                            <h className="bringChangeHeading">BRINGING THE CHANGE</h> <br />
                        </div>
                        <div>
                            <p className="btcP font">UPES ACM Student Chapter has been the premier organization in making computing a medium to solve tomorrow’s problems -- integrating knowledge and skills to program solutions. </p>
                            <p className="btcP font">This fact can further be affirmed with the Student Chapter hosting a myriad of programming events and workshops throughout the years to foster the zeal for programming. Some of these events include:</p>
                        </div><br />
                    </div>
                    <div className="col-md-2 col-xs-0"></div>

                </div>
                {isHidden2 && (
                    <Animated animationIn={slideOut2 ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="row mt-8" data-aos="slide-up">
                            <div className="col-md-3 paddingRW">
                                <div className="cardbr" style={{ cursor: 'pointer' }} onClick={() => setIsShown11(true) + setisHidden2(false)}>
                                    <div className="card-outer">
                                        <div className="card-body">
                                            <div className="BtcCircle"></div>
                                            <div className="card-title">CODE ANYTIME</div>
                                            <p className="btcP card-text" style={{ textAlign: 'left' }}>
                                                This is a round-the-year initiative to promote a niche of coding enthusiasts into an environment full of seasoned programmers.
                                            </p>
                                            <div className="btcButtonContainer">
                                            <button type="button" className="btcButton">Let's get started</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 paddingRW">
                                <div className="cardbr" style={{ cursor: 'pointer' }} onClick={() => setIsShown22(true) + setisHidden2(false)}>
                                    <div className="card-body">
                                        <div className="BtcCircle"></div>
                                        <div className="card-title">SPY-C</div>
                                        <p className="btcP card-text" style={{ textAlign: 'left' }}>
                                            This is a year-round scheme of progressive lectures and discussions on C Programming Language that provides beginners with an entryway to get into programming and head-start their hustle.
                                        </p>
                                        <div className="btcButtonContainer">
                                            <button type="button" className="btcButton">Let's get started</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="cardbr paddingRW" style={{ cursor: 'pointer' }} onClick={() => setIsShown33(true) + setisHidden2(false)}>
                                    <div className="card-body">
                                        <div className="BtcCircle"></div>
                                        <div className="card-title">21 Days of Code</div>
                                        <p className="btcP card-text" style={{ textAlign: 'left' }}>
                                            This initiative aims at getting the neoteric generation of students onto the real-world programming bandwagon by having them code for 21 days straight and boost their logical acumen.
                                        </p>
                                        <div className="btcButtonContainer">
                                            <button type="button" className="btcButton">Let's get started</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="cardbr paddingRW" style={{ cursor: 'pointer' }} onClick={() => setIsShown44(true) + setisHidden2(false)}>
                                    <div className="card-body">
                                        <div className="BtcCircle"></div>
                                        <div className="card-title">CodeOps</div>
                                        <p className="btcP card-text" style={{ textAlign: 'left' }}>
                                            This event was initiated by the UPES-ACM Student Chapter to nurture and promote the coding spirit amongst young enthusiasts.
                                        </p>
                                        <div className="btcButtonContainer">
                                            <button type="button" className="btcButton">Let's get started</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                )}
                {isShown11 && (
                    <section>
                        <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                            <div className="container">
                                <div className="row">
                                    <div onClick={() => setIsShown11(false) + setisHidden2(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', paddingBottom: '2%' }}>
                                        <img src={crossicon} alt="cross" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="oc forBringthechangeMobile">
                                            <div className="cardbr" style={{ padding: '6px' }}>
                                                <div className="rightcard">
                                                    <h><br />Code Anytime aims at encouraging free-spirited coding among beginners in an attempt to amplify their passion for programming and spread the notion of coding anywhere and anytime, slowly but surely. <br /><br /> A pool of ardent students regularly engages in this endeavor to learnt new concepts, clear their doubts and compete along the way.</h>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic1codeanytime forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic2codeanytime forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic3codeanytime forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic4codeanytime forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </section>
                )}
                {isShown22 && (
                    <section>
                        <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                            <div className="container">
                                <div className="row">
                                    <div onClick={() => setIsShown22(false) + setisHidden2(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', paddingBottom: '2%' }}>
                                        <img src={crossicon} alt="cross" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="oc forBringthechangeMobile">
                                            <div className="cardbr" style={{ padding: '6px' }}>
                                                <div className="rightcard">
                                                    <h> <br /> SPY-C is a initiative to build the core foundation of programming and aid students to overcome their dread of programming. <br /> <br />The members eagerly involve in adding C language into their arsenal under their upperclassmen. <br /> <br /> The endeavor aims at giving new developers hands-on experience inside the programming realm. </h>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic1spyc forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic2spyc forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic3spyc forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic4spyc forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </section>
                )}
                {isShown33 && (
                    <section>
                        <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                            <div className="container">
                                <div className="row">
                                    <div onClick={() => setIsShown33(false) + setisHidden2(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', paddingBottom: '2%' }}>
                                        <img src={crossicon} alt="cross" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="oc forBringthechangeMobile">
                                            <div className="cardbr" style={{ padding: '6px' }}>
                                                <div className="rightcard">
                                                    <h><br />21 Days of Code was launched to promote the environment for competitive programming, to instill coding as second nature; and a diurnal habit. <br /> <br /> This ACM member-exclusive event vitnesses the fervent participation of active enthusiasts who regularly solve problems and discover algorithms in their preferred programming language.<br /><br /> The initiative is carried out over Github to give an introduction of the same to students.</h>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic1dayofcode forBringthechangeMobile">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic2dayofcode forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic3dayofcode forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic4dayofcode forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </section>
                )}
                {isShown44 && (
                    <section>
                        <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                            <div className="container">
                                <div className="row">
                                    <div onClick={() => setIsShown44(false) + setisHidden2(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', paddingBottom: '2%' }}>
                                        <img src={crossicon} alt="cross" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="oc forBringthechangeMobile">
                                            <div className="cardbr" style={{ padding: '6px' }}>
                                                <div className="rightcard">
                                                    <h><br />CodeOps is a byweekly event aimed at setting up a programming milieu.<br /> <br /> The ACM member-exclusive event is hosted on Discord every Wednesday and Saturday for two hours involving the participants in learning fundamental programming concepts and subsequently implementing them in solving proposed problems.</h>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic1codeops forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic2codeops forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-5">
                                                <div className="cardbr">
                                                    <div className="lic lic3codeops forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="cardbr">
                                                    <div className="lic lic4codeops forBringthechangeMobile"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </section>
                )}

            </div>
            <div className="container" style={{ marginTop: '10%', marginBottom: '8%' }}>
                <div className="CupBg" data-aos="slide-up">
                    <div className="row">
                        <div className="col" data-aos="slide-right">
                            <center> <img src={achivementIcon} alt="" /></center>
                        </div>
                        <div class="col" data-aos="slide-left">
                            <center><img src={achivement2} alt="" /></center>
                        </div>
                    </div>
                    <br />
                    <div className="text">
                        <center><h className="achievementHeading">OUR ACHIEVEMENTS</h></center>
                    </div>
                    <center>
                        <div className="text-center" style={{ width: '49vw' }}>
                            <div className="">
                                <p className="card-text-achievement">UPES ACM is the first international Student Chapter in the Computer
                                    Science Department to be introduced in the University. UPES ACM also
                                    started a very successful initiative for women in computing, i.e. UPES ACM-W</p>
                            </div>
                        </div>
                    </center>
                    <br />
                    <div className="row">
                        <div className="col" data-aos="slide-right">
                            <center> <img src={achivement3} alt="" /></center>
                        </div>
                        <div className="col" data-aos="slide-left">
                            <center><img src={achivement4} alt="" /></center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bgColorBlue">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="btcImg">
                            <img src={ballons} alt="" height="200px" />
                            <div className="text">
                                <p className="btcP"> <CountUp start={0} end={2010} duration={2.5} delay={0.5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> <br />
                                    Year of Estb.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="btcImg">
                            <img style={{ opacity: '0.3' }} src={award} alt="" height="200px" />
                            <div className="text">
                                <p className="btcP">
                                    <CountUp start={0} end={4} duration={2.5} delay={0.5} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <br />
                                    Awards Won</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="btcImg">
                            <img style={{ opacity: '0.3' }} src={team} alt="" height="200px" />
                            <div className="text">
                                <p className="btcP"><CountUp start={0} end={400} duration={2.5} delay={0.5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> <br />
                                    400+ Happy Members</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="btcImg">
                            <img style={{ opacity: '0.3' }} src={tea} alt="" height="200px" />
                            <div className="text">
                                <p className="btcP"><CountUp start={0} end={900} duration={2.5} delay={0.5} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> <br />
                                    900 Cups of Coffee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <center>
                <div className="YearOfEstb">
                    <div className="container">
                        <div className="row ">
                            <div className="col d-flex justify-content-center"><img src="3132743.png" alt="" /></div>
                            <div className="col d-flex justify-content-center"><img src="3132743.png" alt="" /></div>
                            <div className="col d-flex justify-content-center"><img src="3132743.png" alt="" /></div>
                            <div className="col d-flex justify-content-center"><img src="3132743.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </center> */}
        </div>

    );
}
export default BringChangeHeading;