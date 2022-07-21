import React, {useEffect} from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player'

import '../css/prodigy.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import EventDetailsProdigy2021 from "../component/eventDetailsProdigy2021";

import prodigyLogo from '../assets/image/prodigy21logo.png';
import end from '../assets/gif/Neon-Banner.gif';
import assert3 from '../assets/image/3.jpg';
import assert4 from '../assets/image/4.jpg';
import assert2 from '../assets/image/2.jpg';
import assert1 from '../assets/image/1.jpg';
import speaker1 from '../assets/Prodigy-2021/spaeaker1.jpeg';
import speaker2 from '../assets/Prodigy-2021/yashashvi-2.png';
import speaker3 from '../assets/Prodigy-2021/speaker3.jpeg';
import speaker4 from '../assets/Prodigy-2021/spaeker4.jpeg';




function Prodigy2021() {
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
                    <img src={prodigyLogo} className="card-img-top" alt="..." />
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
                        <p>When you project yourself into the future and envision all of your goals, it can help you gain perspective on your present, where you are, and what you are doing now. Keeping the same in mind, this year’s theme was decided as “Back To The Future”.</p>
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
                            url='https://youtu.be/DEGBIPPdn08'
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
                    <div className="col-md-3 col-xs-12">
                        <div data-aos="zoom-in" className="containerpro">
                            <img src={speaker1} alt="Avatar" className="imagepro" />
                            <div class="bottomText">Anagha Todalbagi</div>
                            <div className="overlaypro">
                                <div className="textpro">Anagha Todalbagi is a senior software engineer at Duetto. She has always been fascinated by artificial intelligence and human-computer interaction, which has led her to build voice assistance for doctors to augment their skills.</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-12">
                        <div data-aos="zoom-in" className="containerpro">
                            <img src={speaker2} alt="Avatar" className="imagepro" />
                            <div class="bottomText">Yashasvi J Dave</div>
                            <div className="overlaypro">
                                <div className="textpro">Yashasvi J Dave is a research assistant at System and Internet Security Lab and is pursuing Masters in Computer Sciences at the University of Illinois at Chicago. She has also conducted various tech workshops such as Get started with Git and Github, Scratch Programming for freshers.</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-12">
                        <div data-aos="zoom-in" className="containerpro">
                            <img src={speaker3} alt="Avatar" className="imagepro" />
                            <div class="bottomText">Avinash Jain</div>
                            <div className="overlaypro">
                                <div className="textpro">Avinash Jain is a Security Engineer at CRED. Various MNCs and top companies have acknowledged his ability to break application logic and finding vulnerabilities in them.</div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-md-3 col-xs-12">
                        <div className="containerpro">
                            <img src={speaker4} alt="Avatar" className="imagepro" />
                            <div class="bottomText">Ashish Seth </div>
                            <div className="overlaypro">
                                <div className="textpro">Dr. Ashish Seth has done wonders as an author, consultant, researcher, speaker, and teacher. He is a professor at the School of Global Convergence Studies, Inha University, South Korea.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="headingEvent">
                <h1 className="theme">EVENTS GALLERY</h1>
            </div>
            <center>
                <div className="container" style={{marginBottom: '5%'}}>
                    <div className="international">
                        <p>UPES ACM Student Chapter conducted its annual technical fest, Prodigy, which is considered to be one of the most anticipated fests of the year. Through Prodigy, we aim to bring together the kind of people who wish to learn, question reality, and whose imagination knows no bounds.</p>
                    </div>
                </div>
            </center>

            <div style={{paddingTop: '5%'}}>
                <EventDetailsProdigy2021/>
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

export default Prodigy2021;