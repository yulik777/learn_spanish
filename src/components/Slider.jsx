import React, { useState } from "react";
import Card from "./Card.jsx";
import translations from '../App';


function Slider({translations}) {
  const [slideIndex, setSlideIndex] = useState(1);

  const elements = translations.map((translation) => {
    const { id, ...translationProps } = translation;
    return <Card key={id} id={id} {...translationProps}></Card>;
  });


  const right = () => {
    if (slideIndex !== translations.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === translations.length) {
      setSlideIndex(1);
    }
  };

  const left = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(translations.length);
    }
  };

  
  return (
    <div className="slider">
      <button className="left" onClick={left}>
  hhhhh
      </button>
      <div>{elements[slideIndex - 1]}</div>
      <button className="right" onClick={right}>
      hhhhh
      </button>
    </div>
  );
}

export default Slider;