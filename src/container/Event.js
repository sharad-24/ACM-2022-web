import React from "react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import '../css/event.css';
import Topbar from '../component/navbar';
import Footer from '../component/footer';
// import EventDetails from "../component/eventDetails";
import EventGallery from "../component/eventGallery";


import csf from '../assets/image/csf workshop.jpg';

function Event() {

    return (
        <div>
            <div className="bgImageEventPage">
                <Topbar />
            </div>
            <div>
                <EventGallery photo={csf} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Event;