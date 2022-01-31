import React from 'react'
import style from './Footer.module.css'


function Footer() {


    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.footerItems}>
                    <a href="#"></a>
                    {/* <div className={style.item}>
                        <h5>Get in touch:</h5>
                        <span>mona.mag@mail.ru</span>
                        <div>+7(989)-671-2646</div>
                    </div>

                    <div className={style.item}>
                        <h5>Social:</h5>
                        <span>I'm in social media:</span>
                        <div className={style.linkMedia}>
                            <a href="https://www.linkedin.com/in/manarsha-magomedova-21372283/">linkedin</a>
                            <a href="https://www.facebook.com/mona.magomedova">facebook</a>
                            <a href="#">instagram</a>
                        </div>
                    </div>
                    <div className={style.item}>
                        <h5>Office:</h5>
                        <span>367030 M.Gadgieva, 92, Makhachkala, RD RF.</span>
                    </div>
                    <div className={style.item}>
                        <h5>Sigh up to newsletter:</h5>
                        <form className={style.formFooter}>
                            <input className={style.inputFooter} type="email"/>
                            <button className={style.btnFooter}>SEND</button>
                        </form>
                    </div>*/}
                </div>
                <div className={style.copyright}>@ 2021 | mona | All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer;