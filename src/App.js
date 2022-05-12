
import './App.css';
import Header from './components/Header';
import './assets/styles/header.scss'
import Play from './components/Play';
import Footer from './components/Footer';
import './assets/styles/footer.scss'
import Table from './components/Table';
import './assets/styles/table.scss';




function App() {
  return (
    <div className="App">
      <Header/>
      <Play/>
      <Table/>
  
      <Footer/>
    </div>
  );
}

export default App;
