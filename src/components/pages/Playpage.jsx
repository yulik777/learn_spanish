import Slider from "../Slider.jsx";
import {translations as words} from '../Main';


function Game() {
  return (
    <div className="play">
      <Slider words={words}/>
    </div>
  );
}

export default Game;