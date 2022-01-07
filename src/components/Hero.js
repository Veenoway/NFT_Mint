import { NavLink } from "react-router-dom"
import Navigation from "./Navigation"
import video from "../img/test.mp4"
import About from "./About"
import React, { useEffect, useState } from 'react';

// gallus.mp4

const Hero = () => {
 const [test, setTest] = useState('');
    useEffect(() => {
        setTest('Voici le nouvel etat');
    },[]);

    

 

    


    console.log(test)
    return (

        <div className="hero" id="hero">
            <Navigation />
            <a href="/" className="hero-openSea">
                View on OpenSea
            </a>
            
            <div className="hero-video-container">
                <video id="hero-video" className="hero-video" preload playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            

        </div>
    )

}

export default Hero;