import React from 'react'
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import style from "./Main.module.css";
import About from "./about/About";


function Main() {

    return (
        <div className={style.mainBlock}>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Main;