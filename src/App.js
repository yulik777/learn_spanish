import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Errorpage} from './components/pages/Errorpage';
import {Homepage} from './components/pages/Homepage';
import {Playpage} from './components/pages/Playpage';

import Header from './components/Header';
import Footer from './components/Footer';





function AppPages() {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/game" element={<Playpage/>}/>
                        <Route path="/error" element={<Errorpage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default AppPages;