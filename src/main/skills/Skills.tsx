import React from 'react'
import style from "./Skills.module.css";
import Skill from "./skill/Skill";


function Skills() {


    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <div className={style.skills}>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}


export default Skills;