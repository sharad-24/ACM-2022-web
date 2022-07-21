import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore, { EffectCoverflow } from "swiper/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../css/index.css';

import img8 from '../assets/Prodigy-2022/prodigy2022.jpg';
import RecentWork from '../component/recentWorks';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import BringTheChange from '../component/bringTheChange';

SwiperCore.use([EffectCoverflow]);

function Home() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="body">
            {/* Nav section started */}
            <div className="bgImageHomePage">
                <Topbar />
                <div className="container">
                    {/* <div className="col-xs-12 mt-5">
                    <h3 className="">You're entering the <br /> new age of computing <br /> revolution </h3>
                    <br />
                    <div className="revolution">
                        <a href="https://acm-register.herokuapp.com/" className="square_btn">Register Now</a>
                    </div>
                </div> */}
                </div>
            </div>
            {/* Nav section ended */}

            {/* Register-Now to Our vision section started */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="blueContainer">
                            <br /> <br /> <br /> <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div data-aos="slide-right">
                                            <div className="forceCalledContainer">
                                                <div className="forceCalled">
                                                    <h>A force called</h>
                                                </div>
                                                <div className="UPESACM">
                                                    <h>UPES ACM</h>
                                                </div>
                                            </div>
                                            <ul type=" ">
                                                <li style={{ textAlign: 'left' }}>UPES ACM Student Chapter, established in 2010, has been a platform for the comprehensive development of the students ever since. It has furnished the knowledge and abilities of the students through cognitive technical and non-technical seminars, influential workshops, and events. The Chapter constantly works towards grooming its students and shaping them into the best version of themselves.
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-md-2 inMobileView">
                                        <br /> <br /> <br /> <br /><br />
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <h class="vertical"></h>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br /> <br /> <br /> <br /><br />
                                        <div data-aos="slide-left">
                                            <h4>Members perks</h4>
                                            <ul type="circle" style={{ textAlign: 'left' }}>
                                                <li>Develop your coding skills.</li>
                                                <li>Develop desired professional skills.</li>
                                                <li>Collaborate with prestigious organizations.</li>
                                                <li>Get exposed to international learning opportunities and resources.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /> <br /> <br /> <br />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <br />
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#221F1F', paddingLeft: '3%', paddingRight: '3%' }}>
                <div className="row">
                    <div className="col-md-6">
                        <div data-aos="slide-right">
                            <div className="">
                                <br /> <br /> <br /> <br />
                                <p style={{ textAlign: 'left' }}>UPES ACM-W Student Chapter believes in the undefined potential of women and thus gives them a platform to express their skills and talent. Women-centric events and activities, as well as scholarships, offer a plethora of opportunities for young women to showcase their skills, talents, and potential.</p>
                                <br />
                                <li style={{ textAlign: 'left' }}>We are a women-centric chapter that strives for excellence, harmony, and equality in science and technology and focuses on fabricating a community that represents the same.</li>
                                <li style={{ textAlign: 'left' }}>We have been awarded as the Best Student Chapter for Outstanding Student Chapter Activities for the session 2020-2021 by ACM International.</li>
                                <li style={{ textAlign: 'left' }}>We provide women with a platform where they can learn, exercise, and display their skills and talent. </li>
                                <li style={{ textAlign: 'left' }}>We organize several teach-back sessions, seminars, workshops which are both technical and fun events. Also, competitive coding contests and initiatives don’t miss our list of events.</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <br /> <br /> <br /> <br />
                        <div data-aos="flip-up">
                            <img className="imageContainer" src="https://firebasestorage.googleapis.com/v0/b/acm-acmw-app-6aa17.appspot.com/o/prodigy2022.jpg?alt=media&token=d0167155-8467-482b-a002-07c5f4d69f77" alt="test" />
                        </div>
                        <br /> <br /><br /> <br />
                        <div data-aos="slide-left">
                            <div className="Empowering">
                                <h>Where women and technology join forces to create magic</h>
                            </div>
                            <div>
                                <h className="bringChangeHeading" style={{ fontSize: '50px' }}>UPES ACM-W</h>
                            </div>
                            <br /><br />
                            <div className="revolution">
                                <a href="http://www.upesacmwomen.org/" className="square_btn2">Visit Us</a>
                            </div>

                        </div>
                    </div>
                </div>
                <br /> <br /> <br /> <br />
            </div>
            {/* <div className="container-fluid" style={{ backgroundColor: '#221F1F', paddingLeft: '3%', paddingRight: '3%' }}>
                <div className="row">
                    <div className="col-md-6 bg-img2">
                        
                    </div>
                    <div className="col-md-6">
                        
                        

                    </div>
                </div>
            </div> */}
            {/* Register-Now to Our vision section ended */}

            {/* Our Recent Work section started */}

            <div className="bgForRecentWork" data-aos="zoom-in">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-xs-0"></div>
                        <div className="col-xs-12 col-md-8" >
                            <h className="recentWorkHeading">OUR RECENT WORK</h> <br />
                            <h className="recentWorkPara" style={{ textAlign: 'left' }}>Aside from teaching back, we conduct workshops, seminars, fun events and coding competitions.</h> <br />
                            <h className="recentWorkPara" style={{ textAlign: 'left' }}>Amongst our various endeavors, none other are a testament to our mission and culture other than Prodigy’21, DSP, and Sahayak Virtual Hackathon 1.0.</h> <br />
                            <br />
                        </div>
                        <div className="col-md-2 col-xs-0"></div>
                    </div>
                </div>
                <RecentWork />
            </div>

            <BringTheChange />




            {/* <div className="container-fluid">
                <h className="aluiHeading">Hear from our alumni</h> <br />
                <h className="aluiPara">international international international international international international international</h>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            navigation={false}
                            effect={"coverflow"}
                            centeredSlides={true}
                            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                            loop={true}
                            coverflowEffect={{
                                rotate: 70,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                clickable: true,
                                slideShadows: true
                            }}
                            pagination={false}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="Cardbr">
                                    <div className="imgCard">
                                        <img className="aluiImage" src={img1} alt="alui-1" />
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiName">Vedant Daruka</h>
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiPosition">Former Chairperson-UPES ACM</h>
                                    </div>
                                    <h className="aluiDiscription">UPES ACM is the first international Student Chapter in the Computer
                                        Science Department  to be introduced in the University. ACM also
                                        started a very successful initiative for women in  computing, i.e. ACM-W</h>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Cardbr">
                                    <div className="imgCard">
                                        <img className="aluiImage" src={img1} alt="alui-1" />
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiName">Vedant Daruka</h>
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiPosition">Former Chairperson-UPES ACM</h>
                                    </div>
                                    <h className="aluiDiscription">UPES ACM is the first international Student Chapter in the Computer
                                        Science Department  to be introduced in the University. ACM also
                                        started a very successful initiative for women in  computing, i.e. ACM-W</h>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Cardbr">
                                    <div className="imgCard">
                                        <img className="aluiImage" src={img1} alt="alui-1" />
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiName">Vedant Daruka</h>
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiPosition">Former Chairperson-UPES ACM</h>
                                    </div>
                                    <h className="aluiDiscription">UPES ACM is the first international Student Chapter in the Computer
                                        Science Department  to be introduced in the University. ACM also
                                        started a very successful initiative for women in  computing, i.e. ACM-W</h>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Cardbr">
                                    <div className="imgCard">
                                        <img className="aluiImage" src={img1} alt="alui-1" />
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiName">Vedant Daruka</h>
                                    </div>
                                    <div className="imgCard">
                                        <h className="aluiPosition">Former Chairperson-UPES ACM</h>
                                    </div>
                                    <h className="aluiDiscription">UPES ACM is the first international Student Chapter in the Computer
                                        Science Department  to be introduced in the University. ACM also
                                        started a very successful initiative for women in  computing, i.e. ACM-W</h>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div> */}
            {/* Hear from our alumni section ended */}

            {/* Footer section started */}
            <Footer />
            {/* Footer section ended */}
        </div>
    );
}

export default Home;