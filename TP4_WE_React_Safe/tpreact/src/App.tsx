import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createRoot } from 'react-dom/client';
import BeerList from './BeerList';
import About from './About';


const App = () => {
    const beers = ['Coreff', 'Corona', 'Mort Subite', 'Beelzebuth', '86', 'leffe'];

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/" element={<BeerList beers={beers} />}>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(<App/>);
//ReactDOM.render(<App />, document.getElementById('root'));


export default App;
