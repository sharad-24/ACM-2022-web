import React, { useState } from "react";
import PropTypes from 'prop-types';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';
import crossicon from '../assets/image/1024px-VisualEditor_-_Icon_-_Close_-_white.svg.png';

import '../css/prodigy.css';
import './component.css';

import csrProfile from '../assets/csr/csrProfile.png';
import csrProfile2 from '../assets/csr/csrProfile2.png';
import csrProfile3 from '../assets/csr/csrProfile3.png';
import csrProfile4 from '../assets/csr/csrProfile4.png';
import csrProfile5 from '../assets/csr/csrProfile5.png';
import csrProfile6 from '../assets/csr/csrProfile6.png';
import csrProfile7 from '../assets/csr/csrProfile7.png';
import csr1 from '../assets/csr/csr.png';
import csr2 from '../assets/csr/csr1.png';
import csr3 from '../assets/csr/csr2.png';
import csr4 from '../assets/csr/csr4.png';
import csr5 from '../assets/events/HOC.jpeg';
import csr6 from '../assets/events/HOC2.jpeg';
import csr7 from '../assets/events/HOC3.jpeg';
import csr8 from '../assets/csr/csr5.png';
import csr9 from '../assets/csr/csr6.png';
import csr10 from '../assets/csr/csr7.png';
import HOC20171 from '../assets/csr/2017 HourOfCode/2017-HOC...jpg';
import HOC20172 from '../assets/csr/2017 HourOfCode/2017-HOC..jpg';
import HOC20173 from '../assets/csr/2017 HourOfCode/2017-HOC.jpg';
import GS20171 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School..............jpg';
import GS20172 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School...........jpg';
import GS20173 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School........jpg';
import GS20174 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School......jpg';
import LT20181 from '../assets/csr/2017-18 Learning Tree/2017-18 Learning Tree.....jpg';
import LT20182 from '../assets/csr/2017-18 Learning Tree/2017-18 Learning Tree....jpg';
import LT20183 from '../assets/csr/2017-18 Learning Tree/2017-18 Learning Tree..jpg';
import GS20181 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School.....jpg';
import GS20182 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School...jpg';
import GS20183 from '../assets/csr/2017-18 Govt. Pre School/2017 Govt Pree School.jpg';
import UT20181 from '../assets/csr/2018 U-Turn/2018-UTurn...jpg';
import UT20182 from '../assets/csr/2018 U-Turn/2018-UTurn..jpg';
import UT20183 from '../assets/csr/2018 U-Turn/2018-UTurn.jpg';
import ATF20191 from '../assets/csr/2018-19 Aasra Trust/2018-19 Aaasra................jpg';
import ATF20192 from '../assets/csr/2018-19 Aasra Trust/2018-19 Aaasra...........jpg';
import ATF20193 from '../assets/csr/2018-19 Aasra Trust/2018-19 Aaasra..........jpg';
import AW20191 from '../assets/csr/2018-19 Anmol Welfare/2018-19 Anmol Welfare........jpg';
import AW20192 from '../assets/csr/2018-19 Anmol Welfare/2018-19 Anmol Welfare.....jpg';
import AW20193 from '../assets/csr/2018-19 Anmol Welfare/2018-19 Anmol Welfare....jpg';
import Nepal2017 from '../assets/csr/2015-2016 Nepal Relief Fund/2015-2016 Nepal Relief Fund..jpg';
import GPU20161 from '../assets/csr/2015-2016 Visiting GUPS/2015-2016 Visiting GUPS...png.jpg';
import School20161 from '../assets/csr/2016-17 Baluni Public School/2016-17 Baluni Public School,,.jpg';
import School20162 from '../assets/csr/2016-17 Baluni Public School/2016-17 Baluni Public School,.,.jpg';
import School20163 from '../assets/csr/2016-17 Baluni Public School/2016-17 Baluni Public School...jpg';
import School20164 from '../assets/csr/2016-17 Baluni Public School/2016-17 Baluni Public School.jpg';
import teaching2016 from '../assets/csr/2016-17 Teaching Session/2016-17 Teaching Session.png';
import GT20171 from '../assets/csr/2017-18 Teach Girls/2017-18 Teach Girls,.,..jpg';
import GT20172 from '../assets/csr/2017-18 Teach Girls/2017-18 Teach Girls,.jpg';
import GT20173 from '../assets/csr/2017-18 Teach Girls/2017-18 Teach Girls..jpg';
import HOC20181 from '../assets/csr/2018-19 Hour of Code/2018-19 Hour of Code...jpg';
import HOC20191 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC,,,..jpg';
import HOC20192 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC,.jpg';
import HOC20193 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC.,.,.,.,.jpg';
import HOC20194 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC.,.,..jpg';
import TB20191 from '../assets/csr/2018-19 Teaching in Bakarna/2018-19 Teaching in Bakarna,..jpg';
import TB20192 from '../assets/csr/2018-19 Teaching in Bakarna/2018-19 Teaching in Bakarna...jpg';
import TB20193 from '../assets/csr/2018-19 Teaching in Bakarna/2018-19 Teaching in Bakarna.jpg';
import HOC20201 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC.,.jpg';
import HOC20202 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC............jpg';
import HOC20203 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC....jpg';
import HOC20204 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC...jpg';
import teaching2018 from '../assets/csr/2019-20 HourOfCode/2019-20 HOC.jpg';
import cyber20201 from '../assets/csr/2019-2020 Cyberlaws Dealing with Cyberspace/2019-2020 Cyberlaws Dealing with Cyberspace,,,,,.jpg';
import cyber20202 from '../assets/csr/2019-2020 Cyberlaws Dealing with Cyberspace/2019-2020 Cyberlaws Dealing with Cyberspace,..jpg';
import cyber20203 from '../assets/csr/2019-2020 Cyberlaws Dealing with Cyberspace/2019-2020 Cyberlaws Dealing with Cyberspace........jpg';
import cyber20204 from '../assets/csr/2019-2020 Cyberlaws Dealing with Cyberspace/2019-2020 Cyberlaws Dealing with Cyberspace.....jpg';
import saakshar from '../assets/csr/saakshar.jpeg';





function CsrGallery({ photo }) {

    const [isShownEG1, setIsShownEG1] = useState(false);
    const [isShownEG2, setIsShownEG2] = useState(false);
    const [isShownEG3, setIsShownEG3] = useState(false);
    const [isShownEG4, setIsShownEG4] = useState(false);
    const [isShownEG5, setIsShownEG5] = useState(false);
    const [isShownEG6, setIsShownEG6] = useState(false);
    const [isShownEG7, setIsShownEG7] = useState(false);
    const [isShownEG8, setIsShownEG8] = useState(false);
    const [isShownEG9, setIsShownEG9] = useState(false);
    const [isShownEG10, setIsShownEG10] = useState(false);
    const [isShownEG11, setIsShownEG11] = useState(false);
    const [isShownEG12, setIsShownEG12] = useState(false);
    const [isShownEG13, setIsShownEG13] = useState(false);
    const [isShownEG14, setIsShownEG14] = useState(false);
    const [isShownEG15, setIsShownEG15] = useState(false);
    const [isShownEG16, setIsShownEG16] = useState(false);
    const [isShownEG17, setIsShownEG17] = useState(false);
    const [isShownEG18, setIsShownEG18] = useState(false);
    const [isShownEG19, setIsShownEG19] = useState(false);
    const [isShownEG20, setIsShownEG20] = useState(false);
    const [isShownEG21, setIsShownEG21] = useState(false);
    const [isShownEG22, setIsShownEG22] = useState(false);
    const [isShownEG23, setIsShownEG23] = useState(false);
    const [isShownEG24, setIsShownEG24] = useState(false);
    const [isShownEG25, setIsShownEG25] = useState(false);
    const [isShownEG26, setIsShownEG26] = useState(false);
    const [isShownEG27, setIsShownEG27] = useState(false);
    const [isShownEG28, setIsShownEG28] = useState(false);

    const [slideOutEG, setSlideOutEG] = useState(true);
    const [isHiddenEG, setIsHiddenEG] = useState(true);
    const [twentyone, setTwentyone] = useState(true);
    const [twenty, setTwenty] = useState(true);
    const [nienteen, setNienteen] = useState(true);
    const [eighteen, setEighteen] = useState(true);
    const [seventeen, setSeventeen] = useState(true);
    const [sixteen, setSixteen] = useState(true);

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);
    const [active4, setActive4] = useState(true);
    const [active5, setActive5] = useState(true);
    const [active6, setActive6] = useState(true);


    const handleAll = () => {
        setActive(false);
        setActive1(true);
        setActive2(true);
        setActive3(true);
        setActive4(true);
        setActive5(true);
        setActive6(true);
        setTwentyone(true);
        setTwenty(true);
        setNienteen(true);
        setEighteen(true);
        setSeventeen(true);
        setSixteen(false);


    };
    const handleTwentyone = () => {
        setActive(true);
        setActive1(false);
        setActive2(true);
        setActive3(true);
        setActive4(true);
        setActive5(true);
        setActive6(true);
        setTwentyone(true);
        setTwenty(false);
        setNienteen(false);
        setEighteen(false);
        setSeventeen(false);
        setSixteen(false);

    };
    const handleTwenty = () => {
        setActive(true);
        setActive1(true);
        setActive2(false);
        setActive3(true);
        setActive4(true);
        setActive5(true);
        setActive6(true);
        setTwentyone(false);
        setTwenty(true);
        setNienteen(false);
        setEighteen(false);
        setSeventeen(false);
        setSixteen(false);

    };
    const handleNienteen = () => {
        setActive(true);
        setActive1(true);
        setActive2(true);
        setActive3(false);
        setActive4(true);
        setActive5(true);
        setActive6(true);
        setTwentyone(false);
        setTwenty(false);
        setNienteen(true);
        setEighteen(false);
        setSeventeen(false);
        setSixteen(false);

    };
    const handleEighteen = () => {
        setActive(true);
        setActive1(true);
        setActive2(true);
        setActive3(true);
        setActive4(false);
        setActive5(true);
        setActive6(true);
        setTwentyone(false);
        setTwenty(false);
        setNienteen(false);
        setEighteen(true);
        setSeventeen(false);
        setSixteen(false);

    };
    const handleSeventeen = () => {
        setActive(true);
        setActive1(true);
        setActive2(true);
        setActive3(true);
        setActive4(true);
        setActive5(false);
        setActive6(true);
        setTwentyone(false);
        setTwenty(false);
        setNienteen(false);
        setEighteen(false);
        setSeventeen(true);
        setSixteen(false);

    };

    const handleSixteen = () => {
        setActive(true);
        setActive1(true);
        setActive2(true);
        setActive3(true);
        setActive4(true);
        setActive5(true);
        setActive6(false);
        setTwentyone(false);
        setTwenty(false);
        setNienteen(false);
        setEighteen(false);
        setSeventeen(false);
        setSixteen(true);

    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="pagination">
                            <button className={active ? "paginationButton" : "underline"} onClick={handleAll}>ALL</button>
                            <button className={active1 ? "paginationButton" : "underline"} onClick={handleTwentyone}>2021</button>
                            <button className={active2 ? "paginationButton" : "underline"} onClick={handleTwenty}>2020</button>
                            <button className={active3 ? "paginationButton" : "underline"} onClick={handleNienteen}>2019</button>
                            <button className={active4 ? "paginationButton" : "underline"} onClick={handleEighteen}>2018</button>
                            <button className={active5 ? "paginationButton" : "underline"} onClick={handleSeventeen}>2017</button>
                            <button className={active6 ? "paginationButton" : "underline"} onClick={handleSixteen}>2016</button>

                        </div>
                    </div>
                </div>
            </div>

            {isHiddenEG && (
                <Animated animationIn={slideOutEG ? "fadeIn" : "fadeOut"} animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                    <div className="event_gallery container">
                        <div className="row">
                            {twentyone && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG1(true) + setIsHiddenEG(false)} src={csr1} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG2(true) + setIsHiddenEG(false)} src={saakshar} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG3(true) + setIsHiddenEG(false)} src={csr6} alt="logos" /> </center>
                                    </div>
                                </>
                            )}
                            {twenty && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG4(true) + setIsHiddenEG(false)} src={cyber20201} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG5(true) + setIsHiddenEG(false)} src={csr8} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG6(true) + setIsHiddenEG(false)} src={HOC20201} alt="logos" /> </center>
                                    </div>


                                </>
                            )}

                            {nienteen && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG7(true) + setIsHiddenEG(false)} src={csrProfile5} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG8(true) + setIsHiddenEG(false)} src={csrProfile} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG11(true) + setIsHiddenEG(false)} src={HOC20191} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG12(true) + setIsHiddenEG(false)} src={TB20191} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG13(true) + setIsHiddenEG(false)} src={csrProfile2} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG14(true) + setIsHiddenEG(false)} src={csrProfile6} alt="logos" /> </center>
                                    </div>
                                </>
                            )}

                            {eighteen && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG16(true) + setIsHiddenEG(false)} src={csrProfile3} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG17(true) + setIsHiddenEG(false)} src={GT20171} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG18(true) + setIsHiddenEG(false)} src={csrProfile4} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG19(true) + setIsHiddenEG(false)} src={HOC20181} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG20(true) + setIsHiddenEG(false)} src={UT20181} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG22(true) + setIsHiddenEG(false)} src={teaching2018} alt="logos" /> </center>
                                    </div>
                                </>
                            )}

                            {seventeen && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG23(true) + setIsHiddenEG(false)} src={HOC20171} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG24(true) + setIsHiddenEG(false)} src={GS20171} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG25(true) + setIsHiddenEG(false)} src={Nepal2017} alt="logos" /> </center>
                                    </div>

                                </>
                            )}

                            {sixteen && (
                                <>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer' , width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG26(true) + setIsHiddenEG(false)} src={GPU20161} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer' , width: '100%', height: '50vh' , marginBottom: '10%'}} onClick={() => setIsShownEG27(true) + setIsHiddenEG(false)} src={School20161} alt="logos" /> </center>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <center> <img className="hoverBlur" style={{ cursor: 'pointer', width: '100%', height: '50vh' , marginBottom: '10%' }} onClick={() => setIsShownEG28(true) + setIsHiddenEG(false)} src={teaching2016} alt="logos" /> </center>
                                    </div>

                                </>
                            )}


                        </div>
                    </div>
                </Animated>
            )}

            {isShownEG1 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG1(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csr1} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Building Dreams Foundation </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM Student Chapter's CSR team has partnered with the Building Dreams Foundation, a non-profit organization based in Puremunagaru, Tera, to host an online CSR event that promotes the development of underprivileged children and the community. It was a 1 hour 30 minutes Google Meets session from 11 am to 12:30 pm. The children were divided into two categories: 1st to 5th grade, and 6th to 9th grade. The kids learned the basics of computers and coding. The training was successfully conducted by the CSR head and team. Given that the kids weren't completely familiar with computers and coding, it was an engaging session. We taught them using a PowerPoint presentation. The owners of the NGO, like the students, were very happy with the team. This is the second partnership of UPES ACM  and ACM-W Student Chapters with the Building Dreams Foundation, and we hope to continue going forward.
                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr2} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr3} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr4} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG2 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG2(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={saakshar} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Women Techprenuers</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Following today's burgeoning era and the vulnerabilities it entails, the long-awaited seminar 'Women Techprenuers' was held. An important topic such as Imposter Syndrome and its impact on women, and measures to being able to perform productively with its impact, in particular, were discussed in detail. A total of 85 girls and boys actively participated in the event. The series also described various scholarship programs and coding events across the country, after providing some tips for writing and designing resumes. It also included some suggestions for receiving and benefiting from scholarships. It was a session that gave practical enlightenment.

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

            {isShownEG3 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG3(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csr5} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hour of Code</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        HourofCode, launched in April 2015, provides a platform for realizing the dynamic image of women in the technology field and honing technology skills in the business by UPES ACM Student Chapter. Hour of Code aims to integrate basic computing skills with the existing curriculum. The latest representation of this initiative was in collaboration with Government Girls Senior Secondary School and ShardaSen Rajkiye Kanya Vidyalaya, Trilokpuri, thanks to the CSR Committee. The session helped develop coding skills from scratch, through a Google Meet where girls in grades 9 and 10 participated in the program. Several primitives in the C language were divided into session time slots, each time slot covered. The session turned out to be very informative and all participants maintained the session very interactively.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr5} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr6} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr7} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG4 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="template container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG4(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={cyber20201} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Cyberlaws: Dealing with Cyberspace</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        As the internet grows more popular, so does the user base. And with numerous people using the internet, the risk of cybercrimes goes up as well. Therefore, UPES ACM & ACM-W Student Chapters organized an online cyber week with the topic, "Cyber Laws-Dealing with the CyberSpace”. The goal of this initiative was to educate the general public regarding the cyber laws in our country. The session was divided across seven days, and on each day, we covered one crucial aspect of cyberlaw and cyberspace.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={cyber20202} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={cyber20203} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={cyber20204} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG5 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG5(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csr8} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Building Dreams Foundation</h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Giving back to society is the greatest deed one can do, and we at UPES ACM & ACM-W Student Chapters believe that to the core. And one of our ventures, where we teamed up with the Building Dreams Foundation, is a reflection of that. The CSR team of our chapter hosted a two-hour session with many underprivileged kids between the age of 8 to 13 years. We taught them the basics of computers, how a computer works, and other similar stuff, which surely ignited a passion for tech in those young minds. Seeing those kids smile when we taught them about computers truly made our day!

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr8} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr9} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={csr10} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG6 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG6(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={HOC20201} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hour of Code </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM & ACM-W Student Chapters aim at educating through courses that include computational thinking, interactive learning, and topics that students can relate to in real-time situations and problems. Therefore, to do so, our CSR team each year marks our presence by participating in Hour of Code. This year, our CSR team visited the ‘Doon Presidency School’ to teach the students of 8th grade during the Computer Science Education week. The students were quite nervous before the session, but our CSR made sure that they felt comfortable and carried out the whole session quite well.

                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20202} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20203} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20204} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG7 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG7(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile5} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Aasraa Trust Foundation </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        A giant step towards cultivating a brighter future is by contributing meaningfully to the socio-economically unprivileged sections of society. And this year UPES ACM did that by collaborating with Aasraa Trust for the Certification of Computer Application under NIOS for 11th/12th graders. Team members, shortlisted by the Chapters’ CSR Heads along with concerned authorities at Aasraa gave quality lectures to the students, with the aim for them to grab jobs in the IT sector. The course covered Computational thinking and real-life problem solving that was relatable to the students.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={ATF20191} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={ATF20192} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={ATF20193} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG8 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG8(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">U-Turn Foundation  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM joined forces with a non-profitable organization, U-turn, that works for the welfare of children. It was another exhilarating session where our team was ready with a handful of fun events, cultivating the concept of general science in them. Backyard science activities such as Baking Soda Vinegar Volcano, Light Visualization with Rainbows from CD's, captivated children’s interest and put their minds to work. It was a successful event with the effort of the team, team heads, and the foundation members, and the active involvement of the children heightened the joy.

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

           
           

            {isShownEG11 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG11(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={HOC20191} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hour of Code  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        To mark the week of Computer Science, UPES ACM organized an hour of code session with the 8th graders at Indian Public School, Dehradun. The team taught students about the abundant career choices in the field of computer science and how the knowledge of computers has become a necessity in today's era. The students were very interactive and showed interest in the discussion of Cloud Computing.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20192} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20193} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20194} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG12 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG12(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={TB20191} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Teaching in Bakarna </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        With the start of a New Year, the team of UPES-ACM was determined to empower and build the confidence of underprivileged societies. We taught the basics of English and more to 5th class students from various places like Bakarna, Misraspatti & Dehradun. We helped the students create their base in understanding the English language and improved their spoken English. The students showed active interest and were thrilled to learn with us. It was a bonding and learning event.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={TB20192} alt="pic" /></div>
                                    <div className="col-md-6 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={TB20193} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG13 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG13(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile2} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Online Fundraiser: Make a Difference   </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        We at UPES ACM believe in giving back to society. Dream Camp is the foundation that promotes the social development of disadvantaged children and communities. They focus on Food, Education, Environment, and Empowerment. The chapter aided and encouraged the online fundraiser once again in March 2019, for the Dream Camp by MAD at Raipur, Dehradun.


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

            {isShownEG14 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG14(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile6} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Anmol Welfare Education  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        The year ended with a bang! For the first time, UPES-ACM collaborated with a welfare society outside the bounds of Uttarakhand. The team worked with Anmol Educational and Welfare Society, New Delhi teaching 3rd and 5th graders Computational  Thinking with appropriate and engaging activities. Working with a team outside the state gave an exposure and set the bar higher for the upcoming years for the ACM team.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={AW20191} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={AW20192} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={AW20193} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            
            {isShownEG16 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG16(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile3} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Learning Tree </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Members of the CSR team visited Learning Tree School in the run-up to their annual function to prepare themselves for the event. It seems evident as the props for the participants were being built, that the volunteers put their heart and soul into their building and that they built each prop from the heart with the greatest of enthusiasm. As part of the volunteering program, volunteers also assisted with the preparation of a dance performance, which was an amazing experience.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={LT20181} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={LT20182} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={LT20183} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG17 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG17(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={GT20171} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Teach Girls Foundation </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Student chapters of ACM and ACM-W work for causes rather than for adulation. The sense of satisfaction that comes from contributing to society is indescribable. An enthusiastic and passionate new CSR team at Teach Girls Foundation conducted the first CSR project successfully. Teach Girls Foundation is located in slums along the Rispana River. The head and the volunteers organized various backyard science activities to introduce the children to various scientific concepts and phenomena. These activities were designed to entice more interaction.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GT20172} alt="pic" /></div>
                                    <div className="col-md-6 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GT20173} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG18 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG18(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={csrProfile4} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Visiting a Government Pre School </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        An event packed full of fun was held at a Bidholi school on November 18, 2018. First things first, the team asked the kids to introduce themselves so they could gain self-confidence. Afterward, they talked about the different festivals and how we celebrate them. Additionally, they provided them with information regarding the importance of celebrating Dussehra and Diwali. In the end, the team provided them with sheets and helped them make cards using vegetable and thumb painting. By utilizing innovative teaching aids to address their educational habits, this initiative assisted them in their holistic development.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20181} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20182} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20183} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG19 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG19(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={HOC20181} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hour of Code </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        The Hour of Code was held at the Army Public School in Birpur. The team members interacted with students in grades 6 and 7. As eager as these students were to learn, they were also interested in computers and computing. They were introduced to computers, their evolution, the current paradigm, and what lies ahead, as well as the "Why" and the "How" of computing. Through interactive sessions with basic C/C++ programming, logical thinking was enhanced through solving puzzles and riddles. A "practical implementation of Java" was explained to 11th graders. Afterward, we conducted a musical session that was enjoyable and rejuvenating for the students.



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

            {isShownEG20 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG20(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={UT20181} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">U-Turn </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        CSR team carried out various activities to benefit the children of Dehradun's Deep Nagar Slum. A whole slew of experiments was done with 20 10-12-year-olds, including those involving a small microscope, light experiments, density-oil and water, lemon circuits, etc. Experiments were related to real-world problems by the young participants, who were extremely enthusiastic about the activities. There were a bunch of fun activities throughout the day that kept them entertained instead of making them think science was boring.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={UT20182} alt="pic" /></div>
                                    <div className="col-md-6 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={UT20183} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            

            {isShownEG22 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG22(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={teaching2018} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Teaching Sessions  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Nothing brings us more joy than to be able to use our capabilities for the greater good. UPES ACM conducted a mesmerizing study session with some kids in the slums of ‘Nanda ki Chowki’. It started by taking the blessings of god and ended with students receiving prizes in a fun competition. The team divided students based on age groups and taught the relevant things. After that, an amusing drawing competition took place, where students exhibited their talents. The team members decided winners who were awarded prizes. It was a pleasant, joyful day!



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

            {isShownEG23 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG23(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={HOC20171} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Hour of Code </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Nurturing young minds in the field of technology is a solid step towards their future. As a part of the Global movement, the team of UPES ACM contributed to the same, by bearing forward the knowledge of Computer Systems to a group of 200 young children. They also taught them some basics of the C language. The session was not all academic, as the team did have some fun contests planned for the students where they contributed very actively. In the end, winners were declared and presented with prizes.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                            <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20172} alt="pic" /></div>
                                    <div className="col-md-6 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={HOC20173} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG24 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG24(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={GS20171} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Baluni Public School, Bahuwala </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        It is always enlightening to prepare the young generation with a stronger base and With this thought in mind, UPES ACM conducted a Computing session with the children of Baluni Public School, teaching them about various processes of the computing world, about career opportunities in computing to ignite their interest. It was an intriguing discussion as the topics of discussion weren't famous but curiosity amplifying.


                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20172} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20173} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={GS20174} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG25 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG25(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={Nepal2017} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Aiding the Nepal Relief Fund  </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM and ACM-W Student Chapters have always been inclined towards believing in -- “the greatest work is that of an altruist who is driven by magnanimity”. Our efforts to provide relief when Nepal took a detrimental hit by an earthquake in April 2015 further corroborates the fact.
                                        The “Gorkha earthquake” that hit Nepal measured a calamitous 7.8 on the Richter scale, one of the deadliest to ever hit Asia resulting in 8856 human casualties, more than 6,30,000 destroyed buildings, and an overall loss of $7 billion.
                                        We put our best foot forward during this nationwide peril by setting up a fundraiser program to add to the Nepal Relief Fund.



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

            {isShownEG26 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG26(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={GPU20161} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Visiting GUPS </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        One of UPES ACM and ACM-W Student Chapters’ CSR Team’s (Corporate Social Responsibility) objectives is to help people become the best versions of themselves and learning new skills is arguably the most efficacious method to do that.
                                        One such proactive venture by the CSR Team was with GUPS, Kolhupani (Uttarakhand) which involved members from our CSR team to visit the public school. The goal was to spread awareness and inflame excitement towards technology and sciences among indigent children. A promise of rewards and goodies was made with the children in exchange for their attention which tackled any case of heedlessness.



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

            {isShownEG27 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG27(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={School20161} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Baluni Public School Bhauwala </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        UPES ACM and ACM-W Student Chapters’ CSR Team’s aim in this collaboration with Baluni Public School was to incite the zeal to learn among the children.
                                        Their volunteers hosted inciteful sessions to help shape young minds in a minute but impactful ways and fostered inquisitiveness among the children. To encourage a healthy academic spirit, keen and hard-working students were presented with prizes. The naivete of the children brought back the nostalgic charm of being young and innocent.



                                    </p>
                                    <br />
                                    {/* <h5 className="event_date">Held on:</h5> */}
                                </div>
                            </div>
                             <div className="container" style={{ paddingRight: '5%', paddingLeft: '5%', paddingTop: '3%' }}>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12"><img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={School20162} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={School20163} alt="pic" /></div>
                                    <div className="col-md-4 col-xs-12"> <img style={{width: '100%', height: '60vh', marginBottom: '5%'}} src={School20164} alt="pic" /></div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            )}

            {isShownEG28 && (
                <div>
                    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={1000} >
                        <div className="templateEG container" style={{ marginBottom: '2%' }}>
                            <div onClick={() => setIsShownEG28(false) + setIsHiddenEG(true)} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', padding: '2%' }}>
                                <img src={crossicon} alt="cross" />
                            </div>
                            <div className="container template_contentbox row">
                                <div className="template_imgbox col float-left">
                                    <img src={teaching2016} className="img-fluid" alt="Posture" />
                                </div>
                                <div className="container content_template col">
                                    <h1 className="Event_name">Supporting Net Neutralityseveral </h1>
                                    <p className="event_detail" style={{ textAlign: 'left' }}>
                                        Free cyberspace is an online place where anyone can create, curate, publish and share content to their heart’s desire, without any restriction. Net Neutrality is the principle that Internet service providers must treat all Internet communications equally.
                                        In April 2016, UPES ACM and ACM-W Student Chapters’ CSR Team organized a campaign as a joint initiative between all the student chapters and computing societies of UPES to spread awareness about the importance of free cyberspace and what truly unrestricted internet ought to be. This campaign supported Net Neutrality and made people understand the gravity of the situation where they previously had no genuine control over.



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

CsrGallery.propTypes = {
    photo: PropTypes.string
}

export default CsrGallery;