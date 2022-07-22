import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../css/team.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';


import abhay from '../assets/Teams/abhay kapatia.jpeg';
import aditya from '../assets/Teams/aditya pilani.jpeg';
import arjun from '../assets/Teams/arjun ahluwalia.jpeg';
import ayush from '../assets/Teams/ayush kumar.jpeg';
import divyanshi from '../assets/Teams/divyanshi sharma.jpg';
import garvit from '../assets/Teams/garvit.jpeg';
import nikhil from '../assets/Teams/nikhil pancholi.jpeg';
import paritosh from '../assets/Teams/paritosh.jpg';
import pranay from '../assets/Teams/pranay bhandari.jpg';
import rishika from '../assets/Teams/rishika.jpeg';
import sharad from '../assets/Teams/sharad.jpeg';
import tejas from '../assets/Teams/tejas.jpeg';
import vanya from '../assets/Teams/vanya.jpeg';
import raunak from '../assets/Teams/raunak.jpg';
import brihad from '../assets/Teams/brihad.jpg';
import nishita from '../assets/Teams/nishita sinha.jpg';
import sidhanth from '../assets/Teams/siddhant.jpg';
import karmesh from '../assets/Teams/kamresh.jpg';
import kirtan from '../assets/Teams/kirtan.jpg';
import sangini from '../assets/Teams/sagini.jpg';
import jeevika from '../assets/Teams/jivika.jpg';
import akshit from '../assets/Teams/akshit.jpg';
import riya from '../assets/Teams/riya.jpeg';
import kanishq from '../assets/Teams/kanishq.jpg';
import shiva from '../assets/Teams/shiva.jpg';
import ananya from '../assets/Teams/ananya.jpg';
import Paridhi from '../assets/Teams/pridhi.jpg';
import bhumika from '../assets/Teams/bhumika.jpg';
import anusha from '../assets/Teams/anusha.jpg';
import dikshant from '../assets/Teams/dikshant.jpeg';
import riddhi from "../assets/Teams/riddhi.jpeg";
import lavanaya from "../assets/Teams/lavanya.jpg";


