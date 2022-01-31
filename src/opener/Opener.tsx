import React from 'react'
import style from "./Opener.module.css";

function Opener() {


    return (
        <div className={style.openerBlock}>
            <div className={style.openerContainer} >
                <div>
                    <div className={style.introduction}>
                        <span></span>
                        <h1>Hi, i'm
                            <br/>
                            Mona Magomedova</h1>
                        <p className={style.text}>Web developer & Freelancer</p>
                    </div>
                    <a className={style.btn}>CONTACT ME</a>
                </div>
                <div className={style.imgOpener}></div>
            </div>

        </div>
    )
}


export default Opener;