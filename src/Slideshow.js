import React, { useState } from "react";
import FadeIn from "react-fade-in";
import Card from "./ProjectCard";
import "./Slideshow.css";

const Slideshow = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const goPrevious = () => {
        setIsVisible(false);
        const isFirst = currentIndex === 0;
        setTimeout(() => {
            const newIndex = isFirst? items.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
            setIsVisible(true);
        }, 250);
    };

    const goNext = () => {
        setIsVisible(false);
        const isLast = currentIndex === items.length - 1;
        setTimeout(() => {
            const newIndex = isLast? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
            setIsVisible(true);
        }, 250);
    };

    return (
        <div className="slideshow-container">
            <button onClick={goPrevious} className="arrow left">&#10094;</button>

            <div className="slide-background">
                <FadeIn className={`slide ${isVisible? 'visible' : ''}`} key={currentIndex}>
                    {items && <Card project={items[currentIndex]} />}
                </FadeIn>
            </div>
            <button onClick={goNext} className="arrow right">&#10095;</button>
        </div>
    );
};

export default Slideshow;