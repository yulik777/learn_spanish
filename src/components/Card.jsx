import React, {useState} from "react";

function Card (props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
      }

  return (

    <div className="card">
      <div className="card__spanish">{props.spanish}</div>
      <div className="card__translate">{props.translate}</div>
      <div className="button_show_spanish" onClick = {handleChange}>{pressed ? <div>{props.english}</div> : <button className="button_show">Translate</button>}</div>
    </div>
  
  );
}

export default Card;

