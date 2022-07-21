import React, { useEffect } from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player'

import '../css/prodigy.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import EventDetailsProdigy2020 from "../component/eventDetailsProdigy2020";

import prodigy2020Logo from '../assets/events/prodigy2020Logo.jpeg';
import speaker from '../assets/Prodigy-2020/spaeker.jpeg';
import end from '../assets/gif/Neon-Banner.gif';
import assert3 from '../assets/image/3.jpg';
import assert4 from '../assets/image/4.jpg';
import assert2 from '../assets/image/2.jpg';
import assert1 from '../assets/image/1.jpg';



function Prodigy2020() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="gifBackgroud">
                <Topbar />
            </div>

            <center>
                <div data-aos="flip-up" className=" mb-3">
                    <img src={prodigy2020Logo} className="card-img-top" alt="..." />
                </div>
            </center>

            <center>
                <div className="container">
                    <div className="ThemeForThisYear">
                        <p>THEME FOR THIS YEAR</p>
                    </div>
                </div>
            </center>

            <center>
                <div className="container">
                    <div className="international">
                        <p>Prodigy 2020 was just as amazing as you remembered it, and for all the right reasons. The theme, 'A Decade Change,' celebrated humanity's mind-boggling technological progress and ushered in the new decade with an exciting atmosphere.</p>
                    </div>
                </div>
            </center>
            <br />
            <br />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-0"></div>
                    <div data-aos="slide-up" className="col-md-8 col-xs-12">
                        <ReactPlayer
                            className=''
                            url='https://youtu.be/w3qkb0CMG-Q'
                            width='100%'
                            height='50vh'
                            controls={true}

                        />
                    </div>
                    <div className="col-md-2 col-xs-0"></div>
                </div>
            </div>
            <center>
                <div className="container">
                    <div className="ThemeForThisYear">
                        <p>WHO SPOKE THIS YEAR</p>
                    </div>
                </div>
            </center>



            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12"></div>
                    <div className="col-md-4 col-xs-12">
                        <div data-aos="zoom-in" className="containerpro">
                            <img src={speaker} alt="Avatar" className="imagepro" />
                            <div class="bottomText">Mr. Nikhil Gupta</div>
                            <div className="overlaypro">
                                <div className="textpro">Mr. Nikhil is an experienced Full Stack Engineer with a demonstrated history of working in a fast-moving environment. Skilled in DevOps, Amazon Web Services (AWS), Python, PostgreSQL, Django, React JS, Git, Terraform, Managing Infrastructure.<b />Having an illustrious background in the development of web apps and working with API optimization, we couldn’t find anyone better than this accomplished full-stack developer to pick the brains of the ever-curious audience at ‘Workshop: Serverless Application Development’ at Prodigy 2020.</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12"></div>
                    </div>

                </div>
            </div>

            <div className="headingEvent">
                <h1 className="theme">EVENTS GALLERY</h1>
            </div>
            <center>
                <div className="container" style={{ marginBottom: '5%' }}>
                    <div className="international">
                        <p>Prodigy 2020's success was built on a slew of thrilling, action-packed events. From mind-bending coding competitions in ‘#BROCODE,' ‘Code Wars,' and ‘Hackquest,' to fierce competition on the virtual battlefield in ‘Dominion – CS: GO' and ‘Dominion – PUBG'. Not to mention the creative events 'L.O.S.T,' 'Retro Design,' and 'Game Jam,' as well as the instructive webinar 'Workshop: Serverless Application Development.' Prodigy 2020 had it all!</p>
                    </div>
                </div>
            </center>

            <div style={{ paddingTop: '8%' }}>
                <EventDetailsProdigy2020 />
            </div>

            {/* <div style={{ backgroundColor: 'white' }}>
                <div class="container">
                    <div className="headingEvent">
                        <h1 className="theme2">OUR SPONSERS</h1>
                    </div>
                    <center>International International International International International International International</center>
                </div>
                <div className="sponsor_image">
                    <div className="row">
                        <div className="col">
                            <center><img src={assert3} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert4} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert1} alt="logo img" /></center>
                        </div>
                        <div className="col">
                            <center><img src={assert2} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert4} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert1} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert2} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert3} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert4} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert1} alt="logo img" /></center>
                        </div>
                        <div className="col">
                            <center><img src={assert2} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert3} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert1} alt="logo img" /></center>
                        </div>

                        <div className="col">
                            <center><img src={assert2} alt="logo img" /></center>
                        </div>
                    </div>

                </div>
            </div> */}
            <center>
                <div className="">
                    <img src={end} className="card-img-top" alt="..." />

                </div>
            </center>
            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Prodigy2020;