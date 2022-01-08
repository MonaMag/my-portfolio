import React from 'react'
import Skill from "./skill/Skill";
import style from "./Skills.module.css";


function Skills() {


    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.skillsTitle}>What can a do for you </h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'}
                           icon={''}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill title={'JS'} icon={''}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill title={'React'} icon={''}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                </div>
            </div>
        </div>
    )
}


export default Skills;