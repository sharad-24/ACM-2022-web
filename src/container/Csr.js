import React, {useEffect} from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../css/csr.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import CsrGallery from "../component/csrGallery";

import img8 from '../assets/events/HOC.jpeg';
import csf from '../assets/image/csf workshop.jpg';



function Csr() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="csrGif">
                <Topbar />
            </div>
            <div style={{ backgroundColor: '#221F1F', paddingTop: '5%' }}>
                <br />
            </div>
            <div style={{ backgroundColor: 'white' }} className="whiteLine">
                <br />
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#221F1F', paddingLeft: '3%', paddingRight: '3%' }}>
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div data-aos="zoom-in" className="">
                                <br /> <br /> <br /> <br />
                                <li style={{textAlign:'left'}}>There is inherent importance in the UPES ACM and ACM-W Student Chapters of giving back to the community. It’s as if the value of giving back is woven into the fabric of our Student Chapters. The fact that we are pioneers in student engagement isn't just because we're continuously innovating in teaching technological domains, but also because public service is of the highest significance to us, and we passionately encourage every one of our Student Chapters’ members to contribute to society and not just work for themselves.</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <br /> <br /> <br /> <br />
                        <div data-aos="flip-up">
                            <img className="imageContainer" src={img8} alt="test" />
                        </div>
                        <br /> <br /><br /> <br />
                        <div>
                            <div className="Empowering">
                                <h>Enriching minds through</h>
                            </div>
                            <div>
                                <h className="bringChangeHeading2" style={{ fontSize: '68px' }}>ACM CSR</h>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
                <br /> <br /> <br /> <br />
            </div>
            <div className="container">
                <div className="row">
                    <center><br /><br />
                        <div>
                            <h className="bringChangeHeading2">BRINGING THE CHANGE</h> <br />
                        </div>
                        <div>
                            <p className="btcP font" style={{marginTop: '2%'}}>CSR at UPES ACM AND UPES ACM-W Student chapters is the integration of socially beneficial programs and practices with our culture. We intend to give back tenfold by conducting events that help forge a stronger bond between us and the rest of the world. We aim to establish long -term relationships with the society by enabling the socio-economically weaker sections and giving them a better chance at having a brighter future.</p>
                        </div><br />
                    </center>
                </div>
            </div>

            <div>
            <CsrGallery photo={csf} />
            </div>

            <div>
                <Footer />
            </div>

        </div>



    );
}

export default Csr;