function Team() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    return (
        <div>
            <div className="bgTeam">
                <Topbar />
            </div>
            <div data-aos="zoom-in" className="section1">
                <div className="team-cont">
                    <div className="area1 area">
                        <h1 className="team">MEET THE TEAM</h1>
                        <div className="top"></div>
                        <div className="bottom">
                            <div className="t1" style={{ fontSize: '15px' }}>
                                WHERE DO YOU FIT IN?
                            </div>
                            <p style={{ fontSize: '10px', alignContent: 'center' }}>
                                We’ve been at the forefront of innovation with regard to teaching technical fields and student engagement. We prioritize personal growth over professional progress, and this ensures that you'll never be stagnant in the Core Committees.
                            </p>
                            <div className="button">Find Out</div>
                        </div>
                    </div>
                    <div className="area2 area">
                        <div className="top">
                            <div className="c">
                                <svg
                                    viewBox="0 0 64 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M50.64 0.270224C46.9 0.160224 43.33 1.55022 40.63 4.16022C37.93 6.77022 36.45 10.2902 36.45 14.0402C36.45 21.1502 41.85 27.0102 48.76 27.7402C47.24 31.7402 43.02 35.2502 40.47 37.0902C39.23 37.9802 38.51 39.4202 38.51 40.9202C38.51 41.7702 38.73 42.5902 39.16 43.3302C39.86 44.5002 40.99 45.3302 42.31 45.6402C42.64 45.7102 42.98 45.7302 43.31 45.7302C44.29 45.7302 45.22 45.4502 46.03 44.8802C49.27 42.6402 52.21 40.2002 54.75 37.6402C60.63 31.7002 64 23.3102 64 14.5802C64 6.91022 58 0.510224 50.64 0.270224ZM14.18 0.270224C10.44 0.160224 6.87 1.55022 4.17 4.16022C1.48 6.77022 0 10.3002 0 14.0402C0 21.1502 5.4 27.0102 12.31 27.7402C10.79 31.7402 6.57 35.2502 4.02 37.0902C2.8 37.9802 2.06 39.4202 2.06 40.9202C2.06 41.7702 2.28 42.5902 2.73 43.3302C3.4 44.5002 4.54 45.3302 5.86 45.6402C6.19 45.7102 6.53 45.7302 6.88 45.7302C7.84 45.7302 8.79 45.4502 9.58 44.8802C12.82 42.6402 15.76 40.2002 18.3 37.6402C24.15 31.7002 27.52 23.3002 27.52 14.5802C27.54 6.91022 21.56 0.510224 14.18 0.270224Z"
                                        fill="white"
                                    />
                                </svg>
                                <p style={{ fontSize: '12px', alignContent: 'center' }}>
                                    “Teamwork is the ability to work together towards a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.”
                                </p>
                            </div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                    <div className="area3" />
                </div>
            </div>


            {/* <div className="section2">
                <div className="container-fluid">
                    <h className="aluiHeading2">Hear from our alumni</h> <br />
                    <h className="aluiPara">“Any institutions' alumni are key to its growth.” <br />Know here about what our seniors have to say about their voyage as proud members of the
                        ACM family.
                    </h>
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
                </div>
            </div> */}


            <div className="section3">
                <div className="text">
                    <div className="t1">Commitees to choose from</div>
                    <p></p>
                </div>
                <div className="commitee-cont">
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>Events</h1>
                                <p>
                                    <br />
                                    The Events committee is responsible for all the fun and exciting events conducted by UPES ACM & UPES ACM-W Student Chapters. The events committee plans out the events & coordinates with the other committees to execute them with perfection.
                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>Editorial</h1>

                                <p>
                                    <br />
                                    Responsible for all the written communication for UPES ACM & UPES ACM-W Student Chapters, the Editorial committee plays a major role in this chapter. Ranging from captions for the Chapters' social media platforms to reports about the Chapters' progress, this committee handles it all.
                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>PR & Sponsorship</h1>

                                <p>
                                    <br />
                                    The face of UPES ACM and UPES ACM-W Student Chapters, PR & Sponsorship does what the name suggests. They make sure that the activities conducted by the Chapter are reaching its audience and maintain an active relationship between the Chapter and students.

                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>Design & VFX</h1>
                                <p>
                                    <br />
                                    The creative house of UPES ACM and UPES ACM-W Student Chapters, the design & VFX committee, cater towards the people with an artistic mind, comes up with all the visually appealing and aesthetic posters and videos for the Chapter.

                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>Technical</h1>
                                <p>
                                    <br />
                                    The backbone of UPES ACM & UPES ACM-W Student Chapters, the technical committee handles all things technical, from our website to the platforms where we conduct our coding events.<br /><br /> Perfect for the Tech Geeks, this committee will push your tech skills to the next level.

                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="ccc">
                        <div className="text">
                            <div className="c">
                                <h1>CSR</h1>
                                <p>
                                    <br />
                                    Corporate Social Responsibility (CSR) committee of UPES ACM & UPES ACM-W Student Chapters takes care of the events that are conducted for a social cause because we believe in giving back to society. The best deed is to help the ones in need and our CSR committee is a reflection of that idea.

                                </p>
                                {/* <button style={{ backgroundColor: 'transparent' }} onClick={executeScroll} className="button">Meet the heads</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div data-aos="flip-up" className="team">
                    <h1>Faculty Coordinater</h1>
                    <div className="cont">
                        <div className="ccc">
                            <div className="circle" />
                            <h1>Mr. Pankaj Badoni</h1>
                            <p>
                                It has been 6 years since I joined UPES ACM, and these past few years have been
                                exciting and extremely successful for us. We have won several national and
                                international awards for our hard work. Our annual event, Prodigy, has been a
                                massive success for the past five years and I'm proud to say that UPES ACM
                                hasn't ever hesitated from helping whenever possible, which can be seen in our
                                outstanding CSR events and the collaborations.
                            </p>
                        </div>
                        <div className="image"></div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'white', width: '100%', paddingBottom: '5%' }}>

                <div className="container">
                    <div className="row">
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%' }} src={sharad} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Sharad Singhania</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={tejas} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Tejas Trivedi</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={ayush} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Ayush Kumar</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={raunak} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Raunak Gupta</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={karmesh} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Karmesh Duggar</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={lavanaya} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Lavanya Tulsian</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={riddhi} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Riddhi Singh</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Board of Executives</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="slide-left" className="col-md-6 col-xs-12">
                            <div className="" style={{ color: 'black', paddingTop: '5%' }}>
                                <p>
                                    The board of executives are the seniors who have worked hard for this chapter and now act as mentors for the upcoming Office Bearers to guide them and drive the chapter to greatness.
                                </p>
                                <div className="">
                                    <h2 className="executiveText">BOARD OF</h2>
                                    <h1 className="executiveText" style={{ color: '#0087BE' }} >EXECUTIVES</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section5" style={{ backgroundColor: '#221F1F', width: '100%', paddingBottom: '5%' }}>
            <div ref={myRef} className="text">
                    <h1>EXECUTIVES</h1>
                    <p style={{color:'white'}}>
                        The backbone of our chapter, the Executive ensure that the chapter runs smoothly and efficiently under their leadership and strive to keep the chapter reaching for greatness.
                    </p>
                </div>

                <div className="container">
                    <div className="row">
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={sharad} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Sharad Singhania</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Chairperson</div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={brihad} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Brihad Gunapu</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Vice-Chairperson</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={nishita} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Nishita Sinha</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Treasurer</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={aditya} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Aditya Pilani</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Secretary</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={sidhanth} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Sidhanth Bansal</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint Secretary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section5">
                <div ref={myRef} className="text">
                    <h1>OFFICE BEARERS</h1>
                    <p>
                    The Office Bearers work day and night to put all the plans into action. This is the force hustling behind the scenes to deliver quality work in time.
                    </p>
                </div>
                <div className="container">
                    <div className="row">


                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={karmesh} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Karmesh Duggar</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Technical Head</div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={kirtan} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Kirtan Dua</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint Technical Head</div>
                                </div>
                            </div>
                        </div>
                        {/* <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={sharad} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Sharad Singhania</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Technical Head</div>
                                </div>
                            </div>
                        </div> */}
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={sangini} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Sangini Miharia</div>
                                <div className="overlaypro">
                                    <div className="textpro2">PR and Sponsorship Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={jeevika} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Jeevika Tuli</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint PR and Sponsorship Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={akshit} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Akshit Gandotra</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Event Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src="https://firebasestorage.googleapis.com/v0/b/acm-acmw-app-6aa17.appspot.com/o/riya.jpeg?alt=media&token=4796966f-15ea-4b5f-a497-6fa9b77b6c72" alt="Avatar" className="imagepro" />
                                <div class="bottomText">Riya Saxena</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint Event Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={kanishq} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Kanishq Kalra</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Editorial Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={shiva} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Muchukota Shiva</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint Editorial Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={ananya} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Ananya Mathur</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Design Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={Paridhi} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Paridhi Goyal</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint Design Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={bhumika} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Bhumika Chauhan</div>
                                <div className="overlaypro">
                                    <div className="textpro2">VFX Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src="https://firebasestorage.googleapis.com/v0/b/acm-acmw-app-6aa17.appspot.com/o/anusha.jpg?alt=media&token=9788b58a-6ff6-452c-8dc2-08ad64854f7c" alt="Avatar" className="imagepro" />
                                <div class="bottomText">Anusha Tripathi</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Joint VFX Head</div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={dikshant} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Dikshant Gaur</div>
                                <div className="overlaypro">
                                    <div className="textpro2">CSR Head</div>
                                </div>
                            </div>
                        </div>
                        {/* <div data-aos="flip-up" className="col-md-3 col-xs-12">
                            <div className="containerpro">
                                <img style={{ width: '100%', height: '60vh' }} src={vishwas} alt="Avatar" className="imagepro" />
                                <div class="bottomText">Vishwas Tiwari</div>
                                <div className="overlaypro">
                                    <div className="textpro2">Sponsorship Head</div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            {/* <div data-aos="zoom-in" className="section6">
                <div className="text">
                    <div className="t11">JOIN THE COMNMUNITY TODAY</div>
                </div>
                <img src={a} alt="loading..." />
            </div> */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Team;