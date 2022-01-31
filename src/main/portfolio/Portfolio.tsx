import React from 'react';
import style from "./Portfolio.module.css";
import Project from './project/Project';


function Portfolio() {


    return (
        <div className={style.portfolioBlock}>
            <div className={style.portfolioContainer}>

                <h2 className={style.titlePortfolio}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Isle of Iona'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             image={'https://static.showit.co/800/w9LZJp8qSPaKdBmEweCHOA/69254/the_roar_showit_web_design_website_template_abigail_shop_layout.png'}/>
                    <Project title={'Anna May'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             image={'https://static.showit.co/800/4aDxVua-Raqo74LkNLC_rg/69254/the_roar_showit_web_design_website_template_anna_may.png'}/>
                    <Project title={'Tessa'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             image={'https://static.showit.co/1200/X7ZkMY4gRUyDZP7kfHW19w/69254/the_roar_showit_web_design_website_template_tessa_shop_image.png '}/>
                </div>
            </div>
        </div>
    )
}


export default Portfolio;