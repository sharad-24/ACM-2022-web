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
import EventDetailsProdigy2019 from "../component/eventDetailsProdigy2019";

import prodigy2019Logo from '../assets/events/prodigy2019Logo.jpeg';
import end from '../assets/gif/Neon-Banner.gif';
import speaker from '../assets/Prodigy-2019/rajan dasgupta.jpg';
// import assert3 from '../assets/image/3.jpg';
// import assert4 from '../assets/image/4.jpg';
// import assert2 from '../assets/image/2.jpg';
// import assert1 from '../assets/image/1.jpg';


function Prodigy2019() {
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
                    <img src={prodigy2019Logo} className="card-img-top" alt="..." />
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
                        <p>Silicon Valley-themed events not only made this fest a huge success but also enlightened the importance of it in our opinions as named after the material in computer microprocessors.</p>
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
                            url='https://www.youtube.com/watch?v=Wax0EvdN3nY'
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
                            <div class="bottomText">Mr. Ranjan Dasgupta </div>
                            <div className="overlaypro">
                                <div className="textpro">Mr. Ranjan Dasgupta, speaker of our Eminent Speaker Program has been credited for 18 years of R&D expertise and specializes in IEEE/ACM transactions and conference papers. He has also given his contribution to technical documents and company internal white papers.  </div>
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
                <div className="container" style={{marginBottom: '5%'}}>
                    <div className="international">
                        <p>A story that starts in one frame of mind always ends in a completely different one, with natural progression and evolution along the way and Prodigy 19 was the key to wing our dreams of being an IT professional in the future. </p>
                    </div>
                </div>
            </center>

            <div style={{paddingTop: '5%'}}>
                <EventDetailsProdigy2019/>
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

export default Prodigy2019;