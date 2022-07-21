import React, { useState } from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';

import '../css/event.css';

import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';
import prodigyLogo from '../assets/image/prodigy21logo.png';
import alphaBGMI from '../assets/Prodigy-2022/BGMI.png';
import alphaValorent from '../assets/Prodigy-2022/Valorant.png';
import auction from '../assets/Prodigy-2022/Auction Haven.png';
import wits from '../assets/Prodigy-2022/Binary Wits.png';
import codemates from '../assets/Prodigy-2022/Codemates.png';
import codeverse from '../assets/Prodigy-2022/Codeverse.png';
import dsp from '../assets/Prodigy-2022/DSP.png';
import hackquest from '../assets/Prodigy-2022/HackQuest 2.0.png';
import pixel from '../assets/Prodigy-2022/Pixel Posse.png';
import techtrail from '../assets/Prodigy-2022/TechTrail.png';

function EventDetailsProdigy2022() {

    const [isShownED1, setIsShownED1] = useState(false);
    const [isShownED2, setIsShownED2] = useState(false);
    const [isShownED3, setIsShownED3] = useState(false);
    const [isShownED4, setIsShownED4] = useState(false);
    const [isShownED5, setIsShownED5] = useState(false);
    const [isShownED6, setIsShownED6] = useState(false);
    const [isShownED7, setIsShownED7] = useState(false);
    const [isShownED8, setIsShownED8] = useState(false);
    const [isShownED9, setIsShownED9] = useState(false);
    const [isShownED10, setIsShownED10] = useState(false);
    const [isShownED11, setIsShownED11] = useState(false);

    const [slideOutED, setSlideOutED] = useState(true);
    const [isHiddenED, setIsHiddenED] = useState(true);

    return (
        <div>
            {isHiddenED && (
                <Animated animationIn={slideOutED ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED1(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED1(false) + setIsHiddenED(true)}
                                    className="eventImg" src="https://firebasestorage.googleapis.com/v0/b/arambhik-school-65864.appspot.com/o/BGMI.png?alt=media&token=00f06eff-7c84-4105-ae9d-e39019009fb4" alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED2(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED2(false) + setIsHiddenED(true)}
                                    className="eventImg" src={alphaValorent} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED3(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED3(false) + setIsHiddenED(true)}
                                    className="eventImg" src={auction} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED4(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED4(false) + setIsHiddenED(true)}
                                    className="eventImg" src={wits} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED5(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED5(false) + setIsHiddenED(true)}
                                    className="eventImg" src={codemates} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED6(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED6(false) + setIsHiddenED(true)}
                                    className="eventImg" src={codeverse} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED8(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED8(false) + setIsHiddenED(true)}
                                    className="eventImg" src={dsp} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED9(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED9(false) + setIsHiddenED(true)}
                                    className="eventImg" src={hackquest} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED10(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED10(false) + setIsHiddenED(true)}
                                    className="eventImg" src={pixel} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh', marginBottom: '10%' }} onClick={() => setIsShownED11(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED11(false) + setIsHiddenED(true)}
                                    className="eventImg" src={techtrail} alt="cod" />
                            </div>
                        </div>
                    </div>
                </Animated>
            )}

            {isShownED1 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED1(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/arambhik-school-65864.appspot.com/o/BGMI.png?alt=media&token=00f06eff-7c84-4105-ae9d-e39019009fb4" className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Alpha Realm: BGMI</h1>
                                    <p className="event_detail">
                                        Those who live and breathe gaming should keep their eyes on the prize because the battle has begun. You are invited to the ultimate BGMI tournament hosted by UPES ACM and ACM-W Student Chapters. It's time to LOOT, SCOOT, and SHOOT, so go reload your guns and put on your vests.
                                        Three rounds will be played during this one-day event. Show off your skills and make your opponents feel the dust in Miramar. Bring your team, ace the classic match, and beat the other superior team in domination, gunking, and TDM.
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

            {isShownED2 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED2(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={alphaValorent} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Alpha Realm: Valorant</h1>
                                    <p className="event_detail">
                                        "There can only be one conqueror. I'm coming for you."<br />
                                        Ready for yet another round of team strategies, clutch moments, and eliminating enemies? Then assemble your gears and chief agents because this Prodigy, UPES ACM and ACM-W Student Chapters present you with Alpha Realm: Valorant, to level up your game against skillful rivals and reinvigorate the gamer in you. With registrations in teams of up to 5 members, dive into the pool of your adrenaline to play like never before!
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

            {isShownED3 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED3(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={auction} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Auction Haven</h1>
                                    <p className="event_detail">
                                        "Life is either a daring adventure or nothing at all."<br />
                                        –Helen Keller<br />
                                        If you are the daring kind and if you enjoy high-risk-high-reward scenarios, then Prodigy 2022 by UPES ACM and ACM-W Student Chapters has something special for you! Presenting Auction Haven, where both your technical skills and intuition will be put to the test.
                                        Solve tricky questions, come up with innovative start-up ideas for problems, wisely bid for them, and make your way towards victory!
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

            {isShownED4 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED4(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={wits} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Binary Wits</h1>
                                    <p className="event_detail">
                                        “Programming isn’t about what you know; it’s about what you can figure out.”<br />
                                        – Chris Pine.<br />
                                        This Prodigy, UPES ACM, and ACM-W Student Chapters present Binary Wits, a fun coding contest to test and hone your coding skills. Get Ready for the ultimate measure of your coding abilities in C and C++. Each team of two has to debug a set of questions, then they will receive an envelope sealed with emojis depicting a song which will then lead to a link. But there’s a twist, i.e. one of the team members will type blind-folded and the other may guide their partner.
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

            {isShownED5 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED5(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={codemates} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Codemates</h1>
                                    <p className="event_detail">
                                        “There is nothing permanent except change.”<br />
                                        -Heraclitus<br />
                                        The UPES ACM and ACM-W Student Chapters present yet another amusing competitive coding contest with Prodigy’22, CodeMates.
                                        A pair of competitors will be displaying their knowledge of metaverse and skills in the domain of coding in C. Getting them into serious competition, coordination, and bonding will be an important factor when they switch every 5 mins while answering some crazy metaverse related questions. The contest will be held on HackerRank and the language used will be C, C++ & Java.
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

            {isShownED6 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED6(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={codeverse} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Codeverse</h1>
                                    <p className="event_detail">
                                        “Good code is its own best documentation.”<br />
                                        -Steve McConnell<br />
                                        It’s time to hone your coding skills and get set for the ultimate test of your abilities as UPES ACM and ACM-W Student Chapters present to you CodeVerse for the annual mega fest Prodigy’22!
                                        Take on the challenge and solve 5 questions within 5 hours in any language of your choice on an online platform for a chance to win exciting prizes and goodies. Winners will be chosen according to the leaderboard, strictly based on the ICPC guidelines.
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

            {isShownED8 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED8(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={dsp} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">DSP</h1>
                                    <p className="event_detail">
                                        “Nothing is more expensive than a missed opportunity.” <br />
                                        – H. Jackson Brown.<br />

                                        With metaverse becoming the new big thing, what else do you need than an opportunity to learn about the technology used in it!

                                        This Prodigy’22, UPES ACM and ACM-W Student Chapters, brings to you Distinguished Speakers Program (DSP), providing you the opportunity to listen to the CTO of DelaPlex, Dr. Rizwan Ahmed, on Artificial Intelligence – Threats and Opportunity. Dr. Ahmed, who has over 18 years of professional experience in the IT industry, will be covering the various technical aspects related to AI, covering topics ranging from the history of AI to the recent examples of AI.

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

            {isShownED9 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED9(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={hackquest} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">HackQuest</h1>
                                    <p className="event_detail">
                                        “No technology that’s connected to the Internet is unhackable.”<br />
                                        -Abhijit Naskar<br />
                                        It’s that time of the year again when you race against time. Prodigy 2022,  by the UPES ACM and ACM-W Student Chapters, in collaboration with Cyber Sentinel, bring to you “HackQuest2.0”.
                                        Solve various challenges, decipher the clues, collect the flags, do whatever it takes to get ahead. CTFs have it all, be it steganography, binary, reversing, or cryptography.
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

            {isShownED10 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED10(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={pixel} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Pixel Posse</h1>
                                    <p className="event_detail">
                                        “Design is not just what it looks like and feels like. Design is how it works.”<br />
                                        –Steve Jobs<br />
                                        Brought to you by the UPES ACM and ACM-W Student Chapters, Pixel Posse is here to bring forth the designer hidden inside you. It gives you a platform to showcase your visualization. In this event, you will be given a random problem statement for a product with an objective to design a logo, a visiting card, and a T-shirt for it.
                                        You can design by using Illustrator, Adobe XD, Figma, and Photoshop. The event will be conducted offline and winners will get the chance to win some amazing goodies and prizes.
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

            {isShownED11 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                            <div onClick={() => setIsShownED11(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={techtrail} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">TechTrail</h1>
                                    <p className="event_detail">
                                        "The true mystery of the world is the visible, and not the invisible."<br />
                                        — Oscar Wilde <br />
                                        Ever wanted to go hunting treasure like pirates of the old? Here’s your chance! This Prodigy, UPES ACM & ACM-W Student Chapters are here with Tech Trail, the ultimate treasure hunt where your focus, creativity, and technical knowledge will be put to test. Gear up, hunt, and solve tech-related questions hidden throughout the campus before the timer runs out, and lay claim to exciting prizes.
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

export default EventDetailsProdigy2022;