import React from 'react';
import style from "./Project.module.css";

export type ProjectPropsType = {
    title: string
    image: string
    description: string
}

function Project(props: ProjectPropsType) {


    return (
        <div className={style.project}>
            <div className={style.img}>
                <a className={style.viewBtn}>Смотреть</a>
            </div>
           {/* <img className={style.imgProject} src={props.image} alt="project"/>*/}
            <h3>{props.title}</h3>
            <span className={style.projectText}>{props.description}</span>
        </div>
    )
}


export default Project;