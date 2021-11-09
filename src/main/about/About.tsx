import React from 'react'
import style from "./About.module.css";

function About() {


    return (
        <div className={style.aboutBlock}>

            <div className={style.container}>

                <div className={style.introductionAbout}>
                    <span>Hi, There</span>
                    <h1>Magomedova Manarsha</h1>
                    <p>I'm Front-end Developer. I code and create web elements for amazing people around the world. I have great interest for web programming and I like work with new people.</p>
                </div>

              {/*  <div className={style.photoAbout}>
                </div>*/}
                    <img className={style.photoAbout} src="https://bigtrees.tech/images/working-girl.png" alt="photo"/>

            </div>

        </div>
    )
}


export default About;