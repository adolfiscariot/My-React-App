import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
        <div className= 'about-background-image-container'>
            <img src = {AboutBackground} alt = '' />
        </div>
        <div className="about-section-image-container">
            <img src = {AboutBackgroundImage} alt ='' />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading"> About </p>
            <h1 className="primary-heading">YESIRRRRR!!</h1>
            <p className="primary-text">nimesema</p>
            <p className="primary-text">yes sir</p>
            <button className="secondary-button"> Learn More </button>
            <button className = 'watch-video-button'>
                <BsFillPlayCircleFill/> Watch Video
            </button>
        </div>
    </div>
  );
};

export default About;