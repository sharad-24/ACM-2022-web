import React, {useEffect, useState} from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../css/contact.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
import {db} from '../firebase';

import mail from '../assets/image/mail.png';
import call from '../assets/image/call.png';
import icon from '../assets/image/icon.png';

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert("Message has been submitted")

        })
        .catch(error => {
            alert(error.message);
        })

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>

            <div className="bg-img">
            <Topbar />
                <div data-aos="zoom-in" className="container">

                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="header">CONTACT US</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="f">
                                        <input type="text" className="fields" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="f">
                                        <input type="text" className="fields" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="f">
                                        <textarea className="fields" rows="4" placeholder="Send us a message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <div className="f">
                                        <button className="send">SEND</button>
                                    </div>
                                </form>
                            </div>
                            <br /><br /><br />
                        </div>
                        <div className="row">
                            <div className="col ">
                                <div className="row d-flex justify-content-evenly">
                                    <div className="col-md-4">
                                        <div className="gap">
                                            <img className="" src={icon} alt="" />
                                            <span className="size">UPES Energy Acres,<br />
                                                Bidholi,<br />
                                                Dehradun-248007, Uttarakhand, India
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="gap">
                                            <img src={call} alt="" />
                                            <span className="size">+91 755 4937322, 4937822</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="gap">
                                            <img className="" src={mail} alt="" />
                                            <span className="size"> acminfo@gmail.com <br />
                                                acminfo@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;