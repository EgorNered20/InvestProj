import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Request from "./components/Request";
import Tarifs from "./components/Tarifs";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" exact element={<Home />} />
                    <Route exact path="/info" exact element={<Info />} />
                    <Route exact path="/request" exact element={<Request />} />
                    <Route exact path="/tarifs" exact element={<Tarifs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
