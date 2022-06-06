import React, {useState} from "react";
import './assets/styles/card.scss';
import './Play';



function Card (props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
      }

  return (

    <div className="card">
      <div className="card__spanish">{props.spanish}</div>
      {/*<img сlassName="card__image" src={(`images/${props.image}`)} alt="img"/>*/}
      <div onClick = {handleChange}>
                {pressed ?
                <div> <img сlassName="card_image" src={(`images/${props.image}`)} alt="img"/>
                    <div className="card_translation">{props.translate}
                   </div> </div>
                    :
                    <button className="translate">TRANSLATE</button>}
            </div>
    </div>
  );
}

export default Card;

