import React from 'react';
import Card from './Card';
import './assets/styles/play.scss';


let words = [
  {
    id: "01",
    spanish: "la manzana",
    image: "apple.png",
    translate: "apple",
    tags: "fruits",
    isSelected: true,
  },
  {
    id: "02",
    spanish: "el coche",
    image: "car.png",
    translate: "car",
    tags: "transport"
  
  },
  {
    id: "03",
    spanish: "la casa",
    image: "house.png",
    translate: "house",
    tags: "subjects"
  },
  {
    id: "04",
    spanish: "el vestido",
    translate: "dress",
    tags: "things"
   
  },
  {
    id: "05",
    spanish: "labios",
    translate: "lips",
    tags: "body"

  }
];


function Play(){ 
  
  return (
    <div>
    <div className={'Play'}>
      <div className='container__card'>
    {
      words.map((word) =>
      <Card key={word.spanish} spanish={word.spanish} image={word.image} translate={word.translate} tag={word.tags}></Card>
      )
  }
  </div>
</div>
    </div>
  );
}

export default Play;

