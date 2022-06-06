import Table from "../Table.jsx";
import {translations} from '../Main';
import { useState } from 'react';


function Home() {
  const[words, setWords] = useState(translations);
  
  const handleDelete = (id) =>{
    const newWords = words.filter((word) => word.id !== id);
    setWords(newWords);}

  return (
    <div className="home">
      <Table words={words} onDelete={handleDelete}/>
    </div>
  );
}

export default Home;