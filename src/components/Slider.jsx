import React, { useState } from "react";
import Card from "./Card.jsx";
import words from './Main.jsx';
import './assets/styles/slider.scss';


function Slider ({words}) {
  const [slideIndex, setSlideIndex] = useState(1);

  const elements = words.map((words) => {
    const { id, ...wordsProps } = words;
    return <Card key={id} id={id} {...wordsProps}></Card>;
  });


  const right = () => {
    if (slideIndex !== words.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === words.length) {
      setSlideIndex(1);
    }
  };

  const left = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(words.length);
    }
  };

  
  return (
    <div className="slider">
      <div className="pictures">{elements[slideIndex - 1]}</div>
      <div className="rightleft">
      <button className="left" onClick={left}> &#8592;</button>
      <button className="right" onClick={right}>&#8594;</button>
      </div>
    </div>
   
  );
}

export default Slider;