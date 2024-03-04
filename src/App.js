import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact={true} path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/movie-detail' element={<Detail />}></Route>
                </Routes>
                <Navigation />
            </HashRouter>
        </div>
    );
}

export default App;
