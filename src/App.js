
import {BrowserRouter as Router, 
  Routes, 
  Route} from "react-router-dom";

import Errorpage from '../src/components/pages/Errorpage.jsx';
import Homepage from './components/pages/Homepage';
import Playpage from './components/pages/Playpage';

import Header  from './components/Header';
import Footer  from './components/Footer';


function AppPages() {

    return (
        <Router>
            <div className="app">
                <Header/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/game" element={<Playpage/>}/>
                        <Route path="*" element={<Errorpage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default AppPages;