import Table from "../Table.jsx";
import {translations as words} from '../Main';

function Home() {
  return (
    <div className="home">
      <Table words={words}/>
    </div>
  );
}

export default Home;