import React, { useState } from "react";
import FadeIn from "react-fade-in";
import Card from "./ProjectCard";
import WorkCard from "./WorkCard";
import "./Slideshow.css";

const Slideshow = ({ items, category }) => {
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

  const renderItem = () => {
    const item = items[currentIndex];

    if (category === "Work Experience") {
      return <WorkCard work={item} />;
    } else {
      return <Card project={item} />;
    }
  };

    return (
        <div>
        <div className="slideshow-container">
            <button onClick={goPrevious} className="arrow left">&#10094;</button>

            <div className="slide-background">
                <FadeIn className={`slide ${isVisible? 'visible' : ''}`} key={currentIndex}>
                    {renderItem()}
                </FadeIn>
            </div>
            <button onClick={goNext} className="arrow right">&#10095;</button>
        </div>
        <div className="dots">
  {items.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentIndex ? 'active' : ''}`}
      onClick={() => setCurrentIndex(index)}
      role="button"
      tabIndex="0"
      aria-label={`Go to slide ${index + 1}`}></span>
  ))}
</div>
</div>
    );
};

export default Slideshow;