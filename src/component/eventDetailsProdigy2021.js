import React, { useState } from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';

import '../css/event.css';

import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';
import DSP from '../assets/Prodigy-2021/DSP.jpeg';
import gameScuffle from '../assets/Prodigy-2021/gameScuffle.jpeg';
import designo from '../assets/Prodigy-2021/designsio.jpeg';
import valo from '../assets/Prodigy-2021/valorent.jpeg';
import cyberspace from '../assets/Prodigy-2021/cyberSpace.jpeg'
import swizzle from '../assets/Prodigy-2021/pointerSwizzle.jpeg';
import cod from '../assets/Prodigy-2021/cod.jpeg';
import trove from '../assets/Prodigy-2021/treasureTrove.jpeg';

function EventDetailsProdigy2021() {

    const [isShownED1, setIsShownED1] = useState(false);
    const [isShownED2, setIsShownED2] = useState(false);
    const [isShownED3, setIsShownED3] = useState(false);
    const [isShownED4, setIsShownED4] = useState(false);
    const [isShownED5, setIsShownED5] = useState(false);
    const [isShownED6, setIsShownED6] = useState(false);
    const [isShownED7, setIsShownED7] = useState(false);
    const [isShownED8, setIsShownED8] = useState(false);
    const [isShownED9, setIsShownED9] = useState(false);

    const [slideOutED, setSlideOutED] = useState(true);
    const [isHiddenED, setIsHiddenED] = useState(true);

    return (
        <div>
            {isHiddenED && (
                <Animated animationIn={slideOutED ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED1(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED1(false) + setIsHiddenED(true)}
                                    className="eventImg" src={DSP} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED2(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED2(false) + setIsHiddenED(true)}
                                    className="eventImg" src={gameScuffle} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED3(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED3(false) + setIsHiddenED(true)}
                                    className="eventImg" src={designo} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED4(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED4(false) + setIsHiddenED(true)}
                                    className="eventImg" src={valo} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED5(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED5(false) + setIsHiddenED(true)}
                                    className="eventImg" src={cyberspace} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED6(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED6(false) + setIsHiddenED(true)}
                                    className="eventImg" src={swizzle} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED8(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED8(false) + setIsHiddenED(true)}
                                    className="eventImg" src={cod} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED9(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED9(false) + setIsHiddenED(true)}
                                    className="eventImg" src={trove} alt="cod" />
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
                                    <img src={DSP} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Distinguished Speakers Program </h1>
                                    <p className="event_detail">
                                        This year, Dr. Ashish Seth, professor at the School of Global Convergence Studies, delivered an enthralling session on the topic, “Blockchain Technology: Business Foundation”.
                                        The workshop mainly focused on providing a key concept on blockchain technology and its architecture. In this 2 hours long session, topics ranged from the concept of a centralized, distributed, and decentralized approach to the role of technology in times of pandemic. The minor details of all the matters were also covered, making it easy for beginners to understand the concepts. The presence of more than 180 students made the event successful

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
                                    <img src={gameScuffle} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Game Scuffle </h1>
                                    <p className="event_detail">
                                        In this year’s game development event organized under Prodigy’ 21, a marshal of 10 teams consisting of game developing enthusiasts portrayed their creative game ideas and presentation skills. After the introductory meeting,  assets were given to all the teams for both Unity and Unreal engine. Only 24 hours were allocated to all the participants to build the prototype and to answer the questions asked in the submission form. After the race around the clock, a total of 4 teams advanced to the second round. All the teams presented their presentation to our esteemed judges. Finally, after plenty of considerations, a winner and the runner-ups were announced in the closing ceremony of Prodigy’21.

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
                                    <img src={designo} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name"> Designsio </h1>
                                    <p className="event_detail">
                                        Design is the manifestation of intelligence. UPES ACM Student Chapter got it covered under Prodigy 21 as Designsio aimed at unleashing a designer by building a future palette. Participants delved into this opportunity into two categories: digital designers and those who prefer drawing by hand. Every 15 minutes, all participants were given a random theme for which they had to create a logo or a poster. Around 50 artists participated in handmade and digital designing, letting their creative instincts flourish to outshine the competition.

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
                                    <img src={valo} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Combat Zone(Valorant)</h1>
                                    <p className="event_detail">
                                        The event started with 14 teams facing off each other in an elimination match in the first stage. As the event continued with the elimination of teams in each stage, out of 14, only 4 made it to the semi-finals, and two to the finals. In the final round both the teams battled against each other and in the end, the winning team was decided. The winning team left with the grand prize of Rs. 15000 and various coupons. To ensure fair gameplay, all the teams were spectated by the spectator. The event went smoothly and all 75 players enjoyed it well.

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
                                    <img src={cyberspace} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Stepping Into Cyberspace</h1>
                                    <p className="event_detail">
                                        On a virtual platform, an informative session highlighting every aspect of Cybersecurity was delivered by Mr. Avinash Jain, Lead Security Engineer at CRED. Even though the event was organized on a virtual platform, the session went smoothly and was very communal and collective, the doubts of the students were also cleared by the speaker in the best way possible. In the end, each student left the session with a great amount of information about cybersecurity and a participation certificate. The event witnessed active participation from more than 130 enthusiasts.

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
                                    <img src={swizzle} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name"> Pointer Swizzle</h1>
                                    <p className="event_detail">
                                        UPES ACM Student Chapter marshaled a coding event under Prodigy 2021 for all the coding wizards to amp up their geekiness to the next level. Pointer Swizzle was a CodeChef-hosted online coding competition in which players had to solve five questions in five hours in the language of their choice. The competition fully followed the ICPC standards. Every contestant was entirely absorbed in the competition, answering questions honestly. Turnout was high because everyone had a chance to let their progging mind operate when it comes to programming. The event witnessed more than 50 active participants.
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
                                    <img src={cod} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Combat zone: CODM</h1>
                                    <p className="event_detail">
                                        Enemies were defeated and objectives were captured in this multiplayer battleground event. The first round was conducted in the form of BR matches and the qualified teams stood for a final faceoff in the Multiplayer(Deathmatch) mode. The turnout was high as everyone got a chance to let their hair down amidst the ongoing relentless pandemic. The event witnessed more than 75 active participants.

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
                                    <img src={trove} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Treasure Trove</h1>
                                    <p className="event_detail">
                                        A game of perspective, patience, and creativity, Treasure Trove was an online treasure hunt event that took the participants on a ride across various social media platforms effectively giving them an introductory tour of our Student Chapter as well. The event was conducted on an engaging app built from scratch and managed by our technical team. The questions were put forth in the form of riddles with the solutions hidden in one post or another all across our social media handles. All in all, it was a successful event with an overwhelming response and seamless execution.

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

export default EventDetailsProdigy2021;