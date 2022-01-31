import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Opener from "./opener/Opener";

function App() {
    return (
        <div className="App">
            <Header/>
            <Opener/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
