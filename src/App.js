import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Play from './components/Play';
import Footer from './components/Footer';
import Table from './components/Table';

let translations = [
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
    image: "dress.png",
    translate: "dress",
    tags: "things"
   
  },
  {
    id: "05",
    spanish: "labios",
    image: "lips.png",
    translate: "lips",
    tags: "body"

  }
];



function App() {
const[words, setWords] = useState(translations);

const handleDelete = (id) =>{
  const newWords = words.filter((word) => word.id !== id);
  setWords(newWords);
}


  return (
    <div className="App">
      <Header/>
      <Play words={words}/>
      <Table words={words} onDelete={handleDelete}/>
      <Footer/>
    </div>
  );
}

export default App; 