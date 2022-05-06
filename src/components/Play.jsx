
import React from 'react';
import logo from './logo.svg';

import Card from './Card';

let words = [
  {
    id: "01",
    spanish: "la manzana",
    translate: "apple",
    tags: "fruits",
    isSelected: true,
  },
  {
    id: "02",
    spanish: "el coche",
    transcription: "car",
    tags: "transport"
  
  },
  {
    id: "03",
    spanish: "la casa",
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


function Show (){ 
  
  return (
    <div>
    <div className={Show}>
      <div className='container'>
    {
      words.map((word) =>
      <Card spanish={word.spanish} translate={word.translate} tag={word.tags}
      isSelected={word.isSelected}></Card>
      )
  }
  </div>
</div>
    </div>
  );
}

export default Show;

