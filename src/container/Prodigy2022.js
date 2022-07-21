import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';

import '../css/prodigy.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import prodigyLogo from '../assets/Prodigy-2022/logo.png';
import EventDetailsProdigy2022 from "../component/eventDetailsProdigy2022";




function Prodigy2022() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="gifBackgroud2022">
                <Topbar />
            </div>
            <br />
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

            <center className="marginPara">
                <div className="container">
                    <div className="international">
                        <p>Few keywords ignite imagination to the magnitude that "Metaverse" does, and to become prodigious, you must have imagination.
                            The theme is certainly open to interpretation, but it revolves around having the desire to dream big and make a significant difference. It requires audacity to shift a paradigm, to actually alter how people imagine and eventually create. Many brilliant minds have sought this transition, and we've all heard of the few who have succeeded. We wouldn't be here if it weren't for them. The question is, do you have what it takes to be a prodigy?
                            It all begins with you, Prodigy 2022.</p>
                    </div>
                </div>
            </center>

            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-0"></div>
                    <div data-aos="slide-up" className="col-md-8 col-xs-12">
                        <ReactPlayer
                            className=''
                            url='https://youtu.be/ENuuvcFfGNM'
                            width='100%'
                            height='50vh'
                            controls={true}

                        />
                    </div>
                    <div className="col-md-2 col-xs-0"></div>
                </div>
            </div>

            <br />
            <div>
                <button className="buttonRegistration"><a style={{}} href="https://prodigy22-registration.herokuapp.com/">Register Now</a></button>
            </div>




            <div className="headingEvent">
                <h1 className="theme">EVENTS GALLERY</h1>
            </div>
            <center>
                <div className="container" style={{ marginBottom: '5%' }}>
                    <div className="international">
                        <p>UPES ACM Student Chapter conducted its annual technical fest, Prodigy, which is considered to be one of the most anticipated fests of the year. Through Prodigy, we aim to bring together the kind of people who wish to learn, question reality, and whose imagination knows no bounds.</p>
                    </div>
                </div>
            </center>

            <div style={{ paddingTop: '5%' }}>
                <EventDetailsProdigy2022 />
            </div>


            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Prodigy2022;