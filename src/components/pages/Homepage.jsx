import Table from "../Table.jsx";
import words from '../Main';


function Home() {
  return (
    <div className="home">
      <Table words={words}/>
    </div>
  );
}

export default Home;