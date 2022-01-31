import React from 'react'
import style from './Header.module.css'


function Header() {

    return (
        <div className={style.headerBlock}>
            <div className={style.header}>
                <a href="#home" className={style.home}>HOME</a>
                <nav className={style.nav}>
                    <ul>
                        <li><a href="#about" className={style.menuItem}>ABOUT</a></li>
                        <li><a href="#skiils" className={style.menuItem}>SKILLS</a></li>
                        <li><a href="#portfolio" className={style.menuItem}>PORTFOLIO</a></li>
                        <li><a href="#contact" className={style.menuItem}>CONTACTS</a></li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}


export default Header;