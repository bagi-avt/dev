import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './styles/styles.css'

import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

