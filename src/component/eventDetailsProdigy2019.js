import React, { useState } from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';

import '../css/event.css';

import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';
import eminent from '../assets/Prodigy-2019/eminent.jpeg';
import firewall from '../assets/Prodigy-2019/firewall.jpeg';
import showbiz from '../assets/Prodigy-2019/showbiz.jpeg';
import debattle from '../assets/Prodigy-2019/debattle.jpeg'
import pubg from '../assets/Prodigy-2019/invictusPubg.jpeg';
import buycot from '../assets/Prodigy-2019/buyout.jpeg';
import pictup from '../assets/Prodigy-2019/pitchUp.jpeg';
import brogammer from '../assets/Prodigy-2019/brogrammer.jpeg';
import cso from '../assets/Prodigy-2019/invictus.jpeg';
import fifa from '../assets/Prodigy-2019/invictusFifa.jpeg';
import bighead from '../assets/Prodigy-2019/bighead.jpeg';

function EventDetailsProdigy2019() {

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
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED1(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED1(false) + setIsHiddenED(true)}
                                    className="eventImg" src={eminent} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED2(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED2(false) + setIsHiddenED(true)}
                                    className="eventImg" src={firewall} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED3(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED3(false) + setIsHiddenED(true)}
                                    className="eventImg" src={showbiz} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED4(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED4(false) + setIsHiddenED(true)}
                                    className="eventImg" src={debattle} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED5(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED5(false) + setIsHiddenED(true)}
                                    className="eventImg" src={pubg} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img  style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED6(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED6(false) + setIsHiddenED(true)}
                                    className="eventImg" src={buycot} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED7(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED7(false) + setIsHiddenED(true)}
                                    className="eventImg" src={pictup} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED8(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED8(false) + setIsHiddenED(true)}
                                    className="eventImg" src={brogammer} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED9(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED9(false) + setIsHiddenED(true)}
                                    className="eventImg" src={cso} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED10(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED10(false) + setIsHiddenED(true)}
                                    className="eventImg" src={bighead} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED11(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED11(false) + setIsHiddenED(true)}
                                    className="eventImg" src={fifa} alt="cod" />
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
                                    <img src={eminent} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Eminent Speaker Program</h1>
                                    <p className="event_detail">
                                        This Prodigy 19 UPES ACM and ACM-W Student Chapters conducted the Eminent Speaker Program (ESP) that provided the students with direct access to top technology leaders and innovators who can talk about computing hubs and the hurdles that come in the exposure of the changing technological globe. This year, this thriving opportunity was led by Mr. Ranjan Dasgupta with his experience in IEEE/ACM transactions, conference papers, and technical documents, and his 18 years of R&D expertise influenced people about the innovations and app developments. These sessions provide an opportunity to go deeper into the topic areas that each speaker will cover.
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
                                    <img src={firewall} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Firewall </h1>
                                    <p className="event_detail">
                                        FIREWALL is a network or internet game that plays just like an outdoor game. While defending his or her flag, one person will attempt to locate and capture an opponent's "flag." Flags, on the other hand, are usually a snippet of code, defects, or a file. A sequence of questions was asked as the competition progressed.
                                        FIREWALL is a game show similar to Jeopardy. In the manner of Jeopardy, you'll be asked a series of questions that may provide a clue for your guide; keep in mind that the more difficult the job, the more points you'll receive! There could not be a more exciting and lawful method for the cyber inquisitive and enthusiastic young generation to put their security abilities to the test, and that too on a safe playing field, than by becoming a part of this adventure at Silicon Valley.

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
                                    <img src={showbiz} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Showbiz </h1>
                                    <p className="event_detail">
                                        "The aim of battle is peace," Pablo Escobar said of the purpose of battle. These binge-watching sessions in your spare time, your WhatsApp group chats, the spoilers buzzing about your ears, and the restless night’s SHOWBIZ, presented by UPES ACM and ACM-W Student Chapters, is a platform for you to turn all of your happy hardships into lucrative compensation. The honor of BINGE WATCHER is up for grabs among all TV series binge-watchers.
                                        Round one would address topics on television shows. For the subsequent round, that'd be the critical determinant. The competitors would've been found to facilitate the scenario shown on the monitor and respond to questions relating to it in the subsequent phase.
                                        The teams will compete for the title of Ultimate BINGE WATCHER. The benefit of wonder is that it allows you to watch yourself progressing toward fulfillment. So hop in and share the love.
                                        F.R.I.E.N.D.S. You've gotten this!



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
                                    <img src={debattle} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Debattle</h1>
                                    <p className="event_detail">
                                        "The future is Machine Learning." "No, the Internet of Things is the way to go."
                                        Have you ever been a part of a conversation when people were arguing about which characteristics of a domain were the best?
                                        If you answered yes, we presented "Debattle," a debate event with a twist.
                                        It consisted of only one round, with domain-specific themes.
                                        At the commencement of the event, the competitors were separated into two groups. The first category participant chose his topic from the chits and debated with a second category participant.
                                        The second debater had the option of choosing his side of the argument. Each player would have a maximum of 3 minutes to speak, with a total of 6 minutes allotted for both, preceded by 2 minutes for the assessors' questionnaire. So, what else are you looking for? If you feel you have what it takes to be proclaimed the contest's numero uno, then join us as early as possible.



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
                                    <img src={pubg} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">PUBG</h1>
                                    <p className="event_detail">
                                        Invictus' PUBG is a fight of champions, brought to you by UPES ACM and ACM-W! It's a two-round competition. The "Survival Round" is the first round. There will be 25 teams of four people competing to see who can make it to the end. The one squad that makes it through will be declared the game's number one!
                                        The "Killing Machine" round is the second phase. The squad with the most kills will earn the tournament's 2nd spot! Help us in our quest to become the greatest on the battlefield!



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
                                    <img src={buycot} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Buyout</h1>
                                    <p className="event_detail">
                                        Prodigy 2019 featured a variety of thrilling and mind-blowing events that could bring out the best in each participant. The BuyOut was one such scenario.
                                        This is a Failed Startup Event featuring a two-round bidding process. In Round 1, each participant will be assigned a sector and a failed company from a large pool of candidates in that industry. Participants must identify the problem and list the causes for failure before developing a completely new business plan or an improvised version of one. Each team will get 5 minutes to propose their ideas, followed by 2 minutes of cross-questioning by the judges. Teams will then advance to the second round.
                                        In Round 2, each team will be granted an equal amount of virtual money by which to bid for the startup solution offered by the round 1 players. In the end, the bidding score will be computed by multiplying the marks earned in round 1 by each team's bid, and the winners will be determined accordingly.


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

            {isShownED7 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '5%' }}>
                        <div onClick={() => setIsShownED7(false) + setIsHiddenED(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={pictup} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Pitch Up</h1>
                                    <p className="event_detail">
                                        PitchUp, the ultimate event of wit, observation, and listening, was held for the third time. Understanding is really important in a team of two individuals! Riddles that stump your mind, audio and video snippets with hidden meanings, and famous people we like are just a few of the questions that will get your brain working. The two obstacles that the squad must overcome will earn you important points! The first obstacle provides three coveted chances for a pre-designated team member to obtain the solution. If it's correct, the identical response is sent to the other member, who is not only attempting to grasp the answer but also listening to loud music, making things much more complicated! What's more, guess what? After the event, there will be another round of Clay Modelling to thrill you even more! You, of course! The selected one who could win the game with the proper muscle action, all in the name of the reward you want.



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
                                    <img src={brogammer} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Brogrammer</h1>
                                    <p className="event_detail">
                                        This Prodigy has activities that will give you a burst of adrenaline. We've got the perfect event for you to satisfy your coding thirst and put your abilities to the test.  BROGRAMMER. This event features a slew of mind-boggling coding challenges. You can play in a two-person team.
                                        Initially, teams will be provided code samples to discover problems during the first round. Correct debugging will earn them +2 points, while wrong mistake pointing will cost them 1 point. The winners of this round progressed to the next round. Each team will be given multiple questions in this round, and all team members will begin coding any one question from the question bank. After 10 minutes, everyone in the team will be rotated, and they will now have to code the issue in front of the rest of the team. Also, in the middle of the tournament, one team's members are unable to interact with each other as effectively as any other team.
                                        BROGRAMMER is for you if you are a coding genius and have a team with excellent communication abilities.



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
                                    <img src={cso} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">CS Go</h1>
                                    <p className="event_detail">
                                        One of the most popular and well-known multiplayer games of all time is brought to you by the UPES ACM and ACM-W Student Chapters. Join us and put your skills to the test in Invictus' Counter-Strike: Global Offensive, a first-person shooter game where you can play against your friends and prove you're a real GAMER!
                                        Have you got what it takes to establish your unconquerability and earn the privilege to show off your prowess?
                                        This Prodigy 2019, 7-8 February, will feature Invictus and other interesting activities.



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
                                    <img src={bighead} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Big Head Coder</h1>
                                    <p className="event_detail">
                                        Textbook knowledge is insufficient to build profound and severe coding abilities. At BIG-HEAD CODER, Prodigy 19 gives you time-bound competition coding. The coding event will run more than 5 hours, with the participants being given three distinct questions to answer at the start, followed by a new question every hour. Each question is laced with suspense and challenge to encourage the Big-Head Coder to stretch his or her wings!
                                        The coding war will take place on an online coding platform and will follow the ICPC standards for fair and equitable competition. Those who can clear this coding round will be rewarded with exciting gifts and delicious treats. UPES ACM and ACM-W have invited you to this appropriate coding event. Compete for it and you'll come out on top.

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
                                    <img src={fifa} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Fifa 18</h1>
                                    <p className="event_detail">
                                        Barcelona or Juventus: which is the superior team?
                                        How many of you jump up and down in support of your favorite football team during games?
                                        Don't you want to be like Messi and score goals?
                                        For those who end up dying football lovers out there, Prodigy 19 presents you Invictus' FIFA 18! Prepare to punch aside your enemy and experience the sweet moment of success!
                                        So, what do you have to abandon? Register as soon as possible!

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

export default EventDetailsProdigy2019;