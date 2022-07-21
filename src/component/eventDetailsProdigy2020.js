import React, { useState } from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';

import '../css/event.css';

import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';
import brocode from '../assets/Prodigy-2020/brocode.jpeg';
import war from '../assets/Prodigy-2020/codeWars.jpeg';
import dominonpubg from '../assets/Prodigy-2020/dominion.jpeg';
import dominoncod from '../assets/Prodigy-2020/dominion2.jpeg';
import gamejam from '../assets/Prodigy-2020/gameJam.jpeg';
import lost from '../assets/Prodigy-2020/lost.jpeg';
import hackquest from '../assets/Prodigy-2020/hackQuest.jpeg';
import retro from '../assets/Prodigy-2020/retroDesign.jpeg';
import serverless from '../assets/Prodigy-2020/serverless.jpeg';

function EventDetailsProdigy2020() {

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
                                    className="eventImg" src={brocode} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED2(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED2(false) + setIsHiddenED(true)}
                                    className="eventImg" src={war} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED3(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED3(false) + setIsHiddenED(true)}
                                    className="eventImg" src={dominonpubg} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED4(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED4(false) + setIsHiddenED(true)}
                                    className="eventImg" src={dominoncod} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED5(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED5(false) + setIsHiddenED(true)}
                                    className="eventImg" src={gamejam} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED6(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED6(false) + setIsHiddenED(true)}
                                    className="eventImg" src={lost} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED7(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED7(false) + setIsHiddenED(true)}
                                    className="eventImg" src={hackquest} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED8(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED8(false) + setIsHiddenED(true)}
                                    className="eventImg" src={retro} alt="cod" />
                            </div>
                            <div className="col-xs-12 col-md-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
                                <img style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownED9(true) + setIsHiddenED(false)}
                                    onMouseLeave={() => setIsShownED9(false) + setIsHiddenED(true)}
                                    className="eventImg" src={serverless} alt="cod" />
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
                                    <img src={brocode} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">#BROCODE </h1>
                                    <p className="event_detail">
                                        ‘#BROCODE’ was arguably the most exciting event of Prodigy 2020. Just like a formula, one car is the perfect blend of unrelated disciplines (sports and engineering in this case), ‘#BROCODE’ embodied the perfect combination of teamwork, communication, and command over competitive programming - normally down to an individual’s skill.
                                        In an atmosphere where the margin for mistake is practically non-existent, the event featured 38 players locking horns by completing problems as quickly as possible, with Sarvesh Kataria & Bhuwan Chandra taking the cake.


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
                                    <img src={war} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Code Wars </h1>
                                    <p className="event_detail">
                                        No event organized by the UPES ACM and ACM-W Student Chapters is complete without the banger of a competitive coding cup to separate the pros from the novices.
                                        For Prodigy 2020, the Code Wars Champion was the most coveted accolade for any coding enthusiast. The contest was held on Hackerrank and was intense as far as coding competitions go, but fair, with all participants encouraged to carefully adhere to the ICPC regulations. The victors were those who demonstrated superior problem-solving abilities and time management.
                                        Major kudos to Sarvesh Kataria, Bhuwan Chandra, and Rahul Kumar for placing first, second, and third, respectively.


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
                                    <img src={dominonpubg} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name"> Dominion - PUBG </h1>
                                    <p className="event_detail">
                                        It is indeed a message that the unfortunate runners-up on the battlefield should remember because while phrases like "exhilarating, high octane, heart thumping, and a rush of blood to the head" may conjure up images of bungee jumping adrenaline junkies, they can only come close to describing the massive success that was the ‘Dominion: PUBG’ tournament. The bar was set high, with all teams being equally intense in competitive spirit and mechanical prowess. The ‘Dominion: PUBG’ victor was the team that won a one-on-one Team Death Match between the two finalist teams and took home the spoils of war (and, of course, bragging rights).


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
                                    <img src={dominoncod} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Dominion - CS: GO</h1>
                                    <p className="event_detail">
                                        No game in video game history comes close to the competitive attitude and atmosphere that surrounds not only the game but the name CS: GO.
                                        The stakes were so high in Dominion – CS: GO at Prodigy 2020 that all that stood between the top step of the podium and a shattered monitor was another extremely talented team of head-clickers. The team that dished more than they took eclipsed the competition. It consisted of Atul Parikshit, Madhav Haldia, Dhairya Kumar, Lucky Kumar, and Sohit Kumar who placed first out of 60 contestants.


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
                                    <img src={gamejam} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">GameJam</h1>
                                    <p className="event_detail">
                                        As enthusiastic gamers, most of us have always had ideas on how to enhance games or develop a game that takes over the meta.
                                        The issue is that we rarely get the opportunity to express our views in the best possible light.
                                        For budding game developers seeking to pitch the next Minecraft, CS: GO, or Call of Duty, GameJam at Prodigy 2020 was the place to be.
                                        What made this event special was that even if you had no prior knowledge of presenting your ideas properly, everything was taught to you on the first day of Prodigy 2020, making this an event you would have regretted missing.


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
                                    <img src={lost} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">L.O.S.T</h1>
                                    <p className="event_detail">
                                        The best-kept secret in event organization hunt for any successful event on the scale of Prodigy 2020 (from the perspective of an editorial member), is a well-thought-out treasure hunt.
                                        "Lost" was a treasure hunt for individuals with a keen eye for detail. This event's two difficult rounds included a quiz with tough questions written in C, with the key concealed in logical reasoning. The second round was a delight of an event in which your main adversary was the clock as you rushed to put your noggin' to good use in solving riddles.

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
                                    <img src={hackquest} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hackquest</h1>
                                    <p className="event_detail">
                                        The pinnacle of problem-solving, time control, and reading between the lines, is a good, old-fashioned Capture the Flag. Our friends over in CyberSecurity were rearing to go as the fire grew wild on Hackerrank. Cryptic clues of an unprecedented standard required participants to expand their repertoires and use all tools available to them in the form of encryption, decryption, steganography, and any other method under the sun in the domain of CyberSec.


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
                                    <img src={retro} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">RetroDesign</h1>
                                    <p className="event_detail">
                                        There is a popular view of design thinking that states that design is not for the individual, but for the consumer. In the past decade, we’ve seen cultural resets in the form of social media, new handheld technology, and more computation power than ever before. In this event, we challenged you to take on the most ambitious marketing campaign for, get this, a product that existed in the last decade being introduced in modern society. It's one thing to be creative; it's quite another to keep those creative juices flowing when the stakes are high.


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
                                    <img src={serverless} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Workshop: Serverless Application Development</h1>
                                    <p className="event_detail">
                                        As insightful and informative as any workshop brought to you by UPES ACM and ACM-W Student Chapters, the goal of the Serverless Application Development workshop by Mr. Nikhil Gupta – Full Stack Developer at Veris and UPES Alum – was to teach aspiring web developers how to make the most of a powerful web tool like AWS and to explore its features like AWS Lambda, AWS API gateway, AWS S3, and AWS DynamoDB.
                                        By the end of the session, every participant was able to apply what they had learned about creating a simple login page to the creation of scalable web apps that serve a broader purpose.


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

export default EventDetailsProdigy2020;