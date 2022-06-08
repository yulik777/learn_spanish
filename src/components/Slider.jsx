import React, { useState } from "react";
import Card from "./Card.jsx";
import './assets/styles/slider.scss';


function Slider ({words}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [wordNumber, setwordNumber] = useState(0);
  const [wordLearned, setwordLearned] = useState([]);




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

  const addOldWord = (id) => {
    const array = [...wordLearned];
    array.push(id);
    let result = [];
    for (let str of array) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    setwordLearned(result);
    setwordNumber(result.length);
  };
  const elements = words.map((words) => {
    const { id, ...wordsProps } = words;
    return <Card key={id} id={id} addOldWord={addOldWord} {...wordsProps}/>;
  });
  return (
    <div className="slider">
      <div className="pictures">{elements[slideIndex - 1]}</div>
      <div className="rightleft">
      <button className="left" onClick={left}> &#8592;</button>
      <button className="right" onClick={right}>&#8594;</button>
      </div>

    <div className="wordcount"> You learned {wordNumber} out of {words.length} words </div>
    </div>
  
  );
}

export default Slider;