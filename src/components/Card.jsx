import React, {useState} from "react";
import './assets/styles/card.scss';

function Card (props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
      }

  return (

    <div className="card">
      <div className="card__spanish">{props.spanish}</div>
     {/*} <img сlassName="card__image" src={props.image} alt="img"/>*/}
      <div onClick = {handleChange}>
                {pressed ?
                    <div className="card_translation">{props.translate} {props.image} </div> :
                    <button className="translate">TRANSLATE</button>}
            </div>
    </div>
  );
}

export default Card;

