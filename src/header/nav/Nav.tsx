import React from 'react'
import style from './Nav.module.css'



function Nav() {
    return (
        <div className={style.nav}>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>
    )
}


export default Nav;