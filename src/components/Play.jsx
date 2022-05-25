import React from 'react';
import Card from './Card';
import './assets/styles/play.scss';

function Play({words}){ 
  
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

