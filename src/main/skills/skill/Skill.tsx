import React from 'react';
import style from "./Skill.module.css";

export type SkillsPropsType = {
    title: string
    description: string
    icon: string
}

function Skill(props: SkillsPropsType) {


    return (
        <div className={style.skill}>
            <img  className={style.icon} src={props.icon} alt="skill"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}


export default Skill;